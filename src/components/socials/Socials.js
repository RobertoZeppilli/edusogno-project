import React from 'react';
import { Link } from 'react-router-dom';
import tiktok from '../../assets/tiktok.png';
import facebook from '../../assets/facebook.png';
import linkedin from '../../assets/linkedin.png';
import instagram from '../../assets/instagram.png';
import './styles.css';

const Socials = () => {
    return (
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
    )
}

export default Socials
