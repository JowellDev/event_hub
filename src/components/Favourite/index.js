import React from 'react';
import FavouriteRow from '../FavouriteRow';

const Favourite = ({events, user}) => {
    return (
        <table class="table">
            <thead class="thead-dark">
                <tr>
                    <th scope="col">nom</th>
                    <th scope="col">Lieu</th>
                    <th scope="col">date et heure de debut</th>
                    <th scope="col">action</th>
                </tr>
            </thead>
            <tbody>
                {events && events.map(event => <FavouriteRow key={event._id} event={event} user={user}/>)}
            </tbody>
        </table>
    )
}

export default Favourite;
