import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './styles.css';
import logo from '../../assets/edusogno-logo.png';
import tiktok from '../../assets/tiktok.png';
import facebook from '../../assets/facebook.png';
import linkedin from '../../assets/linkedin.png';
import instagram from '../../assets/instagram.png';

const Navbar = () => {
    return (
        <>
            <nav className="navbar">

                <div className="container flex">
                    {/* logo     */}
                    <div className="navbar-logo">
                        <Link to="/">
                            <img className="navbar-logo__image" src={logo} />
                        </Link>
                    </div>

                    {/* nav */}
                    <div className="navlist">
                        <ul className="navbar-list flex">
                            <li className="navbar-list__item">
                                <NavLink exact="true"
                                    className="navbar-list__item__link" activeclassname="active" to='/' >
                                    Home
                                </NavLink>
                            </li>
                            <li className="navbar-list__item">
                                <NavLink 
                                    className="navbar-list__item__link" activeclassname="active" to='/chi-siamo' >
                                    Chi Siamo
                                </NavLink>
                            </li>
                            <li className="navbar-list__item">
                                <NavLink 
                                    className="navbar-list__item__link" activeclassname="active" to='/servizi' >
                                    Servizi
                                </NavLink>
                            </li>
                            <li className="navbar-list__item">
                                <NavLink 
                                    className="navbar-list__item__link" activeclassname="active" to='/recensioni' >
                                    Recensioni
                                </NavLink>
                            </li>
                            <li className="navbar-list__item">
                                <NavLink 
                                    className="navbar-list__item__link" activeclassname="active" to='/blog' >
                                    Blog
                                </NavLink>
                            </li>
                            <li className="navbar-list__item">
                                <NavLink 
                                    className="navbar-list__item__link" activeclassname="active" to='/faq' >
                                    Faq
                                </NavLink>
                            </li>
                        </ul>
                    </div>

                    {/* socials */}
                    <div className="social-icons">
                        <ul className="social-icons__list flex">
                            <li className="social-icons__item">
                                <Link className="social-icons__link" to="#">
                                    <img src={tiktok} alt="TikTok logo" />
                                </Link>
                            </li>
                            <li className="social-icons__item">
                                <Link className="social-icons__link" to="#">
                                    <img src={facebook} alt="Facebook logo" />
                                </Link>
                            </li>
                            <li className="social-icons__item">
                                <Link className="social-icons__link" to="#">
                                    <img src={linkedin} alt="Linkedin logo" />
                                </Link>
                            </li>
                            <li className="social-icons__item">
                                <Link className="social-icons__link" to="#">
                                    <img src={instagram} alt="Instagram logo" />
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

            </nav>
        </>
    )
}

export default Navbar
