import React, {useContext, useEffect} from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Alert from '../../components/Alert';
import EventDetail from '../../components/EventDetail';
import "./style.css";
import UserAuthContext from '../../context/Auth/UserAuth/UserAuthContext';
import EventContext from '../../context/Evenement/EventContext';
import AlertContext from '../../context/Alert/AlertContext';

const Events = (props) => {
    const userAuthContext = useContext(UserAuthContext);
    const eventContext = useContext(EventContext)
    const alertContext = useContext(AlertContext)
    const {userIsAuth, participeToEvent, addToFavourite, user, success, clearSuccess, error, clearError} = userAuthContext;
    const {getEvents, events} = eventContext;
    const {setAlert} = alertContext;

    useEffect(() => {
        getEvents();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        if(success){
            setAlert(success, 'success');
            clearSuccess()
        }
        if(error){
            setAlert(error, 'danger');
            clearError()
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [success, error])
    


    return (
        <div id="events_page">
            <Navbar />
            <div className="container mt-5">
                <div className="search-bar">
                    <div className="row">
                        <div className="col-12"><Alert/></div>
                        <div className="col-12">
                            <div className="alert alert-primary text-center">Liste des évènements à venir ... </div>
                        </div>
                    </div>
                </div>
                <div className="page-content">
                   <div className="row">
                        {events && events.map(event => 
                            <EventDetail key={event._id} event={event} 
                            userIsAuth={userIsAuth} 
                            addToFavourite={addToFavourite} 
                            participeToEvent={participeToEvent}
                            user={user}
                        />)}
                   </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Events
