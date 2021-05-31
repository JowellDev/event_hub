import React from 'react';
import TableRow from '../TableRow';


const Table = ({events}) => {
    if(events && events.length === 0){
        return(
            <div className="alert alert-danger mt-5 text-center">
                Pas d'evenement
            </div>
        )
    }else{
        return (
            <table className="table mt-5">
                <thead class="thead-dark">
                    <tr>
                        <th scope="col">nom</th>
                        <th scope="col">Lieu</th>
                        <th scope="col">prix</th>
                        <th scope="col">date et heure de debut</th>
                        <th scope="col">action</th>
                    </tr>
                </thead>
                <tbody>
                    {events && events.map(event => <TableRow key={event._id} event={event}/>)}
                </tbody>
            </table>
        )
    }
}

export default Table;
