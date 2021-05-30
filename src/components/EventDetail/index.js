import React from 'react';
import './style.css';

const EventDetail = (props) => {
    const {userIsAuth, event , participeToEvent, addToFavourite, user} = props;

    const addTo = (eventId) => {
        if(user){
            addToFavourite(eventId, user._id)
        }
    }
    const participeTo = (eventId) => {
        if(user){
            participeToEvent(eventId, user._id)
        }
    }

    return (
        <div className="col-12 event-card">
            <div className="row">
                <div className="col-4 img">
                    <span className="card-img-price">
                        pass : {event.price ? `${event.price} Frcfa` : 'gratuit'}
                    </span>
                </div>
                <div className="col-8 details">
                    <h3 className="event_name text-muted">{event.name}</h3>
                    <div className="mb-2">
                        Lieu : <span className="text-danger bold">{event.location}</span>
                    </div>
                    <div className="mb-2">
                        Date : <span className="text-danger bold">{event.start_at}</span>
                    </div>
                    <div className="mb-2">
                        <button className="btn btn-dark mr-2 mb-1" data-toggle="modal" data-target="#modelId">Détails</button>
                        {userIsAuth ? 
                        <>
                            <button className="btn btn-primary mr-2 mb-1" onClick={()=> participeTo(event._id)}>je participe</button>
                            <button className="btn btn-success mr-2 mb-1" onClick={()=> addTo(event._id)}>ajouter comme favori</button>
                        </>: <div></div>}
                        
                    </div>   
                </div>   
            </div>
            
            <div className="modal fade" id="modelId" tabindex="-1" role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">{event.name}</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                        </div>
                        <div class="modal-body">
                            <div className="text-muted mb-2">
                            <b>Description :</b> {event.description} 
                            </div>
                            <div className="mb-2">
                                Lieu : <span className="text-danger bold">{event.location}</span>
                            </div>
                            <div className="mb-2">
                                Date et heure de début: <span className="text-danger bold">{event.start_at}</span>
                            </div>
                            <div className="mb-2">
                                Date et heure de fin: <span className="text-danger bold">{event.end_at}</span>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-primary" data-dismiss="modal">Je participe</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EventDetail;
