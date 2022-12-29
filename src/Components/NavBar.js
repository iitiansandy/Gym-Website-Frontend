import React from "react";
import '../CSS/NavBar.css';
import {Link} from 'react-router-dom';
import logo from '../Images/logo3.jpg';
export default function NavBar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg">
                <Link className="navbar-brand" to={"/"}>
                    <img id="gymLogo" src={logo} alt='Gym logo'/>
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="/navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                    >
                       <span className="navbar-toggler-icon"></span> 

                </button>
            </nav>
        </>
    )
}