import React, { lazy, Fragment, Suspense } from 'react'
import { Router, Route, Switch, Redirect  } from 'react-router-dom'
import { CssBaseline, LinearProgress } from '@material-ui/core'
import { isAuthenticated } from "./services/auth"
import history from './services/history';
import 'assets/scss/main.scss'

//const Main = lazy(() => import('./pages/Main'))
const Login = lazy(() => import('./pages/Login'))
const CadastroUsuario = lazy(() => import('./pages/CadastroUsuario'))
const Root = lazy(() => import('./pages/Root'))

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    component={props =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: "/login", state: { from: props.location } }} />
      )
    }
  />
);

const IsNotAuthenticated = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    component={props =>
      !isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: "/", state: { from: props.location } }} />
      )
    }
  />
);

const App = () => (
  <Fragment>
    <CssBaseline />
         
    <Router history={history}>      
      <Switch>
        <Suspense fallback={<LinearProgress />} >
            <IsNotAuthenticated path='/login' component={Login} />
            <IsNotAuthenticated path='/cadastro' component={CadastroUsuario} />
            <PrivateRoute  path='/' exact component={Root} />
            {/*<Route path='/' component={Main} />*/}
        </Suspense>
        </Switch>
    </Router>

  </Fragment>
)

export default App;
