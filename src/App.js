import React from 'react';
import Navbar from './Components/Navbar';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import About from './Components/About';
import Home from './Components/Home';
import Contact from './Components/Contact';
import NoteState from './context/notes/noteState';

function App() {
  return (
    <NoteState>
      <Router>
        <Navbar />
        <div className="bg-custom_black min-h-screen">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
          </Routes>
        </div>
      </Router>
    </NoteState>
  );
}

export default App;
