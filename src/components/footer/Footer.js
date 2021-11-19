import React from 'react';
import './styles.css';
import logo from '../../assets/logo-white.png';
import { Link } from 'react-router-dom';
import instagram from '../../assets/instagram-footer.png';
import facebook from '../../assets/facebook-footer.png';
import linkedin from '../../assets/linkedin-footer.png';
import tiktok from '../../assets/tiktok-footer.png';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-top">
                    <div className="footer-top__logo">
                        <img src={logo} alt="edusogno logo" />
                    </div>
                    <div className="footer-list">
                        <ul className="footer-list flex">
                            <li className="footer-list__item">
                                <Link exact="true"
                                    className="footer-list__item__link" to='/' >
                                    Home
                                </Link>
                            </li>
                            <li className="footer-list__item">
                                <Link
                                    className="footer-list__item__link" to='/chi-siamo' >
                                    Chi Siamo
                                </Link>
                            </li>
                            <li className="footer-list__item">
                                <Link
                                    className="footer-list__item__link" to='/servizi' >
                                    Servizi
                                </Link>
                            </li>
                            <li className="footer-list__item">
                                <Link
                                    className="footer-list__item__link" to='/recensioni' >
                                    Recensioni
                                </Link>
                            </li>
                            <li className="footer-list__item">
                                <Link
                                    className="footer-list__item__link" to='/blog' >
                                    Blog
                                </Link>
                            </li>
                            <li className="footer-list__item">
                                <Link
                                    className="footer-list__item__link" to='/faq' >
                                    Faq
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="social-footer">
                        <h5>Seguici su</h5>
                        <div className="social-footer__icons">
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
                </div>
                <div className="footer-bottom">
                    <p>
                        Copyright © 2021 Edusogno. Tutti i diritti riservati. | Privacy Policy | Cookie Policy | P.IVA 0‍8587960728
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
