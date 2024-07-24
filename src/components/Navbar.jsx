import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'
import { useState } from 'react'

export const Navbar = () => {
    const [showNavbar, setShowNavbar] = useState(false)

    const handleShowNavbar = () => {
        setShowNavbar(!showNavbar)
    }

    return (
        <nav className="navbar no-dot">
            <img id='imgnav' src="./Logo.webp" alt="" />
            <div className="containerNav">
                <div className="menu-icon" onClick={handleShowNavbar}>
                    <i className="fa-solid fa-bars"></i>
                </div>
                <div className={`nav-elements  ${showNavbar && 'active'}`}>
                    <ul>
                        <NavLink to='/'>
                            <li>
                                PEPEGA
                            </li>
                        </NavLink>
                        <NavLink to='/memegallery'>
                            <li>
                                MEME GALLERY
                            </li>
                        </NavLink>
                        <NavLink to='/voting'>
                            <li>
                                VOTE
                            </li>
                        </NavLink>
                        <a href='https://www.youtube.com/watch?v=gqifxcCM1fw' target='_blank'>
                            <li>
                                CLAIM FREE PEPEGA
                            </li>
                        </a>
                    </ul>
                </div>
            </div>
        </nav>
    )
}