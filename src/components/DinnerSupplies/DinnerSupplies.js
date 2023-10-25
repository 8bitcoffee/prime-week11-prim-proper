import React from 'react';
import SilverWare from '../SilverWare/SilverWare';

function DinnerSupplies(props){

    return(
        <>
            <h2>Dinner Supplies</h2>
            <SilverWare name="Spoons" count={props.count}/>
            <SilverWare name="Forks" count={props.count}/>
            <SilverWare name="Knives" count={props.count}/>
        </>

    )
}
export default DinnerSupplies;