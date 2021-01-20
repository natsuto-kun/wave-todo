import React from 'react';
import {
    BrowserRouter as Router, Route, Switch
} from "react-router-dom";
import App from './App';
import Progress from './Progress';

export default class Root extends React.Component {
    render() {
        return (
            <Router>
                <Switch>
                <Route exact path="/" component={App} />
                <Route exact path="/progress" component={Progress} />
                </Switch>
            </Router>
        );
    }
}