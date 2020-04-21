import React, {Component} from 'react';
import Bagel from './Bagel';

function BagelsContainer(props){
    const bagelItem = props.bagels.map( bagel => <Bagel bagel={bagel.type}/>)
    return (
    <>
     <h3>This is the Bagels Container</h3>
        {bagelItem}
    </>
    )
}

export default BagelsContainer