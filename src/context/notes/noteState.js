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
   const addNote = async (newNote) => {
      const { title, description, tag } = newNote;
      //API call
      const response = await fetch(`${host}/addnote`, {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json',
            'auth-token': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ5MTMyYzVlMmE5YTg0MTM0MTkxY2I5In0sImlhdCI6MTY4NzIzNzMxN30.tZOLMWV9nqUaXaDAQ0xVxkBxsg35uPLptdlGudPAXkE"
         },
         body: JSON.stringify({ title, description, tag })
      });
      const json = await response.json();
      console.log(json);
      // setNotes(notes.concat(note))
   }
   const deleteNote = async (id) => {
      //API call
      const response = await fetch(`${host}/deletenote/${id}`, {
         method: 'DELETE',
         headers: {
            'Content-Type': 'application/json',
            'auth-token': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ5MTMyYzVlMmE5YTg0MTM0MTkxY2I5In0sImlhdCI6MTY4NzIzNzMxN30.tZOLMWV9nqUaXaDAQ0xVxkBxsg35uPLptdlGudPAXkE"
         },
      });
     const json = await response.json();
       console.log(json);
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