import React, { useContext, useEffect } from 'react'
import noteContext from '../context/notes/noteContext'
import Noteitem from './Noteitem'


const Note = () => {
    const context = useContext(noteContext);
    // eslint-disable-next-line
    const { notes, getNote } = context;

    useEffect(() => {
        getNote();
        // eslint-disable-next-line 
    }, [])
    let colors = ["bg-custom_green-300 border-5 border-custom_green-500 ",
        "bg-custom_yellow-300 border-5  border-custom_yellow-500",
        "bg-custom_pink-300 border-5  border-custom_pink-500",
        "bg-custom_purple-300 border-5  border-custom_purple-500",
        "bg-custom_blue-300 border-5  border-custom_blue-500"]
    let tagColors = ["bg-custom_green-400", "bg-custom_yellow-400", "bg-custom_pink-400", "bg-custom_purple-400", "bg-custom_blue-400"]

    return (
        <div className="container flex flex-wrap  px-3 py-3 mx-auto">
            {notes.map((note) => {
                let randomNumber = Math.floor(Math.random() * colors.length);
                var color = colors[randomNumber];
                var tagColor = tagColors[randomNumber];
                return <Noteitem key={note._id} note={note} color={color} tagColor={tagColor} />
            })}
        </div>
    )
}

export default Note