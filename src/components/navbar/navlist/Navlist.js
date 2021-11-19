import React from 'react'
import { NavLink } from 'react-router-dom';
import '../../navbar/navlist/styles.css';

const Navlist = () => {
    return (
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
    )
}

export default Navlist
