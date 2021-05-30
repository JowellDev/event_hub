import React, {useEffect, useContext} from 'react';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import Alert from '../../../components/Alert';
import Favourite from '../../../components/Favourite';
import UserAuthContext from '../../../context/Auth/UserAuth/UserAuthContext';
import AlertContext from '../../../context/Alert/AlertContext';
import ROUTE from '../../../Route';
import voidSvg from '../../../images/svg/empty.svg';
import userSvg from '../../../images/svg/sign.svg';

function UserDashboard(props) {
    const userAuthContext = useContext(UserAuthContext);
    const alertContext = useContext(AlertContext)
    const {setAlert} = alertContext;
    const {
        userIsAuth,
        favourite_events,
        getUser,
        user,
        success,
        clearSuccess
    } = userAuthContext;

    useEffect(() => {
        if(!userIsAuth){
            props.history.push(ROUTE.PUBLIC_LOGIN)
        }

        if(success){
            setAlert(success, 'success')
            clearSuccess()
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [userIsAuth, props.history, success])

    useEffect(() => {
        if(user){
            getUser(user._id)
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [success])

    const infos = (
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
                        <div className="mb-2"> <b>Nom :</b> {user && user.firstname}</div>
                        <div className="mb-2"> <b>Prenoms :</b> {user && user.lastname}</div>
                        <div className="mb-2"> <b>Email :</b> {user && user.email}</div>
                        <div className="mb-2"><b>contacts :</b> {user && user.contacts}</div>
                        <div className="mb-2"><b>date d'inscription :</b> {user && user.created_at}</div>
                    </div>
                </div>
            </div>
        </div>
    )

    const noData = (
        <div className="row">
            <div className="col-12 text-center">
                <div className="text-danger">Aucun event favori ! </div>
            </div>
            <div className="col-12 text-center mb-4">
                <div className="justify-content-center">
                    <img src={voidSvg} alt="void_image" width="400" height="400" />
                </div>
            </div>
        </div>
    )

    return (
        <div>
            <Navbar/>
            <div className="container-fluid mt-4 shadow-sm min-vh-100">
                <div className="row">
                    <div className="col-12">
                        <Alert />
                    </div>
                    {user ? infos : ''}
                    <div className="col-md-7">
                        <div className="alert alert-dark shadow-sm text-center">
                            Mes evenement favoris
                        </div>
                        {
                            user && favourite_events.length !== 0 ? <Favourite events={favourite_events} user={user._id}/> : noData
                        } 
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default UserDashboard;
