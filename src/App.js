import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Quizz from './components/Quizz/Quizz';
import Spells from './components/Spells/Spells';
import Books from './components/Books/Books';
import Home from './components/Home/Home';
import Subjects from './components/Subjects/Subjects';
import './App.css';
import Stars from './Stars';
import Staff from './components/Staff/Staff';
import Founders from './components/Founders/Founders';
import Houses from './components/Houses/Houses';
import Menu from './Menu';

function App() {
  return (
    <Router>
      <nav>
        <Menu />
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/founders" element={<Founders />} />
        <Route path="/quizz" element={<Quizz />} />
        <Route path="/houses" element={<Houses />} />
        <Route path="/subjects" element={<Subjects />} />
        <Route path="/staff" element={<Staff />} />
        <Route path="/spells" element={<Spells />} />
        <Route path="/books" element={<Books />} />
      </Routes>
      <Stars />
    </Router>
  );
}

export default App;
