import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';

//page components
import About from './pages/About'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Article from './pages/Article'

import "./index.css"

const App = () => {
  return (
    <div className="App">
      <Router>
        <nav>
          <NavLink className='link' to="/">Home</NavLink>
          <NavLink className='link' to="/about">About</NavLink>
          <NavLink className='link' to="/contact">Contact</NavLink>
        </nav>
        
        <Routes>
          <Route path='/about' element = {<About />} />
          <Route path='/contact' element= {<Contact />} />
          <Route path='/' element={<Home />} />
          <Route path='/posts/:id' element={<Article />}/>
        </Routes>
      </Router>
     
    </div>
  )
}

export default App;