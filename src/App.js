import React from 'react';
import {  BrowserRouter as Router,
  Routes,
  Route,
  Link } from "react-router-dom";
import Quizz from './components/Quizz/Quizz';
import Spells from './components/Spells/Spells';
import Books from './components/Books/Books';
import Home from './Home';
import { BooksData } from './components/Books/BooksData';
import './App.css';


function App() {
  return <Router>
    <nav>
      <Link to="/home" className='link'>Home</Link>
      <Link to="/quizz" className="link">Quizz</Link>
      <Link to="/spells" className='link'>Spells</Link>
      <Link to="/books" className="link">Books</Link>
    </nav>
    <Routes>
      <Route path='/home' element={<Home/>}/>
      <Route path='/quizz' element={<Quizz/>}/>
      <Route path='/spells' element={<Spells />}/>
      <Route path='/books' element={<Books booksData={BooksData} />} />
    </Routes>
    </Router>
}

export default App;
