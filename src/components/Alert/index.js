import React, {useContext} from 'react';
import AlertContext from '../../context/Alert/AlertContext';

function Alert() {
    const alertContext = useContext(AlertContext);
    const {alerts} = alertContext;
    return (
        alerts.length > 0 && alerts.map(alert => (
            <div key={alert.id} className={`alert alert-${alert.type}`} data-aos="zoom-in-up">
                {alert.msg}
            </div>
        ))
    )
}

export default Alert
