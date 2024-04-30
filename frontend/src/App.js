import React from 'react'
import Login from './Login'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Signup from './Signup'
import Home from './Home';
import Contactus from './Contactus';
import Navbar from './navbar';
import Aboutus from './aboutus';

function App() {
  return (
    <BrowserRouter>
     <Navbar/>
      <Routes>
        <Route path="/" element={<Login/>}></Route>
        <Route path="/signup" element={<Signup/>}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/contactus' element={<Contactus />}></Route>
        <Route path='/aboutus' element={<Aboutus />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App