import React, { useState } from 'react'
import './Budget.css'
import { useBudget } from '../context/Budgetcontext'
function Budget() {

    const [desc,setdesc] = useState("")
    const [catg,setcatg] = useState("")
    const[exact,setexact] = useState("")
    const {expense,setexpense,saveExpense} = useBudget()

     console.log(expense)
    function handlesubmit(e){
      e.preventDefault();
     console.log("Hello jee")
      const newobj={
        desc,
        catg,
        exact
      }
      const updated = [...expense,newobj]
      saveExpense(updated)
     
    }
  return (
    <div className="budget-wrapper">
      <div className="budget-card">
        <h2>Add Expenses</h2>
        <form className="budget-form" onSubmit={handlesubmit}>
          <input type="text" placeholder="Description of Expenses"
          onChange={(e)=>setdesc(e.target.value)}  value={desc}/>
          <select value={catg} onChange={(e)=>setcatg(e.target.value)}>
            <option>Select category</option>
            <option value="food">Food</option>
            <option value="grocery">Grocery</option>
            <option value="gym">Gym</option>
            <option value="college">College</option>
            <option value="rent">Rent</option>
            <option value="ebill">E-Bill</option>
          </select>

          <input type="number" placeholder="Enter the expenses"  onChange={(e)=>setexact(e.target.value)} value={exact}/>
           
          <button type ="submit">Add</button>
          
        </form>
      </div>
    </div>
  )
}

export default Budget

//Routing Page Implementations Features

