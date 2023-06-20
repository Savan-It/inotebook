const express = require('express')
const router = express.Router();
const Note = require('../models/Note');
const fetchuser = require('../middleware/fetchuser');
const { body, validationResult } = require('express-validator');

// ROUTE 1: Get all the notes using: GET "/api/note/fetchallnote". login required
router.get('/fetchallnote', fetchuser, async (req, res) => {
    try {
        // find notes of the user logged in
        const notes = await Note.find({ user: req.user.id })
        res.json(notes);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal server error");
    }
})

// ROUTE 2: Add new note using: POST "/api/note/addnote". login required
router.post('/addnote', [
    body('title', 'Enter a valid title').isLength({ min: 3 }),
    body('description', 'Description must be atleast 5 characters').isLength({ min: 5 }),
], fetchuser, async (req, res) => {

    // If there are errors, return Bad request and the errors\
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const { title, description, tag } = req.body;

    try {
        // Create a new note
        const note = new Note({
            title, description, tag, user: req.user.id
        })

        const savedNote = await note.save()
        res.json(savedNote)
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal server error");
    }

})

// ROUTE 3: Update an existing note using: PUT "/api/note/updatenote". login required
router.put('/updatenote/:id', fetchuser, async (req, res) => {
    const { title, description, tag } = req.body;
    try {
        // Create a newNote object
        const newnote = {};
        if (title) { newnote.title = title };
        if (description) { newnote.description = description };
        if (tag) { newnote.tag = tag };

        // find the note to be updated and update it
        let note = await Note.findById(req.params.id);
        if (!note) { return res.status(404).send("Not Found") }

        // Allow updation only if user owns this note
        if (note.user.toString() !== req.user.id) {
            return res.status(401).send("Not Allowed");
        }

        note = await Note.findByIdAndUpdate(req.params.id, { $set: newnote }, { new: true })
        res.json({ note })
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal server error");
    }
})

// ROUTE 4: Delete an existing note using: DELETE "/api/note/deletenote". login required
router.delete('/deletenote/:id', fetchuser, async (req, res) => {

    try {

        //find the note to be deleted and delete it
        let note = await Note.findById(req.params.id);
        if (!note) { return res.status(404).send("Not Found") }

        // Allow deletion only if user owns this note
        if (note.user.toString() !== req.user.id) {
            return res.status(401).send("Not Allowed");
        }

        note = await Note.findByIdAndDelete(req.params.id)
        res.json({ "success": "Note has been deleted", note: note })
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal server error");
    }
})

module.exports = router;