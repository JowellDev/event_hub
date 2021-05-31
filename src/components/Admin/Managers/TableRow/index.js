import React, {useContext} from 'react';
import AdminContext from '../../../../context/Auth/AdminAuth/AdminContext';


const TableRow = ({manager}) => {
    const adminContext = useContext(AdminContext);
    const {activeAccount} = adminContext;

    const active = (id) => {
        activeAccount(id, {allow: true});
    }

    const desactive = (id) => {
        activeAccount(id, {allow: false});
    }

    return (
        <tr key={manager._id}>
            <td>{manager.name}</td>
            <td>{manager.contacts}</td>
            <td>{manager.email} Frcfa</td>
            <td>{manager.created_at}</td>
            <td>
                {
                    manager && manager.active ? <button className="btn btn-success mr-2" onClick={()=> active(manager._id)}>Bloquer</button> :
                    <button className="btn btn-danger mr-2" onClick={()=> desactive(manager._id)}>Debloquer</button>
                }
            </td>
        </tr>
    )
}

export default TableRow;
