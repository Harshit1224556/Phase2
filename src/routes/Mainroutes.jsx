import React from 'react'
import { Routes, Route } from 'react-router-dom';

import Home from '../pages/Home'
import Budget from '../components/Budget';
function Mainroutes() {
  return (
   

        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/budget" element={<Budget />}></Route>
        </Routes>
   
  )
}

export default Mainroutes