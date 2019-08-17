import React from 'react';
import SearchBar from './searchBar';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import CountryDetail from './countryDetail';

const App = () => {
    return (

        <Router>

        <div>
            <div className="titleBar">
                <ul className="flexy">
                    <li>Where in the world?</li>
                    <li>Dark Mode</li>
                </ul>
            </div>
            
        </div>
        
        <Route path="/" exact component={SearchBar} />
        <Route path="/detail" component={CountryDetail} />
        </Router>
    )
}

export default App;