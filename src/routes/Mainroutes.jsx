import React from 'react'
import { Routes, Route } from 'react-router-dom';

import Home from '../pages/Home'
import Budget from '../components/Budget';
import Expenses from '../pages/Expenses';
import Transcation from '../pages/Transcation';
function Mainroutes() {
  return (
   

        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/expense" element={<Budget />}></Route>
            <Route path='/budget' element={<Expenses />}></Route>
            <Route path='/transcation' element={<Transcation />}></Route>
        </Routes>
   
  )
}

export default Mainroutes