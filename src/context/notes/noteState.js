import noteContext from "./noteContext";
import { useState } from "react";


const NoteState = (props) => {
   const initialNotes = []
   const [notes, setNotes] = useState(initialNotes)

   const host = "http://localhost:5000/api/note";

   const getNote = async()=>{
      const response = await fetch(`${host}/fetchallnote`, {
         method: 'GET',
         headers: {
            'Content-Type': 'application/json',
            'auth-token': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ5MTMyYzVlMmE5YTg0MTM0MTkxY2I5In0sImlhdCI6MTY4NzIzNzMxN30.tZOLMWV9nqUaXaDAQ0xVxkBxsg35uPLptdlGudPAXkE"
         },
      });
      const json = await response.json();
      setNotes(json)
   }
   //Add a note
   const addNote = (newNote) => {
      const { title, description, tag } = newNote;
      //API call
      const note = { 
         "_id": "6491a0594e85a9bec8011a66",
         "user": "649132c5e2a9a84134191cb9",
         "title": title,
         "description": description,
         "tag": tag,
         "date": "2023-06-20T12:49:29.093Z",
         "__v": 0
      }
      setNotes(notes.concat(note))
   }
   const deleteNote = (id) => {
      //API call
     const newNote = notes.filter((note)=>{return note._id!==id})
      setNotes(newNote)
   }

   const editNote =(id, title, description, tag) => {
      //API call
      for (let index = 0; index < notes.length; index++) {
         const element = notes[index];
         if(element._id===id){
            element.title=title;
            element.description=description;
            element.tag=tag;
         }
         
      }
   }

   return (
      <noteContext.Provider value={{ notes, addNote, deleteNote, editNote, getNote }}>
         {props.children}
      </noteContext.Provider>
   )
}

export default NoteState;