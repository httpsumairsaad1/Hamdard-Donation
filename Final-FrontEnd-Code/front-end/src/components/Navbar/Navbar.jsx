import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'
import { BiSolidDonateHeart } from "react-icons/bi"; // hamdard
import { TbWorld } from "react-icons/tb"; // language button
import NavBarShape from './NavBarShape'
import { Button } from '@mui/material';

const Navbar = () => {
  return (
    <>
    <div className={'toplogo'}>
    <div className={'logobackorange'}>
    </div>
    <NavBarShape/>
    <div className={'logo'}>
        <div className={'logo-1'}>
            <div className={'hamdard'}>
                Hamdard 
                <BiSolidDonateHeart />
            </div>
            <svg id="1:3057/0:1370" className={'global-charity'}></svg>
        </div>
    </div>
</div>


{/* <div className={'loginbutton'}>
    <div className={'loginbuttonshape'}>
    </div>
    <div className={'login'}>
        <Link to={"/login"}>
        Login
        </Link>
    </div>
</div> */}

<Link to='/login' >
<button className='lgbutton'>
            Login
        </button>
    </Link>


        <Link to={'/signup'}>
<div className={'joinbutton'}>
    <div className={'joinbuttonshape'}>
    </div>
    <div className={'join-as-donor'}>
        Join as Donor
    </div>
</div>
        </Link>
</>
  )

} // end-navbar

export default Navbar