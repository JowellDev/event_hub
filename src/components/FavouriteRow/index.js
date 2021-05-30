import React, {useContext} from 'react';
import UserAuthContext from '../../context/Auth/UserAuth/UserAuthContext';


const FavouriteRow = ({event, user}) => {
    const userAuthContext = useContext(UserAuthContext);
    const {deleteEvent} = userAuthContext;

    const deleteE = (id) => {
        deleteEvent(id, user);
    }

    
    return (
        <tr key={event._id}>
            <th scope="row">{event.name}</th>
            <td>{event.location}</td>
            <td>{event.start_at}</td>
            <td>
                <button className="btn btn-danger mr-2" onClick={()=> deleteE(event._id)}>rétirer</button>
            </td>
        </tr>
    )
}

export default FavouriteRow;
