import React from 'react'
import { useBudget } from '../context/Budgetcontext'
import './Transaction.css'

function Transaction() {
  const { expense, setexpense } = useBudget()

  return (
    <div className="transaction-wrapper">
      <div className="transaction-container">

        <h2 className="transaction-title">💳 Transactions</h2>

        {expense.length === 0 ? (
          <div className="empty-state">
            <p>No transactions yet.</p>
          </div>
        ) : (
          <div className="transaction-list">
            {expense.map((item, id) => (
              <div key={id} className="transaction-card">
                <div className="transaction-left">
                  <div className="transaction-icon">💸</div>
                  <div>
                    <h3 className="transaction-desc">{item.desc}</h3>
                    <span className="transaction-category">{item.catg}</span>
                  </div>
                </div>
                <div className="transaction-amount">- ₹{item.exact}</div>
              </div>
            ))}
          </div>
        )}

      </div>
    </div>
  )
}

export default Transaction