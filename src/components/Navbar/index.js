import React from 'react';
import {Link} from 'react-router-dom';
import ROUTE from '../../Route';
import './style.css';
import Logo from '../Logo';

const Navbar = () => {
    return(
        <>
            <nav id="navbar" className="pr-4 pl-4">
                <Logo/>
                <ul className="menu-container">
                    <Link to={ROUTE.HOME} className="menu-item">accueil</Link>
                    <Link to="" className="menu-item">evenements</Link>
                    <Link to={ROUTE.REGISTER} className="menu-item">inscription</Link>
                    <Link to={ROUTE.LOGIN} className="menu-item">connexion</Link>
                </ul>
            </nav>
        </>
    )
}

export default Navbar;