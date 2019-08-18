import React from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';

import DisplayResults from './displayResults';

class SearchBar extends React.Component {
    state = {
        searchTerm: '' ,
        region: 'default',
        response: [],
        noResponse: true
    }

    async componentDidMount() {
        let queryType = '';

        queryType = 'https://restcountries.eu/rest/v2/all';
        
        await Axios.get(queryType)
        .then((results) => {
            this.setState({
                response: results,
                noResponse: false
            })
        }).catch((err) => {
            this.setState({
                noResponse: true,
                response: []
            })
        });
    }
    
    getAxios = async () => {
        let queryType = '';

        if (this.state.region !== 'default') {
            queryType = 'https://restcountries.eu/rest/v2/region/' + this.state.region;
            this.setState({
                searchTerm: ''
            })
        } 
        else if (this.state.searchTerm === '') {
            queryType = 'https://restcountries.eu/rest/v2/all';
        } else {
            queryType = 'https://restcountries.eu/rest/v2/name/' + this.state.searchTerm; 
        }

        await Axios.get(queryType)
        .then((results) => {
            this.setState({
                response: results,
                noResponse: false
            })

        }).catch((err) => {
            this.setState({
                noResponse: true,
                response: []
            })
        });
    }
    handleChange = (props) => {
        this.setState({
            region: 'default',
            searchTerm: props.target.value
        })
        
        setTimeout(() => {
            this.getAxios();
        }, 100);

    }
    
    regionChange = (props) => {
        this.setState({
            region: props.target.value
        })
        setTimeout(() => {
            this.getAxios();
        }, 100);
    }

    
    render() {
        return (
            <div className="container">
            <div className="flexy">
                <input style={{backgroundColor: `${this.props.colors.color3}`, color: `${this.props.colors.color2}`}} className="inputBar" placeholder="Search for a country..." onChange={this.handleChange} value={this.state.searchTerm} />
                <select style={{backgroundColor: `${this.props.colors.color3}`, color: `${this.props.colors.color2}`}} className="dropDown" onChange={this.regionChange} value={this.state.region}>
                    <option value="default">Filter By Region</option>
                    <option value="africa">Africa</option>
                    <option value="americas">Americas</option>
                    <option value="asia">Asia</option>
                    <option value="europe">Europe</option>
                    <option value="oceania">Oceania</option>
                </select>
                </div>
                <div className="results">

                {
                    this.state.noResponse ? <div className="blank">No Matches</div> : this.state.response.data.map((x) => {
                        return (<Link key={x.alpha3Code} to={{ pathname: '/detail/' + x.alpha3Code, state: { alpha3Code: x.alpha3Code }}}><DisplayResults colors={this.props.colors} name={x.name} region={x.region} capital={x.capital} flag={x.flag} population={x.population} /></Link>)
                    }
                    )
                }
                </div>
            </div>
        )
    }
};

export default SearchBar;
