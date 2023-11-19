import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div>
      <div className={`links ${isMenuOpen ? 'show' : ''}`}>
        <Link to="/" className="link" onClick={closeMenu}>
          Home
        </Link>
        <Link to='/founders' className="link" onClick={closeMenu}>
          Founders
        </Link>
        <Link to="/quizz" className="link" onClick={closeMenu}>
          Sorting Hat
        </Link>
        <Link to="/houses" className="link" onClick={closeMenu}>
          Faculties
        </Link>
        <Link to="/subjects" className="link" onClick={closeMenu}>
          Subjects
        </Link>
        <Link to="/staff" className="link" onClick={closeMenu}>
          Staff
        </Link>
        <Link to="/spells" className="link" onClick={closeMenu}>
          Spellbook
        </Link>
        <Link to="/books" className="link" onClick={closeMenu}>
          Library
        </Link>
        <button className="close-btn" onClick={closeMenu}>
          X
        </button>
      </div>
      <button className="burger-btn" onClick={toggleMenu}>
        ☰
      </button>
    </div>
  );
};

export default Menu;
