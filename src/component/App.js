import React from 'react';
import Landing from './Landing';
import {BrowserRouter as Router, Route} from 'react-router-dom';

export default function App() {
    return (
        <div>
            <Router>
                <Route path="/" component={Landing}/>
            </Router>
            
        </div>
    )
}
