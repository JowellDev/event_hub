import React from 'react';
import './style.css';

const EventDetail = (props) => {
    const { userIsAuth, favori, changeFavori, event } = props;
    return (
        <div className="col-12 event-card">
            <div className="row">
                <div className="col-4 img">
                    <span className="card-img-price">
                        pass : {event.price ? `${event.price} Frcfa` : 'gratuit'}
                    </span>
                    <span title="Ajouter aux favoris">
                        {userIsAuth && <i className={favori ? "fas fa-heart" : "far fa-heart"} onClick={changeFavori}></i>}
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
                        <button className="btn btn-secondary" data-toggle="modal" data-target="#modelId">Détails</button>
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
                            <button type="button" class="btn btn-primary" data-dismiss="modal">Je suis intéressé</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EventDetail;
