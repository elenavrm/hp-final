import React from 'react';
import {  BrowserRouter as Router,
  Routes,
  Route,
  Link } from "react-router-dom";
import Quizz from './Quizz';
import Potions from './Potions';
import Books from './Books';
import Home from './Home';
import { BooksData } from './BooksData';
import './App.css';

function App() {
  return <Router>
    <nav>
      <Link to="/home" className='link'>Home</Link>
      <Link to="/quizz" className="link">Quizz</Link>
      <Link to="/potions" className="link">Potions</Link>
      <Link to="/books" className="link">Books</Link>
    </nav>
    <Routes>
      <Route path='/home' element={<Home/>}/>
      <Route path='/quizz' element={<Quizz/>}/>
      <Route path='/potions' element={<Potions/>}/>
      <Route path='/books' element={<Books booksData={BooksData} />} />
    </Routes>
    </Router>
}

export default App;
