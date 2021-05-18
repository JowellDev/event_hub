import React from 'react';
import './style.css';

const EventDetail = (props) => {
    return (
        <div className="col-12 event-card">
            <div className="row">
                <div className="col-4 img">
                    <span className="card-img-price">
                        pass : 10.000frcfa
                    </span>
                    <span title="Ajouter aux favoris">
                        {props.userIsAuth && <i className={props.favori ? "fas fa-heart" : "far fa-heart"} onClick={props.changeFavori}></i>}
                    </span>
                </div>
                <div className="col-8 details">
                    <h3 className="event_name text-muted">Nom de l'event</h3>
                    <div className="text-muted mb-2">
                        <b>Description :</b> Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.  
                    </div>
                    <div className="mb-2">
                        Lieu : <span className="text-danger bold">EVENT_LOCATION</span>
                    </div>
                    <div className="mb-2">
                        Date : <span className="text-danger bold">Vendredi 22h</span>
                    </div>
                    <div className="mb-2">
                        <button className="btn btn-link">Détails</button>
                    </div>  
                </div>   
            </div>
        </div>
    )
}

export default EventDetail;
