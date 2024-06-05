import React, {  useState } from 'react';
import hamdardLogo from '../assests/hamdard.png'
import pictureDonation from '../assests/kids1.jpeg'
import { Link, useNavigate } from 'react-router-dom';
import {useAuth} from '../context/AuthContext';
// const jwt= require('jsonwebtoken');

const Login = () => {
 
  const {user,login}=useAuth();
  
  const navigate= useNavigate();
  const gradientCustom2Style = {
    background: '#fccb90',
  };

  const mediaQueryStyles = {
    '@media (min-width: 768px)': {
      '.gradient-form': {
        height: '100vh !important',
      },
    },
    '@media (min-width: 769px)': {
      '.gradient-custom-2': {
        borderTopRightRadius: '.3rem',
        borderBottomRightRadius: '.3rem',
      },
    },
  };


  const [formData,setFormData]= useState({
    email: "",
    password: ""
  });

  const handleChange=(e)=>{
    setFormData({
      ...formData,
      [e.target.id] : e.target.value
    })
  }

  const handleLoginBtn=async (e)=>{
    const response =await fetch("http://localhost:3000/login/company",{
      method: "POST",
      headers: { 
        "Content-Type": "application/json"
       },
      body: JSON.stringify(formData),
    }).then(res=> res.json())

    if(response.success){
      // const data= jwt.verify(response.token,'21532153');
      login(response.data.company);
      console.log(user);
      console.log(response.data)
      navigate('/company/dashboard');
    }else{
      alert(response.errors);
    }
  }

  return (
    <div>
      <section className="h-100 gradient-form" style={{ ...mediaQueryStyles['@media (min-width: 768px)']['.gradient-form'], backgroundColor: '#eee', ...gradientCustom2Style  }}>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-xl-10">
              <div className="card rounded-3 text-black">
                <div className="row g-0">
                  <div className="col-lg-6">
                    <div className="card-body p-md-5 mx-md-4">
                      <div className="text-center">
                        <img src={hamdardLogo}
                          style={{ width: '185px' }} alt="logo" />
                        {/* <h4 className="mt-1 mb-5 pb-1"></h4> */}
                      </div>
                      <form>
                        <p>Please login to your account</p>
                        <div data-mdb-input-init clasPsName="form-outline mb-4">
                          <input type="email" id="email" className="form-control"
                            placeholder="Phone number or email address" onChange={handleChange} />
                          <label className="form-label" htmlFor="form2Example11"></label>
                        </div>
                        <div data-mdb-input-init clasPsName="form-outline mb-4">
                        <input type="password" id="password" className="form-control"
                            placeholder="Password" onChange={handleChange} />
                          <label className="form-label" htmlFor="form2Example22"></label>
                        </div>
                        <div className="text-center pt-1 mb-5 pb-1">
                          <button data-mdb-button-init data-mdb-ripple-init className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3" type="button" onClick={handleLoginBtn}>Login</button>
                          <a className="text-muted" href="#!">Forgot password?</a>
                        </div>
                        <div className="d-flex align-items-center justify-content-center pb-4">
                          <p className="mb-0 me-2">Don't have an account?</p>
                          <Link to={"/signup"}><button type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-outline-danger">Create new</button></Link>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="col-lg-6">
                  <img src={pictureDonation} className="img-fluid" alt="huge" />
            </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Login;
