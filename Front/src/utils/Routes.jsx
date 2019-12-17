import React, {Component} from 'react'
import {Route, Switch, Redirect } from 'react-router-dom'
import Routespath from './routesObject.jsx'

export class Routes extends Component {
    render() {
        
        return (
            <main className='container'>
                <Switch>
                    { Routespath.Cliente.map(route => {
                        return (
                            <Route
                                key={route.path}
                                path={"/"+route.link}
                                exact={route.exact === undefined || route.exact ? true : false}
                                component={() => <h2><route.content /></h2>}
                            />
                        )})}
                    <Redirect from='*' to='/' />
                </Switch>
            </main>
        )
    }
};

export default Routes;