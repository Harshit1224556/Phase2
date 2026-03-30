import React, { useContext,useEffect} from 'react'
import { Expensecontex } from '../context/Expensecontext'

import {Budgetcontex} from '../context/Budgetcontext'
import './Expenses.css'   

function Expenses() {
  const { budget, setbudget } = useContext(Expensecontex)
  const {expense,setexpense} = useContext(Budgetcontex)
    
useEffect(() => {
  if (!expense || expense.length === 0) return

  setbudget(prev =>
    prev.map(element => {
      const totalSpent = expense
        .filter(exp => exp.catg === element.categ)
        .reduce((sum, exp) => sum + Number(exp.exact), 0)  
             
      return { ...element, expense: totalSpent }
    })
  )
}, [expense])
  
  return (
    <div className="expenses-container">
      <h2 className="expenses-title">Listed Budget</h2>

      <div className="budget-grid">
        {budget.map((item, id) => {
          const percent = Math.min((item.expense / item.total) * 100, 100)
          const remaining = item.total - item.expense
           
          return (
            <div className="budget-card" key={id}>
              <p className="card-category">{item.categ}</p>

              <div className="card-row">
                <span className="card-label">Total</span>
                <span className="card-value">₹{item.total.toLocaleString()}</span>
              </div>

              <div className="card-row">
                <span className="card-label">Spent</span>
                <span className="card-value expense">₹{item.expense.toLocaleString()}</span>
              </div>

              <div className="progress-wrap">
                <div className="progress-bar" style={{ width: `${percent}%` }} />
              </div>

              <p className="remaining">Remaining: ₹{remaining.toLocaleString()}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}
export default Expenses