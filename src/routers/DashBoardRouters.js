import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Home } from '../components/Home';

export const DasBoardRouter = () => {
    return(
        <div>
            <Switch>
                <Route exact path="/home" component={Home} />
                <Redirect to="/home" />
            </Switch>
        </div>
    )
}