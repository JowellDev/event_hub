
import React, {useEffect, useContext} from 'react';
import {Link, useParams} from 'react-router-dom';
import Navbar from '../../../../components/Navbar';
import Footer from '../../../../components/Footer';
import ManagerAuthContext from '../../../../context/Auth/ManagerAuth/ManagerAuthContext';
import EventForm from '../../../../components/createEventForm';
import ROUTE from '../../../../Route';

const ManagerEventDetail = (props) => {
    const managerAuthContext = useContext(ManagerAuthContext);
    const {
        managerIsAuth, 
        manager, 
        createEvent,
        event,
        getEvent,
        deleteEvent,
        getManagerEvents
    } = managerAuthContext;

    let {id} = useParams();

    useEffect(() => {
        if(!managerIsAuth){
            props.history.push(ROUTE.ORGANISER_LOGIN)
        }
        getEvent(id)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [managerIsAuth])


    const Delete = (id) => {
        deleteEvent(id);
        getManagerEvents(manager._id);
        props.history.push(ROUTE.MANAGER_DASH);
    }

    return (
        <div>
            <Navbar/>
            <div className="container-fluid mt-4">
                { event ? (
                        <div className="row">
                            <div className="col-md-9">
                            <div className="mb-3">
                                <Link to={ROUTE.MANAGER_DASH} className="text-muted">
                                    <i class="fa fa-backward" aria-hidden="true"></i> Retour
                                </Link>
                            </div>
                            <div className="alert alert-info text-center">
                                Detail de l'event : <b> {event.name}
                                
                            </b>
                            </div>
                            <div className="jumbotron">
                                <div className="row">
                                    {event.allow ? 
                                        <div className="col-md-12 mb-2">
                                            <div className="alert alert-success">
                                                Evenement autorisé !
                                            </div>
                                        </div> :
                                        <div className="col-md-12 mb-2">
                                            <div className="alert alert-danger">
                                                L'evenement a été bloqué, veuillez contactez la direction de <strong>event hub.</strong>
                                            </div>
                                        </div>
                                    }
                                    <div className="col-md-6 mb-2"><b>Nom de l'évenement :</b> {event.name}</div>
                                    <div className="col-md-6 mb-2"><b>Lieu de déroulement :</b> {event.location}</div>
                                    <div className="col-md-6 mb-2 text-success"><b>Prix :</b> {event.price === 0 ? 'gratuit' : event.price + ' Fcfa'}</div>
                                    <div className="col-md-6 mb-2"><b>nombre de place : </b>{event.available_places}</div>
                                    <div className="col-md-6 mb-2"><b>Heure de début :</b> {event.start_at}</div>
                                    <div className="col-md-6 mb-2"><b>Heure de fin :</b> {event.end_at}</div>
                                    <div className="col-md-12 mb-2"><b>Description :</b> {event.description}</div>
                                    <div className="col-md-12 mt-5">
                                        
                                        {event.active ? 
                                            <button className="btn btn-success mr-2 mb-2" disabled>publié</button> :
                                            <button className="btn btn-danger mr-2 mb-2" disabled>pas publié</button>
                                        }
                                        
                                        <button className="btn btn-primary mr-2 mb-2">Mettre à jour</button>
                                        <button className="btn btn-info mr-2 mb-2" data-toggle="modal" data-target="#modelId">Liste des participants</button>
                                        <button className="btn btn-danger mr-2 mb-2" onClick={()=> Delete(event._id)}>Supprimer</button>
                                    </div>
                                </div>
                            </div>
                            </div>
                            <div className="col-md-3">
                            <div className="alert alert-dark text-center">
                                Ajouter un évènement
                            </div>
                            <EventForm 
                                create={createEvent} 
                                manager={manager}
                            />
                            </div>
                        <div class="modal fade" id="modelId" tabindex="-1" role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
                            <div class="modal-dialog" role="document">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title">Liste des participants</h5>
                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                <span aria-hidden="true">&times;</span>
                                            </button>
                                    </div>
                                    <div class="modal-body">
                                        { event.participants.length === 0 ? 
                                            <div className="alert alert-danger">Pas de participants</div>:
                                            <table class="table">
                                                <thead>
                                                    <tr>
                                                        <th>Nom</th>
                                                        <th>Prenoms</th>
                                                        <th>Email</th>
                                                        <th>Contacts</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {event.participants.map(participant => 
                                                        <tr key={participant._id}>
                                                            <td>{participant.firstname}</td>
                                                            <td>{participant.lastname}</td>
                                                            <td>{participant.email}</td>
                                                            <td>{participant.contacts}</td>
                                                        </tr>
                                                    )}
                                                </tbody>
                                            </table>
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : <div>error</div>
            }
                
            </div>
            <Footer/>
        </div>
    )
}

export default ManagerEventDetail;
