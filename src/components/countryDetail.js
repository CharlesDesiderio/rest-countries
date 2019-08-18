import React from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';

class CountryDetail extends React.Component {
    state = {
        details: '',
        neighbors: [],
        currencies: [],
        languages: []
    }

    componentDidMount() {
        this.fetchData();
    }



    fetchData = async () => {
        let alpha3Code = window.location.pathname.slice(-3);
        let details = await Axios.get('https://restcountries.eu/rest/v2/alpha/' + alpha3Code);
        this.setState({details: details.data, neighbors: details.data.borders, currencies: details.data.currencies, languages: details.data.languages})
    }
    
    fetchName = async (props) => {
        return await Axios.get(props);
    }

    componentDidUpdate() {
        setTimeout(() => {
            this.fetchData();
        }, 100);
    }

    render() {
        return (
            <div style={{backgroundColor: `${this.props.colors.color1}`, color: `${this.props.colors.color2}`}}>

                {this.state.borderNames}
                <div className="homeButton"><Link to={'/'}><button style={{backgroundColor: `${this.props.colors.color1}`, color: `${this.props.colors.color2}`}}><i className="fas fa-arrow-left"></i>Back</button></Link></div>
                <div className="detailFlex">
                    <img className="detailFlag" src={this.state.details.flag} />
                    <div>
                        <h1 className="mobileTitle">{this.state.details.name}</h1>
                        <div className="infoGrid">
                            <div>
                                <p><strong>Native Name:</strong> {this.state.details.nativeName}</p>
                                <p><strong>Population:</strong> {this.state.details.population}</p>
                                <p><strong>Region:</strong> {this.state.details.region}</p>
                                <p><strong>Sub Region:</strong> {this.state.details.subregion}</p>
                                <p><strong>Capital:</strong> {this.state.details.capital}</p>
                            </div>
                            <div>
                                <p><strong>Top Level Domain:</strong> {this.state.details.topLevelDomain}</p>

                                <ul><strong>Currencies:</strong> <ul>{this.state.currencies.map(x => <li>{x.name}</li>)}</ul></ul>
                                <ul><strong>Languages:</strong> <ul>{this.state.languages.map(x => <li>{x.name}</li>)}</ul></ul>


                            </div>
                        </div>
                                <ul className="neighborList">
                                    <p><strong>Border Countries: </strong></p>{this.state.neighbors.map(x => <li style={{backgroundColor: `${this.props.colors.color3}`}}><Link style={{backgroundColor: `${this.props.colors.color3}`, color: `${this.props.colors.color2}`}} to={{ pathname: '/detail/' + x, state: { alpha3Code: x }}}>{x}</Link></li>)}
                                </ul>
                    </div>
                </div>
        </div>)
    }
}

export default CountryDetail;