// Home.jsx
import React from 'react'
import './Home.css'

function Home() {
  return (
    <div className="home-wrapper">
      <div className="home-container">

        <div className="hero">
          <h1 className="hero-title">Track Your <span className="highlight">Finances</span></h1>
          <p className="hero-subtitle">Monitor your expenses and budgets in one place.</p>
          <div className="hero-buttons">
            <button className="btn-primary">Get Started</button>
            <button className="btn-secondary">Learn More</button>
          </div>
        </div>

        <div className="cards">
          <div className="card">
            <div className="card-icon">💸</div>
            <h3>Expenses</h3>
            <p>Track where your money goes every day.</p>
          </div>
          <div className="card">
            <div className="card-icon">📊</div>
            <h3>Budget</h3>
            <p>Set limits and stay in control of spending.</p>
          </div>
          <div className="card">
            <div className="card-icon">📈</div>
            <h3>Insights</h3>
            <p>Visualize your financial habits over time.</p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Home