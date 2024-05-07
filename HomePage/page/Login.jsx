import React from 'react';
import hamdardLogo from '../assests/hamdard.png'
import pictureDonation from '../assests/kids1.jpeg'

const Login = () => {
  const gradientCustom2Style = {
    background: '#fccb90',
    /* fallback for old browsers */
    background: '-webkit-linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)',
    /* Chrome 10-25, Safari 5.1-6 */
    background: 'linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)',
    /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
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
                        <h4 className="mt-1 mb-5 pb-1"></h4>
                      </div>
                      <form>
                        <p>Please login to your account</p>
                        <div data-mdb-input-init clasPsName="form-outline mb-4">
                          <input type="email" id="email" className="form-control"
                            placeholder="Phone number or email address" />
                          <label className="form-label" htmlFor="form2Example11"></label>
                        </div>
                        <div data-mdb-input-init clasPsName="form-outline mb-4">
                        <input type="text" id="password" className="form-control"
                            placeholder="Password" />
                          <label className="form-label" htmlFor="form2Example22"></label>
                        </div>
                        <div className="text-center pt-1 mb-5 pb-1">
                          <button data-mdb-button-init data-mdb-ripple-init className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3" type="button">Log
                            in</button>
                          <a className="text-muted" href="#!">Forgot password?</a>
                        </div>
                        <div className="d-flex align-items-center justify-content-center pb-4">
                          <p className="mb-0 me-2">Don't have an account?</p>
                          <button type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-outline-danger">Create new</button>
                        </div>
                      </form>
                    </div>
                  </div>
                  {/* <div className="col-lg-6 d-flex align-items-center gradient-custom-2" style={mediaQueryStyles['@media (min-width: 769px)']['.gradient-custom-2']}>
                    <div className="text-black px-3 py-4 p-md-5 mx-md-4" style={gradientCustom2Style}>
                      <h4 className="mb-4">We are more than just a company</h4>
                      <p className="small mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                  </div> */}
                  <div className="col-lg-6">
              {/* Use the huge image on the right side */}
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

