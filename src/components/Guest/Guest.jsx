import React from 'react';
import axios from 'axios';

function Guest(props){
    const deleteGuest = () =>{
        axios.delete(`/guests/${props.guest.id}`).then((response)=>{
            props.getGuests();
            props.updateCount();
        })
        .catch((error) => {
            console.error("Error in DELETE req", error);
            alert("Error in DELETE req. See console.");
        })
    }

    return(
        <tr key={props.guest.id}>
            <td>{props.guest.name}</td>
            <td>{String(props.guest.kidsMeal)}</td>
            <td><button onClick={deleteGuest}>Delete</button></td>
        </tr>
    )
}
export default Guest;