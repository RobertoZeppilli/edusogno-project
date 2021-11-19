import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
import Navlist from './navlist/Navlist';
import Socials from '../socials/Socials';
import logo from '../../assets/edusogno-logo.png';


const Navbar = () => {
    return (
        <>
            <nav className="navbar">

                <div className="container flex">
                    {/* logo     */}
                    <div className="navbar-logo">
                        <Link to="/">
                            <img className="navbar-logo__image" src={logo} alt="logo Edusogno" />
                        </Link>
                    </div>

                    {/* nav */}
                    <Navlist />

                    {/* socials */}
                    <Socials />
                </div>

            </nav>
        </>
    )
}

export default Navbar
