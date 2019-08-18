import React from 'react';

class DisplayResults extends React.Component {
    

    render() {
        return (
        <div key={this.props.alpha3Code} className="countryBlock">
            <div style={{backgroundColor: `${this.props.colors.color3}`, color: `${this.props.colors.color2}`}}>
                <img className="flag" alt={this.props.name} src={this.props.flag} />
            </div>
            <div className="info"  style={{backgroundColor: `${this.props.colors.color3}`, color: `${this.props.colors.color2}`}}>
                <p className="countryName"><strong>{this.props.name}</strong></p>
                <p><strong>Population:</strong> {this.props.population}</p>
                <p><strong>Region:</strong> {this.props.region}</p>
                <p><strong>Capital:</strong> {this.props.capital}</p>
            </div>
        </div>        
    )}
}

export default DisplayResults;