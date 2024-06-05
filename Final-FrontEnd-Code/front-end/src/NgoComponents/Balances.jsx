import React from 'react'
import './Balance.css'


const Balances = () => {
  return (
    <div className='balanceContainer'>
        <div className='card'>
            <div className="cardHead">
                <h3>Credit Card</h3>
                <div>Master Card <span></span><span></span></div>
            </div>
            <div className="cardBody">
                <h1>3388 4556 8860 8***</h1>
                <h4>Account Number</h4>
                <h1>$25000</h1>
                <h4>Total Number</h4>
            </div>
            <div className="cardFoot">
            <button>Remove</button>
            <button>Details</button>
            </div>
        </div>


        <div className='card'>
            <div className="cardHead">
                <h3>Checking</h3>
                <div>AB Bank Ltd <span></span><span></span></div>
            </div>
            <div className="cardBody">
                <h1>693 456 699 ***</h1>
                <h4>Account Number</h4>
                <h1>$25000</h1>
                <h4>Total Number</h4>
            </div>
            <div className="cardFoot">
            <button>Remove</button>
            <button>Details</button>
            </div>
        </div>


        <div className='card'>
            <div className="cardHead">
                <h3>Settings</h3>
                <div>Brac Bank Ltd <span></span><span></span></div>
            </div>
            <div className="cardBody">
                <h1>3388 4556 8860 8***</h1>
                <h4>Account Number</h4>
                <h1>$25000</h1>
                <h4>Total Number</h4>
            </div>
            <div className="cardFoot">
            <button>Remove</button>
            <button>Details</button>
            </div>
        </div>

        <div className='card'>
            <div className="cardHead">
                <h3>Investment</h3>
                <div>AB Bank Ltd <span></span><span></span></div>
            </div>
            <div className="cardBody">
                <h1>789 890 236 2***</h1>
                <h4>Account Number</h4>
                <h1>$25000</h1>
                <h4>Total Number</h4>
            </div>
            <div className="cardFoot">
            <button>Remove</button>
            <button>Details</button>
            </div>
        </div>


        <div className='card'>
            <div className="cardHead">
                <h3>Loan</h3>
                <div>City Bank Ltd <span></span><span></span></div>
            </div>
            <div className="cardBody">
                <h1>3388 4556 8860 8***</h1>
                <h4>Account Number</h4>
                <h1>$25000</h1>
                <h4>Total Number</h4>
            </div>
            <div className="cardFoot">
            <button>Remove</button>
            <button>Details</button>
            </div>
        </div>


    </div>
  )
}

export default Balances