import React, {useContext, useEffect} from 'react';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import UpdatePasswordForm from '../../../components/UpdatePasswordForm';
import UpdateUserInfo from '../../../components/UpdateUserInfo';
import UserAuthContext from '../../../context/Auth/UserAuth/UserAuthContext';
import AlertContext from '../../../context/Alert/AlertContext';
import Alert from '../../../components/Alert';
import ROUTE from '../../../Route';
import { Fragment } from 'react';
import userSvg from '../../../images/svg/sign.svg';

const GestionDeCompteManager = (props) => {
    
    const userAuthContext = useContext(UserAuthContext);
    const alertContext = useContext(AlertContext);
    const {userIsAuth, success, clearSuccess, error, clearError, user, getUser, resetPassword} = userAuthContext;
    const {setAlert} = alertContext;

    useEffect(() => {
        if(!userIsAuth){
            props.history.push(ROUTE.PUBLIC_LOGIN)
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [userIsAuth])

    useEffect(()=> {
        if(error){
            setAlert(error, 'danger')
            clearError()
        }
        if(success){
            setAlert(success, 'success')
            clearSuccess()
        }
        
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [success, error])

      useEffect(()=> {
        if(user){
            getUser(user._id);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
        },[success])


    return (
        <div>
            <Navbar/>
            <div className="container-fluid mt-4">
                <div className="row">
                    <div className="col-md-12">
                        <Alert/>
                    </div>
                    { user ? 
                        <Fragment>
                            <div className="col-md-5">
                                <div className="alert text-white-50 bg-dark text-center">
                                    Mes informations
                                </div>
                                <div class="card mb-2 border-0">
                                    <div class="card-body p-2 d-flex flex-row">
                                        <div>
                                            <img src={userSvg} className="img-fluid" width="200" height="200" alt='manager svg' />
                                        </div>
                                        <div className="ml-3">
                                            <div className="mb-2"> <b>Nom :</b> {user.firstname}</div>
                                            <div className="mb-2"> <b>Prenoms :</b> {user.lastname}</div>
                                            <div className="mb-2"> <b>Email :</b> {user.email}</div>
                                            <div className="mb-2"><b>contacts :</b> {user.contacts}</div>
                                            <div className="mb-2"><b>date d'inscription :</b> {user.created_at}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-7">
                                <div className="alert alert-info text-center">
                                    Gestion de compte utilisateur
                                </div>
                                <div class="card mb-2">
                                    <div class="card-body">
                                        <UpdateUserInfo/>
                                    </div>
                                </div>
                                <div class="card mb-2">
                                    <div class="card-body">
                                        <UpdatePasswordForm id={user._id} resetPassword={resetPassword} />
                                    </div>
                                </div>
                                <div class="card mb-2">
                                    <div class="card-body">
                                        <button className="btn btn-danger btn-block">Suppression de compte</button>
                                    </div>
                                </div>
                            </div>
                        </Fragment> : 
                        <div></div>
                    }
                    
                    
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default GestionDeCompteManager;
