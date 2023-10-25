import React from 'react';
import Guest from '../Guest/Guest';

function GuestList(props){

    return(
        <>
            <h2>Guest List</h2>
            <table>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Kid's Meal</th>
                </tr>
                </thead>
                <tbody>
                    {props.guestList.map(guest => (
                        <Guest key={guest.id} updateCount={props.updateCount} getGuests={props.getGuests} guest={guest}/>
                    ))}
                </tbody>
            </table>
      </>
    )
}

export default GuestList;