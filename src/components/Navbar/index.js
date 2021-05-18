import React, {useContext, Fragment} from 'react';
import {Link} from 'react-router-dom';
import ROUTE from '../../Route';
import UserAuthContext from '../../context/Auth/UserAuth/UserAuthContext';
import Avatar from '../../images/svg/avatar.svg';
import './style.css';

const Navbar = () => {
    const userAuthContext = useContext(UserAuthContext);
    const {logoutUser, userIsAuth, user} = userAuthContext;

    const logout = () => {
        logoutUser()
    }

    const guestLink = (
        <Fragment>
            <li className="nav-item">
                <Link to={ROUTE.REGISTER} className="nav-link">inscription</Link>
            </li>
            <li className="nav-item">
                <Link to={ROUTE.LOGIN} className="nav-link">connexion</Link>
            </li>
            
        </Fragment>
    )

    const authLink = (
        <Fragment>
            <li className="nav-item dropdown mr-5">
                <a className="nav-link dropdown-toggle" href="!#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    {user && user.lastname}
                    <img src={Avatar} alt="avatar" width="30" height="30" className="rounded-circle"/>
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                    <Link className="dropdown-item" to=''>Tableau de bord</Link>
                    <Link className="dropdown-item" to={ROUTE.HOME}>parametre</Link>
                    <button className="dropdown-item" onClick={logout}>Déconnexion</button>
                </div>
            </li>
        </Fragment>
    )
    
    return(
        <>

        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link className="navbar-brand" to={ROUTE.HOME}>
                Event Hub
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link className="nav-link" to={ROUTE.HOME}>
                            Accueil <span className="sr-only">(current)</span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link"to={ROUTE.EVENTS}>Evenements</Link>
                    </li>
                </ul>
                <ul className="navbar-nav ml-auto">
                    {userIsAuth ? authLink : guestLink}
                </ul>
            </div>
        </nav>
        </>
    )
}

export default Navbar;