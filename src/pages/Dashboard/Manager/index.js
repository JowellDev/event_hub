import React, {useEffect, useContext} from 'react';
import Navbar from '../../../components/Navbar';
import EventTable from '../../../components/EventTable';
import ManagerAuthContext from '../../../context/Auth/ManagerAuth/ManagerAuthContext';
import AlertContext from '../../../context/Alert/AlertContext';
import EventForm from '../../../components/createEventForm';
import Alert from '../../../components/Alert';
import ROUTE from '../../../Route';
import './style.css';

const ManagerDashboard = (props) => {
    const managerAuthContext = useContext(ManagerAuthContext);
    const alertContext = useContext(AlertContext)
    const {setAlert} = alertContext;
    const {
        managerIsAuth, 
        manager, 
        managerEvents, 
        createEvent,
        getManagerEvents,
        event,
        success,
        clearSuccess
    } = managerAuthContext;

    useEffect(() => {
        if(!managerIsAuth){
            props.history.push(ROUTE.ORGANISER_LOGIN)
            
        }
        if(success){
            setAlert(success, 'success')
            clearSuccess()
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [managerIsAuth, success])

    useEffect(() => {
        getManagerEvents(manager._id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [event])

    return (
        <div>
            <Navbar/>
            <div id="dashboard_content">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12 mb-2 mt-2">
                            <Alert/>
                        </div>
                        <div className="col-md-9">
                            <div className="alert alert-info text-center">
                                Mes evenements
                            </div>
                            <EventTable events={managerEvents}/>
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
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ManagerDashboard;
