import React from 'react'
import Login from '../login/Login'
import history from '../../history';
import { Router, Switch, Route } from 'react-router-dom';
import StartHeader from '../mainPage/startHeader/StartHeader';

export default function StartingPage() {
    return (
        <Router className="Router" history={history}>
            <StartHeader/>
            <Switch>
                <Route path="/login">
                    <Login />
                </Route>
                <Route path="/register">
                    {/* <Register /> */}
                </Route>
            </Switch>
        </Router>
    )
}
