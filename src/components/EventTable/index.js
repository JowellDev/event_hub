import React from 'react';
import TableRow from '../TableRow';
import NothingCard from '../NothingCard';

const EventTable = ({events}) => {
    if(events && events.length === 0){
        return(<NothingCard text="Vous n'avez créé aucun event !"/>)
    }else{
        return (
            <table class="table">
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

export default EventTable;
