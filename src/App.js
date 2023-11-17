import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Quizz from './components/Quizz/Quizz';
import Spells from './components/Spells/Spells';
import Books from './components/Books/Books';
import Home from './components/Home/Home';
import Subjects from './components/Subjects/Subjects';
import './App.css';
import Stars from './Stars';


function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  

  return (
    <Router>
      <nav>
        <div className={`links ${isMenuOpen ? 'show' : ''}`}>
          <Link to="/" className="link"  onClick={closeMenu}>
            Home
          </Link>
          <Link to="/quizz" className="link"  onClick={closeMenu}>
            Sorting Hat
          </Link>
          <Link to="/subjects" className='link' onClick={closeMenu}>
            Subjects
          </Link>
          <Link to="/spells" className="link" onClick={closeMenu}>
            Spellbook
          </Link>
          <Link to="/books" className="link" onClick={closeMenu}>
            Books
          </Link>
          <button className="close-btn" onClick={closeMenu}>
            X
          </button>
        </div>
        <button className="burger-btn" onClick={toggleMenu}>
          ☰
        </button>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quizz" element={<Quizz />} />
        <Route path="/subjects" element={<Subjects />} />
        <Route path="/spells" element={<Spells />} />
        <Route path="/books" element={<Books />} />
      </Routes>
      <Stars />
    </Router>
  );
}

export default App;
