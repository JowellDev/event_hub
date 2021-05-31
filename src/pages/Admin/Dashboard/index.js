import React, {useEffect, useContext} from 'react';
import AdminContext from '../../../context/Auth/AdminAuth/AdminContext';
import AlertContext from '../../../context/Alert/AlertContext';
import Alert from '../../../components/Alert';
import ROUTE from '../../../Route';

const AdminDashboard = (props) => {
    const adminContext = useContext(AdminContext);
    const alertContext = useContext(AlertContext)
    const {setAlert} = alertContext;
    const {
        adminIsAuth, 
        admin, 
        events,
        unpublish, 
        users,
        managers,
        admins,
        getUsers,
        getAdmins,
        getManagers,
        getUnpublished,
        getEvents,
        success,
        error,
        clearSuccess,
        clearError
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

    return (
        <div>
            hello world !
        </div>
    )
}

export default AdminDashboard;
