import React from 'react'
import './BankAccount.css'

const BankAccount = () => {
  return (
    <div className='bankContainer'>
      <h1>Bank Account Details</h1>
      <div className="bankBox">
          <div className="bankDetails">
          <div className="settings">
        <div className='textField'>
          <label htmlFor="bank">Bank</label>
          <input type="text"  placeholder='Bank' name='bank' id='bank' />
        </div>
        <div className='textField'>
          <label htmlFor="cardType">Card Type</label>
          <input type="text" placeholder='Card Type'  name='cardType' id='cardType' />
        </div>
        <div className='textField'>
          <label htmlFor="accountNumber">Account Number</label>
          <input type="number"  placeholder='Account Number' name='accountNumber' id='accountNumber' />
        </div>
        <div className='textField'>
            <button className='update'>Submit</button>
          </div>
        </div>
          </div>
          <div className="bankCard">
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
          </div>
      </div>
    </div>
  )
}

export default BankAccount