import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'
const Countries = () => {
    const [Countries, setCountries] = useState([]);
    useEffect(() => {
        const url = 'https://restcountries.com/v3.1/all';
        fetch(url)
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])
    return (
        <div>
            <p className='fs-2'>Total number of country: {Countries.length}</p>
            <div className='displayCountry'>
                {
                    Countries.map(country => <Country name={country.name.common} flags={country.flags.png}></Country>)
                }
            </div>
        </div>

    );
};

export default Countries;