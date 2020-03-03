import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '../components/Home';
import Login from '../components/Login';
import Register from '../components/Register';
import Game from '../components/Game';

const AppRouter = () => (
    <Switch>
        <Route exact path='/home' component={Home} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/register' component={Register} />
        <Route exact path='/play' component={Game} />
    </Switch>
)

export default AppRouter;