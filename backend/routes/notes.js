const express = require('express')
const router = express.Router();

router.get('/', (req, res)=>{
    obj ={
        saurname: "kumbhar",
        city: 'pune'
    }
    res.json(obj);
})

module.exports = router;