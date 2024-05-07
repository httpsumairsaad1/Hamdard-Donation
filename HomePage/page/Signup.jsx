import React from 'react';
import signUpBg from '../assests/signup-background.jpg';
import { Analytics, Height } from '@mui/icons-material';
import { FcOrganization } from 'react-icons/fc';

function Signup() {
  const customStyle = {
    position: 'relative',
    backgroundImage: `url(${signUpBg})`,
    backgroundSize: 'cover',
    marginRight: '1em',
    color: 'orange',
    textAlign: 'center',
    backdropFilter: 'blur(10px)',
    '.card-registration .select-input.form-control[readonly]:not([disabled])': {
      fontSize: '1rem',
      lineHeight: '2.15',
      paddingLeft: '.75em',
      paddingRight: '.75em'
    },
    '.card-registration .select-arrow': {
      top: '13px'
    }
  };

  const customButton = {
    backgroundColor: 'rgba(228, 102, 58, 1)', // Orange color
    color: '#fff', // Text color
    borderRadius: '5px', // Optional: Rounded corners
    padding: '10px 20px', // Optional: Adjust padding
    border: 'none', // Optional: Remove border
    cursor: 'pointer', // Optional: Change cursor on hover
  };

  const inputStyle = {
    border: '2px solid rgba(228, 102, 58, 1)',
    borderRadius: '90px',
    padding: '1px',
    margin: '5px',
    width: '100%', // Adjust the width as needed
    boxSizing: 'border-box', // Include padding and border in width
  };

  const purposeStyle= {
    border: '3px solid rgba(228, 102, 58, 1)',
    borderRadius: '90px',
    padding: '1px',
    margin: '1px',
    width: '100%', // Adjust the width as needed
    boxSizing: 'border-box', // Include padding and border in width
  };

  return (
    <div style={customStyle}>
      <section className="vh-100 gradient-custom">
        <div className="container py-5 h-100 setContainer">
          <div className="row justify-content-center align-items-center h-100">
            <div className="col-12 col-lg-9 col-xl-7">
              <div className="card shadow-2-strong card-registration" style={{ borderRadius: '15px' }}>
                <div className="card-body p-4 p-md-5">
                <h2 style={{ color: 'rgba(228, 102, 58, 1)' }} >HAMDARD</h2>
                  <h5 className="mb-4 pb-2 pb-md-0 mb-md-5">SignUp</h5>
                  <form>

                    <div className="row">
                      <div className="col-md-6 mb-4">
                        <div className="form-outline">
                        <h6>Name: </h6>
                          <input type="text" id="Name" className="form-control form-control-lg" style={inputStyle} />
                          <label className="form-label" htmlFor="Name"></label>
                        </div>
                      </div>
                      <div className="col-md-6 mb-4">
                        <div className="form-outline">
                        <h6>Role: </h6>
                          <input type="text" id="role" className="form-control form-control-lg" style={inputStyle} />
                          <label className="form-label" htmlFor="role"></label>
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-6 mb-4">
                        <div className="form-outline">
                            <h6>Email: </h6>

                          <input type="email" id="emailAddress" className="form-control form-control-lg" style={inputStyle} />
                          <label className="form-label" htmlFor="emailAddress"></label>
                        </div>
                      </div>
                      <div className="col-md-6 mb-4">
                        <div className="form-outline">
                        <h6>Password: </h6>
                          <input type="text" id="password" className="form-control form-control-lg" style={inputStyle} />
                          <label className="form-label" htmlFor="password"></label>
                        </div>
                      </div>
                      <div className="col-md-6 mb-4">
                        <div className="form-outline">
                        <h6>Address: </h6>
                          <input type="text" id="address" className="form-control form-control-lg" style={inputStyle} />
                          <label className="form-label" htmlFor="address"></label>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-6 mb-4">
                      <h6 className="mb-2 pb-1">Select the type of account</h6>
                      <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="Organization" value="option1" checked />
                        <label className="form-check-label" htmlFor="Organization">Organization or NGOs</label>
                      </div>
                      <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="business" value="option2" />
                        <label className="form-check-label" htmlFor="business">Business Company</label>
                      </div>
                    </div>

                    <h6 className="mb-2 pb-1">Please Select the Purpose</h6>
                    <div className="row">
                      <div className="col-12">
                        <select className="select form-control-lg" style={purposeStyle}>
                          <option value="1" disabled>Select the purpose of donation</option>
                          <option value="2">Food</option>
                          <option value="3">Dress</option>
                          <option value="4">Education</option>
                          <option value="5">Climate</option>
                          <option value="5">Other</option>
                        </select>
                        <label className="form-label select-label"></label>
                      </div>
                    </div>

                    <div className="mt-4 pt-2">
                      <input
                        type="submit"
                        value="Submit"
                        style={customButton} // Apply custom style
                      />
                    </div>

                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Signup;
 
