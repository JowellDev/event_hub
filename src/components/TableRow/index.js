import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import ManagerAuthContext from '../../context/Auth/ManagerAuth/ManagerAuthContext';


const TableRow = ({event}) => {
    const managerAuthContext = useContext(ManagerAuthContext);
    const {publishEvent, getEvent} = managerAuthContext;

    const Publish = (id) => {
        publishEvent(id, {active: true});
        getEvent(id);
    }

    const unPublish = (id) => {
        publishEvent(id, {active: false});
        getEvent(id);
    }

    return (
        <tr key={event._id}>
            <th scope="row">{event.name}</th>
            <td>{event.location}</td>
            <td>{event.price} Frcfa</td>
            <td>{event.start_at}</td>
            <td>
                <Link className="btn btn-info mr-1" to={`/organizer/dashboard/myevent/${event._id}`}>
                    Details
                </Link>
                {
                    event && event.active ? <button className="btn btn-success mr-2" onClick={()=> unPublish(event._id)}>Depublier</button> :
                    <button className="btn btn-danger mr-2" onClick={()=> Publish(event._id)}>Publier</button>
                }
            </td>
        </tr>
    )
}

export default TableRow;
