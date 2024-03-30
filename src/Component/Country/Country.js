import React from 'react';
import './Country.css'
const Country = (props) => {
    console.log(props);
    return (
        <div className='country'>
            <p>Name:{props.name}</p>
            <p>flags:</p>
            <img src={props.flags} alt="" />

        </div>
    );
};

export default Country;