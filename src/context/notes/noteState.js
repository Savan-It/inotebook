import noteContext from "./noteContext";
import { useState } from "react";


const NoteState = (props) => {
   const initialNotes = [
      {
         "_id": "6491459021deb5d900d99e6b",
         "user": "649132c5e2a9a84134191cb9",
         "title": "updated",
         "description": "hihihihahahahaha ",
         "tag": "swag",
         "date": "2023-06-20T06:22:08.591Z",
         "__v": 0
      },
      {
         "_id": "64916c9dfa8ea00bcc579dc1",
         "user": "649132c5e2a9a84134191cb9",
         "title": "good monringdfg",
         "description": "welcome",
         "tag": "personal",
         "date": "2023-06-20T09:08:45.128Z",
         "__v": 0
      },
      {
         "_id": "64916ca3fa8ea00bcc579dc3",
         "user": "649132c5e2a9a84134191cb9",
         "title": "good monrinsgdfg",
         "description": "welcome",
         "tag": "personal",
         "date": "2023-06-20T09:08:51.022Z",
         "__v": 0
      },
      {
         "_id": "6491a0444e85a9bec8011a64",
         "user": "649132c5e2a9a84134191cb9",
         "title": "good night",
         "description": "welcome",
         "tag": "personal",
         "date": "2023-06-20T12:49:08.575Z",
         "__v": 0
      },
      {
         "_id": "6491a0594e85a9bec8011a66",
         "user": "649132c5e2a9a84134191cb9",
         "title": "good monring",
         "description": "welcome",
         "tag": "personal",
         "date": "2023-06-20T12:49:29.093Z",
         "__v": 0
      }
   ]
   const [notes, setNotes] = useState(initialNotes)
   return (
      <noteContext.Provider value={{ notes, setNotes }}>
         {props.children}
      </noteContext.Provider>
   )
}

export default NoteState;