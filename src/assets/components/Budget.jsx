import React, { useState } from 'react'
import './Budget.css'

function Budget() {

    const [desc,setdesc] = useState("")

  return (
    <div className="budget-wrapper">
      <div className="budget-card">
        <h2>Add budget</h2>
        <form className="budget-form">
          <input type="text" placeholder="Description of Expenses"
          onChange={(e)=>setdesc(e.target.value)}  value={desc}/>
          <select>
            <option value="">Select category</option>
            <option value="food">Food</option>
            <option value="grocery">Grocery</option>
            <option value="gym">Gym</option>
            <option value="college">College</option>
            <option value="rent">Rent</option>
            <option value="ebill">E-Bill</option>
          </select>

                    <input type="number" placeholder="Enter the expenses" />
           
          <button type="submit">Add</button>
        </form>
      </div>
    </div>
  )
}

export default Budget