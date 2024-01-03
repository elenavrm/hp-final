import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Quizz from './components/Quizz/Quizz';
import Spells from './components/Spells/Spells';
import Books from './components/Books/Books';
import Home from './components/Home/Home';
import Subjects from './components/Subjects/Subjects';
import Staff from './components/Staff/Staff';
import Founders from './components/Founders/Founders';
import Houses from './components/Houses/Houses';
import Stars from './Stars';
import Menu from './Menu';
import './App.css';
import Cart from './components/Cart/Cart';

function App() {
  return (
    <Router>
        <Menu />
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
      <Cart />
    
    </Router>
  );
}

export default App;
