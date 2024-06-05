import React, { useState } from 'react'
import './VerificationPage.css'
import { useNavigate } from 'react-router-dom';

const Verification = () => {
  const [Otp, setOtp] = useState();
  const navigate= useNavigate();

  const handleVerify=async ()=>{
    const result=await fetch('http://localhost:3000/verify-otp',{
      method: "POST",
        headers:{
          "content-type" : "application/json",
        },
        body: JSON.stringify({
          "otp" : Otp
        }),
    }).then(res=> res.json()).then(respo=> {return respo})
    console.log(result.status)
    if(result.status){
        navigate('/login');
    }else{
      alert("Incorrect Otp");
    }
  }
  return (
    <div className='verifyContainer'>
      <div className='verifyBox'>
        <h2>OTP Verification</h2>
        <input type="text"  placeholder='one time password' onChange={(e)=>{setOtp(e.target.value)}} name="otp" id="otp" />
        <p>OTP will expire after 30sec</p>
        <button className='verifyButton' onClick={handleVerify}>Verify</button>
      </div>
    </div>
  )
}

export default Verification