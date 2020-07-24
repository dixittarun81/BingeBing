import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {Provider} from 'react-redux';

import Navbar from './Layout/Navbar';
import Landing from './Home/Landing';




import store from '../store';

export default function App() {
    return (
        <Provider store={store}>
        <div>
            <Router>
                <div>
                    <Navbar/>
                    <Route exact path="/" component={Landing}/>
                </div>
            </Router>
        </div>
        </Provider>
        
    )
}
