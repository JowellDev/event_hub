import React from 'react';
import Logo from '../Logo';
import './style.css';

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
                            <li className="menu-item">inscription</li>
                            <li className="menu-item">connexion</li>
                        </ul>
                    </nav>
                </div>
                <div className="header-content">
                    <h4 className="welcome-h4">bienvenue sur e-vent hub</h4>
                    <h4 className="plateforme-h4">plateforme</h4>
                    <h4 className="event-h4">evenementiel</h4>
                    <button className="header-event-btn">Evenements à venir</button>
                </div>
            </div>
        </header>
    )
}

export default Header;