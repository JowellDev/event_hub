import React from 'react';
import {Link} from 'react-router-dom';
import Logo from '../Logo';
import './style.css';
import ROUTE from '../../Route';

const Header = () => {
    return(
        <header>
            <div className="container">
                <div className="navigation">
                    <div className="logo">
                        <Logo/>
                    </div>
                    <nav>
                        <ul className="menu">
                            <Link to={ROUTE.REGISTER} className="menu-item">inscription</Link>
                            <Link to={ROUTE.LOGIN} className="menu-item">connexion</Link>
                        </ul>
                    </nav>
                </div>
                <div className="header-content">
                    <h4 className="welcome-h4">bienvenue sur e-vent hub</h4>
                    <h4 className="plateforme-h4">plateforme</h4>
                    <h4 className="event-h4">evenementiel</h4>
                    <Link className="header-event-btn" to={ROUTE.EVENTS}>Evenements à venir</Link>
                </div>
            </div>
        </header>
    )
}

export default Header;