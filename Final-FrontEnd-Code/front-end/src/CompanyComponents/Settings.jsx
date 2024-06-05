import React, { useState } from 'react'
import './Setting.css'
const Settings = () => {
  const [opt, setopt] = useState('setting')
  
  
  return (
    <div className='settingContainer'>
      <div className='settingBox'>
        <div className="head">
          <h3  className={opt==='setting' ? 'selectedClass' : ''}  onClick={()=>{setopt('setting')}}>Account</h3>
          <h3  className={opt==='security' ? 'selectedClass' : ''} onClick={()=>{setopt('security')}}>Security</h3>
        </div>
        {opt=== 'setting' ? <div className="settings">
        <div className='textField'>
          <label htmlFor="name">Full Name</label>
          <input type="text"  placeholder='Name' name='name' id='name' />
        </div>
        <div className='textField'>
          <label htmlFor="email">Email</label>
          <input type="email" placeholder='Email'  name='email' id='email' />
        </div>
        <div className='textField'>
          <label htmlFor="purpose">purpose</label>
          <input type="text"  placeholder='Purpose' name='purpose' id='purpose' />
        </div>
        <div className='textField'>
          <label htmlFor="number">number</label>
          <input type="number"  placeholder='Contact Number' name='number' id='number' />
        </div>
        <div className='textField'>
            <button className='update'>Update Profile</button>
          </div>
        </div>
        :
        <div className="security">
          <div className='textField'>
          <label htmlFor="oldPassword">Old Password</label>
          <input type="password"  placeholder='Old password' name='oldPassword' id='oldPassword' />
        </div>
        <div className='textField'>
          <label htmlFor="newPassword">New Password</label>
          <input type="password" placeholder='New Password'  name='newPassword' id='newPassword' />
        </div>
        <div className='textField'>
          <label htmlFor="confirmPassword">Comfirm Password</label>
          <input type="password"  placeholder='Confirm Password' name='confirmPassword' id='confirmPassword' />
        </div>
        <div className='textField'>
          <label htmlFor="number">number</label>
          <input type="number"  placeholder='Contact Number' name='number' id='number' />
        </div>
        <div className='textField'>
            <button className='update'>Update</button>
          </div>



        </div>}
      </div>

    </div>
  )
}

export default Settings