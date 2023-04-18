import React from 'react'

import { Link } from "react-router-dom"


import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import "./index.css"

const Header = () => {
    return (

        <nav className='nav-container'>
            <img src='https://www.engineerhub.in/static/media/logo1.358d88cfff15efcc3dde.png' alt="website-logo" className='website-logo' />

            <div className='link-container'>
                <Link to="/domain">Domains</Link>
                <Link to="/courses">Courses</Link>
                <Link to="/internship">Internship</Link>
                <Link to="/magazine">Magazine</Link>
                <Link to="/campus">Campus</Link>
                <Link to="/hiring">Hiring</Link>
                <Link to="/industry">Industry</Link>
                <Link to="/team">Team</Link>

                

            </div>

            <div className='svg-icon '>
                <a href="#http://gogle.com/"><AccountCircleIcon style={{ fontSize: 48 }}/></a>
            </div>

   

            
            
                

           




        </nav>
    )
}

export default Header