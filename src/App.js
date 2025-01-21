import React from 'react';
import './App.css';
import Navbar from './components/miscellaneous/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Hobbies from './components/pages/Hobbies';
import Projects from './components/pages/Projects';
import Background from './components/pages/Background';

function App() {
  return (
    <Router> 
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/hobbies' element={<Hobbies />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/background' element={<Background />} />
      </Routes>
    </Router>
  );
}

export default App;
