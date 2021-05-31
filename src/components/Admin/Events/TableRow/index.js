import React, {useContext} from 'react';
import AdminContext from '../../../../context/Auth/AdminAuth/AdminContext';


const TableRow = ({event}) => {
    const adminContext = useContext(AdminContext);
    const {bloqueEvent} = adminContext;

    const debloque = (id) => {
        bloqueEvent(id, {allow: true});
    }

    const bloque = (id) => {
        bloqueEvent(id, {allow: false});
    }

    return (
        <tr key={event._id}>
            <th scope="row">{event.name}</th>
            <td>{event.location}</td>
            <td>{event.price} Frcfa</td>
            <td>{event.start_at}</td>
            <td>
                {
                    event && event.allow ? <button className="btn btn-success mr-2" onClick={()=> bloque(event._id)}>Bloquer</button> :
                    <button className="btn btn-danger mr-2" onClick={()=> debloque(event._id)}>Debloquer</button>
                }
            </td>
        </tr>
    )
}

export default TableRow;
