import React, {useEffect, useContext} from 'react';
import {Link} from 'react-router-dom';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import signin from '../../../images/svg/signin.svg';
import sign from '../../../images/svg/sign.svg';
import UserAuthContext from '../../../context/Auth/UserAuth/UserAuthContext';
import ManagerAuthContext from '../../../context/Auth/UserAuth/UserAuthContext';
import ROUTE from '../../../Route';
import './style.css';

const Login = (props) => {
    const userAuthContext = useContext(UserAuthContext);
    const {userIsAuth} = userAuthContext;
    const managerAuthContext = useContext(ManagerAuthContext);
    const {managerIsAuth} = managerAuthContext;

    useEffect(() => {
        if(userIsAuth || managerIsAuth){
            props.history.push(ROUTE.EVENTS);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [userIsAuth, props.history])
    return (
        <div>
            <Navbar/>
            <div className="container wrapper">
                <div className="row justify-content-center">
                    <div className="col-md-5 content left" data-aos="fade-right" data-aos-duration="1000">
                        <h2>grand public</h2>
                        <img src={signin} alt="login" className="login-img"/>
                        <Link to={ROUTE.PUBLIC_LOGIN} className="btn btn-dark">connexion à son espace utilisateur</Link>
                    </div>
                    <div className="col-md-5 content right" data-aos="fade-left" data-aos-duration="1500">
                        <h2>organisateur</h2>
                        <img src={sign} alt="login" className="login-img"/>
                        <Link to={ROUTE.ORGANISER_LOGIN} className="btn btn-danger">connexion à son espace organisateur</Link>
                    </div>
                    <div className="col-md-12 text-center mt-3">
                        <p>
                            Pas de compte ?
                            <Link to={ROUTE.REGISTER} > s'inscrire</Link>
                        </p>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Login;
