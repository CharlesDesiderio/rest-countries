import React from 'react';
import '../style/displayResults.css';

const DisplayResults = (props) => {
    return (
        <div key={props.alpha3Code} className="countryBlock">
            <div>
                <img className="flag" alt={props.name} src={props.flag} />
            </div>
            <div className="info">
                <p><strong>{props.name}</strong></p>
                <p><strong>Population:</strong> {props.population}</p>
                <p><strong>Region:</strong> {props.region}</p>
                <p><strong>Capital:</strong> {props.capital}</p>
            </div>
        </div>        
    )
}

export default DisplayResults;