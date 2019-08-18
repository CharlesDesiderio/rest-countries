import React from 'react';
import SearchBar from './searchBar';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import CountryDetail from './countryDetail';

import '../style/style.css';

class App extends React.Component {
    
    state = {
        darkMode: false,
        colors: {
            color1: 'white',
            color2: 'hsl(200, 15%, 8%)',
            color3: 'hsl(0, 0%, 98%)',
            color4: 'hsl(0, 0%, 52%)'
        }
    }

    toggleDark = () => {
        let isLight = this.state.darkMode ? false : true;
        
        if (isLight){ 
            this.setState({
                darkMode: true,
                colors: {
                    color1: 'hsl(209, 23%, 22%)',
                    color2: 'white',
                    color3: 'hsl(207, 26%, 17%)',
                    color4: 'white'
                }})
                document.body.style.backgroundColor = 'rgb(43, 57, 69)';
        } else {
            this.setState({
                darkMode: false,
                colors:{
                    color1: 'white',
                    color2: 'hsl(200, 15%, 8%)',
                    color3: 'hsl(0, 0%, 98%)',
                    color4: 'hsl(0, 0%, 52%)'
                }})
                document.body.style.backgroundColor = this.state.colors.color2;
        }
    }

    render() {
        return (
        <Router basename={process.env.PUBLIC_URL}>

        <div>
            <div className="titleBar" style={{backgroundColor: `${this.state.colors.color1}`, color: `${this.state.colors.color2}`}}>
                <ul className="flexy mobileRow">
                    <li className="title">Where in the world?</li>
                    <li onClick={this.toggleDark} className="title" style={{backgroundColor: `${this.state.colors.color1}`, color: `${this.state.colors.color2}`}}><i className="far fa-moon"></i>{this.state.darkMode ? <span>Light Mode</span> : <span>Dark Mode</span>}</li>
                </ul>
            </div>
            
        </div>
            
            <Route path='/' exact render={() => <SearchBar colors={this.state.colors} />} />
            <Route path='/detail' render={() => <CountryDetail colors={this.state.colors} />}  />
        </Router>
    )}
}

export default App;

//            <Route path="/" exact component={SearchBar} />
//            <Route path="/detail" component={CountryDetail} />
