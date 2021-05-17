import React, {useEffect, useContext} from 'react';
import {Link} from 'react-router-dom';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import publicImg from '../../../images/svg/register.svg';
import organiserImg from '../../../images/svg/organiser.svg';
import UserAuthContext from '../../../context/Auth/UserAuth/UserAuthContext';
import ManagerAuthContext from '../../../context/Auth/UserAuth/UserAuthContext';
import ROUTE from '../../../Route';
import './style.css';

const Register = (props) => {
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
                    <div className="col-md-5 content left" data-aos="zoom-in" data-aos-duration="1500"> 
                        <h2>grand public</h2>
                        <img src={publicImg} alt="register" className="register-img"/>
                        <Link to={ROUTE.PUBLIC_REGISTER} className="btn btn-dark">créer mon compte utilisateur</Link>
                    </div>
                    <div className="col-md-5 content right" data-aos="zoom-in" data-aos-duration="1000">
                        <h2>organisateur</h2>
                        <img src={organiserImg} alt="register" className="register-img"/>
                        <Link to={ROUTE.ORGANISER_REGISTER} className="btn btn-danger">créer mon compte organisateur</Link>
                    </div>
                    <div className="col-md-12 text-center mt-3">
                        <p>
                            Déjà un compte ?
                            <Link to={ROUTE.LOGIN}> se connecter</Link>
                        </p>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Register;
