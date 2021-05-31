import React from 'react';
import TableRow from '../TableRow';


const Table = ({managers}) => {
    if(managers && managers.length === 0){
        return(
            <div className="alert alert-danger mt-5 text-center">
                Aucun manager inscrit
            </div>
        )
    }else{
        return (
            <table className="table mt-5">
                <thead class="thead-dark">
                    <tr>
                        <th scope="col">nom</th>
                        <th scope="col">contacts</th>
                        <th scope="col">email</th>
                        <th scope="col">date d'inscription</th>
                        <th scope="col">action</th>
                    </tr>
                </thead>
                <tbody>
                    {managers && managers.map(manager => <TableRow key={manager._id} manager={manager}/>)}
                </tbody>
            </table>
        )
    }
}

export default Table;
