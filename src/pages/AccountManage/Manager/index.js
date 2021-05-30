import React, {useContext, useEffect} from 'react';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import UpdatePasswordForm from '../../../components/UpdatePasswordForm';
import UpdateEmailForm from '../../../components/UpdateEmailForm';
import ManagerAuthContext from '../../../context/Auth/ManagerAuth/ManagerAuthContext';
import AlertContext from '../../../context/Alert/AlertContext';
import Alert from '../../../components/Alert';
import ROUTE from '../../../Route';
import { Fragment } from 'react';
import manangerSvg from '../../../images/svg/manager.svg';

const GestionDeCompteManager = (props) => {
    
    const managerAuthContext = useContext(ManagerAuthContext);
    const alertContext = useContext(AlertContext);
    const {managerIsAuth, success, clearSuccess, error, clearError, manager, getManagerEvents, resetPassword} = managerAuthContext;
    const {setAlert} = alertContext;

    useEffect(() => {
        if(!managerIsAuth){
            props.history.push(ROUTE.ORGANISER_LOGIN)
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [managerIsAuth])

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
    if(manager){
        getManagerEvents(manager._id);
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
                    { manager ? 
                        <Fragment>
                            <div className="col-md-5">
                                <div className="alert text-white-50 bg-dark text-center">
                                    Mes informations
                                </div>
                                <div class="card mb-2 bg-danger">
                                    <div class="card-body p-2 d-flex flex-row">
                                        <div>
                                            <img src={manangerSvg} className="img-fluid" width="200" height="200" alt='manager svg' />
                                        </div>
                                        <div className="ml-3 text-white">
                                            <div className="mb-2"> <b>Nom :</b> {manager.name}</div>
                                            <div className="mb-2"> <b>Email :</b> {manager.email}</div>
                                            <div className="mb-2"><b>contacts :</b> {manager.contacts}</div>
                                            <div className="mb-2"><b>date d'inscription :</b> {manager.created_at}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-7">
                                <div className="alert alert-info text-center">
                                    Gestion de compte organisateur
                                </div>
                                <div class="card mb-2">
                                    <div class="card-body">
                                        <UpdateEmailForm/>
                                    </div>
                                </div>
                                <div class="card mb-2">
                                    <div class="card-body">
                                        <UpdatePasswordForm resetPassword={resetPassword} id={manager._id}/>
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
