import React, {useEffect, useContext} from 'react';
import AdminContext from '../../../context/Auth/AdminAuth/AdminContext';
import AlertContext from '../../../context/Alert/AlertContext';
import EventsTable from '../../../components/Admin/Events/table';
import ManagersTable from '../../../components/Admin/Managers/table';
import Alert from '../../../components/Alert';
import ROUTE from '../../../Route';
import './style.css';
import avatar from '../../../images/svg/avatar.svg';

const AdminDashboard = (props) => {
    const adminContext = useContext(AdminContext);
    const alertContext = useContext(AlertContext)
    const {setAlert} = alertContext;
    const {
        adminIsAuth, 
        admin, 
        events,
        bloqued,
        unpublish, 
        users,
        managers,
        admins,
        getUsers,
        getAdmins,
        getManagers,
        getUnpublished,
        getEvents,
        getBloqued,
        success,
        error,
        clearSuccess,
        clearError,
        logoutAdmin,
    } = adminContext;

    useEffect(() => {
        if(!adminIsAuth){
            props.history.push(ROUTE.ADMIN_LOGIN)
        }
        if(success){
            setAlert(success, 'success')
            clearSuccess()
        }
        if(error){
            setAlert(error, 'danger')
            clearError()
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [adminIsAuth, success])

    useEffect(() => {
        getManagers()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [success])

    useEffect(() => {
        getUnpublished()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [success])

    useEffect(() => {
        getUsers()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [success])

    useEffect(() => {
        getAdmins()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [success])

    useEffect(() => {
        getEvents()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [success])

    useEffect(() => {
        getBloqued()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [success])


    const logout = () => {
        logoutAdmin();
    }

    return (
        <div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-2 sidebar min-vh-100 d-flex flex-column justify-content-between bg-dark p-2">
                        <div>
                            <img src={avatar} alt="avatar" width="100" height="100"/>   
                            <div>
                                <h5>Nom : {admin && admin.username} </h5>
                                <h5> Email: {admin && admin.email} </h5>
                                <h5>Contact: {admin && admin.contacts} </h5>
                                <h5>Role: <span className="text-success">{admin && admin.role}</span></h5>
                            </div>
                        </div>
                        <div>
                            <button className="btn btn-danger btn-block" onClick={logout}>
                                Deconnexion
                            </button>
                        </div>
                        <div></div>
                    </div>
                    <div className="col-md-10">
                        <h3 className="mt-3 text-center text-muted">Tableau de bord Administration Event-Hub</h3>
                        <div className="mt-4 col-12">
                            <Alert />
                        </div>
                        <div className="mt-5">
                            <ul class="nav nav-tabs" id="myTab" role="tablist">
                                <li class="nav-item" role="presentation">
                                    <a class="nav-link active" id="events-tab" data-toggle="tab" href="#events" role="tab" aria-controls="events" aria-selected="true">Evenements déjà publiés</a>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <a class="nav-link" id="unpublish-tab" data-toggle="tab" href="#unpublish" role="tab" aria-controls="unpublish" aria-selected="false">Evenements pas publiés</a>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <a class="nav-link" id="bloqued-tab" data-toggle="tab" href="#bloqued" role="tab" aria-controls="bloqued" aria-selected="false">Evenements bloqués</a>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <a class="nav-link" id="managers-tab" data-toggle="tab" href="#managers" role="tab" aria-controls="managers" aria-selected="false">Organisateurs</a>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <a class="nav-link" id="users-tab" data-toggle="tab" href="#users" role="tab" aria-controls="users" aria-selected="false">Utilisateurs</a>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <a class="nav-link" id="admins-tab" data-toggle="tab" href="#admins" role="tab" aria-controls="admins" aria-selected="false">Administrateurs</a>
                                </li>
                            </ul>
                            <div class="tab-content" id="myTabContent">
                                <div class="tab-pane fade show active" id="events" role="tabpanel" aria-labelledby="events-tab">
                                   {events ? <EventsTable events={events}/> : <div></div>}
                                </div>
                                <div class="tab-pane fade" id="unpublish" role="tabpanel" aria-labelledby="unpublish-tab">
                                    {unpublish ? <EventsTable events={unpublish}/> : <div></div>}
                                </div>
                                <div class="tab-pane fade" id="bloqued" role="tabpanel" aria-labelledby="bloqued-tab">
                                   {bloqued ? <EventsTable events={bloqued}/> : <div></div>}
                                </div>
                                <div class="tab-pane fade" id="managers" role="tabpanel" aria-labelledby="managers-tab">
                                    {managers ? <ManagersTable managers={managers}/> : <div></div>}
                                </div>
                                <div class="tab-pane fade" id="users" role="tabpanel" aria-labelledby="users-tab">
                                    ok
                                </div>
                                <div class="tab-pane fade" id="admins" role="tabpanel" aria-labelledby="admins-tab">
                                    <div className="mt-4">
                                        <div className="mb-3">
                                            <button className="btn btn-primary">Ajouter un admin</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminDashboard;
