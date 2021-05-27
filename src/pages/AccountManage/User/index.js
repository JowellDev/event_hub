import React, {useContext, useEffect} from 'react';
import Navbar from '../../../components/Navbar';
import EventForm from '../../../components/createEventForm';
import UserAuthContext from '../../../context/Auth/UserAuth/UserAuthContext';
import ROUTE from '../../../Route';

const GestionDeCompteManager = (props) => {
    
    const userAuthContext = useContext(UserAuthContext);
    const {userIsAuth, user} = userAuthContext;

    useEffect(() => {
        if(!userIsAuth){
            props.history.push(ROUTE.PUBLIC_LOGIN)
        }
    }, [userIsAuth, props.history, user])


    return (
        <div>
            <Navbar/>
            <div id="dashboard_content">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-8">
                            <div className="alert alert-info text-center">
                                Gestion de compte
                            </div>
                            
                        </div>
                        <div className="col-md-4">
                            <div className="alert alert-dark text-center">
                                Event favoris
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GestionDeCompteManager;
