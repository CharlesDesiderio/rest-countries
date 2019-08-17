import React from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';

class CountryDetail extends React.Component {

    state = {
        neighbors: []
    }
    
    updateData = async () => {
        let borders = await Axios.get('https://restcountries.eu/rest/v2/alpha/' + this.props.location.state.alpha3Code);
        let results1 = borders.data.borders;
        let results = '';

        results = results1.map(async (x) => {
            let fetch = 'https://restcountries.eu/rest/v2/alpha/' + x;
            return Axios.get(fetch);
        })
        let alphaThree = [];

        Promise.all(results).then((completed) => {
            alphaThree = completed;
            this.setState({neighbors: alphaThree});
        })
    }

    componentDidMount() {
        this.updateData();
   }
   
   componentDidUpdate() {
       this.updateData();
   }

   render() {
 
    return (
        <div>
            <img src={this.props.location.state.flag} />
            <h1>{this.props.location.state.name}</h1>
            <p>{this.props.location.state.nativename}</p>
            <p>{this.props.location.state.population}</p>
            <p>{this.props.location.state.region}</p>
            <p>{this.props.location.state.subregion}</p>
            <p>{this.props.location.state.capital}</p>
            <p>TLD: {this.props.location.state.topLevelDomain}</p>
            {this.props.location.state.currencies.map(x => <p>{x.name}</p>)}
            {this.props.location.state.languages.map(x => <p>{x.name}</p>)}

            <p></p>
            <ul>
                    {this.state.neighbors.map(x => <li><Link to={{ pathname: '/detail/' + x.data.alpha3Code, state: { name: x.data.name, flag: x.data.flag, nativename: x.data.nativename, population: x.data.population, region: x.data.region, subregion: x.data.subregion, capital: x.data.capital, topleveldomain: x.data.topLevelDomain, currencies: x.data.currencies, languages: x.data.languages, alpha3Code: x.data.alpha3Code }}}>{x.data.name}</Link></li>)}
            </ul>
        </div>
    )
    }
}

export default CountryDetail;


/*

ARRAYS; map over!

{this.props.location.state.currencies}
{this.props.location.state.languages}

*/