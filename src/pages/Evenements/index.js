import React, {useState, useContext, useEffect} from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import EventDetail from '../../components/EventDetail';
import "./style.css";
import UserAuthContext from '../../context/Auth/UserAuth/UserAuthContext';
import EventContext from '../../context/Evenement/EventContext';

const Events = (props) => {
    const userAuthContext = useContext(UserAuthContext);
    const {userIsAuth} = userAuthContext;
    const eventContext = useContext(EventContext)
    const {getEvents, events} = eventContext;

    useEffect(() => {
        getEvents();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    
    const [favori, setFavori] = useState(false);
    const changeFavori = () => {
        setFavori(!favori);
    }
    return (
        <div id="events_page">
            <Navbar />
            <div className="container mt-5">
                <div className="search-bar">
                    <div className="row">
                        <div className="col-2"></div>
                        <div className="col-7">
                            <input type="text" className="form-control" name="" id="" aria-describedby="helpId" placeholder="Veuillez entrer le nom d'un évènement"/>
                        </div>
                        <div className="col-3">
                            <button className="btn btn-outline-dark">
                                <i className="fas fa-search"></i>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="page-content">
                   <div className="row">
                        {events && events.map(event => <EventDetail key={event._id} favori={favori} event={event} userIsAuth={userIsAuth} changeFavori={changeFavori}/>)}
                   </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Events
