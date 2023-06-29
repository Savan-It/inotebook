import React, { useContext, useState } from 'react'
import noteContext from '../context/notes/noteContext'
const Home = () => {
  const context = useContext(noteContext);
  const [otherTag, setotherTag] = useState(false)

  const { notes, setNotes } = context;

  const handleTag = (e) => {
    if (e.target.value === 'Other') {
      setotherTag(true)
    } else {
      setotherTag(false)
    }
  }
  return (
    <>
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
                  <label htmlFor="name" className="leading-7 text-sm text-white">Title</label>
                  <input type="text" id="name" name="name" className="w-full bg-black rounded bg-opacity-50 text-base outline-none text-slate-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label htmlFor="select" className="leading-7 text-sm text-white">Tag</label>
                  <select onChange={handleTag} className="h-10 body-font  w-full bg-black bg-opacity-50 rounded  text-base outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
                    <option>Select</option>
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
                  <label htmlFor="name" className="leading-7 text-sm text-white">Tag</label>
                  <input type="text" id="name" name="name" placeholder="write yout tag" className="w-full bg-black rounded bg-opacity-50 text-base placeholder-white placeholder:opacity-40 outline-none text-slate-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
              </div>}
              <div className="p-2 w-full">
                <div className="relative">
                  <label htmlFor="message" className="leading-7 text-sm text-white">Description</label>
                  <textarea id="message" name="message" className="w-full bg-black bg-opacity-50 rounded  h-32 text-base outline-none text-white py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                </div>
              </div>
              <div className="p-2 w-full">
                <button className="btn">Button</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="text-white body-font">
        <div className="container flex flex-wrap px-3 py-5 mx-auto">
        {notes.map((note) => {
          console.log(note.title);
          return <div key={note._id} className="block m-3 max-w-sm p-6 bg-custom_green-400 border border-custom_green-700  hover:bg-custom_green-500 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{note.title}</h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">{note.description}</p>
          </div>
        })}
          
        </div>
      </section>
    </>

  )
}

export default Home