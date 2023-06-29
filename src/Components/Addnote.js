import React, { useState, useContext } from 'react'
import noteContext from '../context/notes/noteContext'

const Addnote = () => {
    const context = useContext(noteContext);
    const { addNote } = context;
    const [otherTag, setotherTag] = useState(false);
    const [note, setNote] = useState({ title: "", description: "", tag: "" })

    const handleSubmitBtn = () => {
        addNote(note);
        setNote({ title: "", description: "", tag: "" })
        setotherTag(false);

    }
    
    const handleOnchange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value })
    }
    const handleTag = (e) => {
        if (e.target.value === 'Other') {
            setotherTag(true)
        } else {
            setotherTag(false)
            setNote({ ...note, tag: e.target.value })
        }
    }
    return (
        <section className="text-white body-font relative">
            <div className="container px-5 py-10 mx-auto">
                <div className="flex flex-col text-center w-full mb-6">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">Add Note</h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">"Unleash Your Ideas, Capture Your Thoughts"</p>
                </div>
                <div className="lg:w-1/2 md:w-2/3 mx-auto">
                    <div className="flex flex-wrap -m-2">
                        <div className="p-2 w-1/2">
                            <div className="relative">
                                <label htmlFor="title" className="leading-7 text-sm text-white">Title</label>
                                <input type="text" autoComplete="off" id="title" value={note.title} onChange={handleOnchange} name="title" className="w-full bg-black rounded bg-opacity-50 text-base outline-none text-slate-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                        </div>
                        <div className="p-2 w-1/2">
                            <div className="relative">
                                <label htmlFor="tah" className="leading-7 text-sm text-white">Tag</label>
                                <select onChange={handleTag} value={note.tag} className="h-10 body-font  w-full bg-black bg-opacity-50 rounded  text-base outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
                                    <option>Personal</option>
                                    <option>Important</option>
                                    <option>Office</option>
                                    <option>Home</option>
                                    <option>Other</option>
                                </select>
                            </div>
                        </div>
                        {otherTag && <div className="p-2 w-full">
                            <div className="relative">
                                <label htmlFor="tag" className="leading-7 text-sm text-white">Tag</label>
                                <input type="text" id="tag" autoComplete="off" onChange={handleOnchange} name="tag" placeholder="write yout tag" className="w-full bg-black rounded bg-opacity-50 text-base placeholder-white placeholder:opacity-40 outline-none text-slate-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                        </div>}
                        <div className="p-2 w-full">
                            <div className="relative">
                                <label htmlFor="description" className="leading-7 text-sm text-white">Description</label>
                                <textarea id="description" autoComplete="off" value={note.description} onChange={handleOnchange} name="description" className="w-full bg-black bg-opacity-50 rounded  h-32 text-base outline-none text-white py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                            </div>
                        </div>
                        <div className="p-2 w-full">
                            <button className="btn" onClick={handleSubmitBtn}>Add note</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Addnote