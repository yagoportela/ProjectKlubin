import React, { lazy, Fragment, Suspense } from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'
import { CssBaseline, LinearProgress } from '@material-ui/core'
import 'assets/scss/main.scss'

const Main = lazy(() => import('./pages/Main'))
const Login = lazy(() => import('./pages/Login'))

const App = () => (
  <Fragment>
    <CssBaseline />
         
    <HashRouter>
      <Switch>
        <Suspense fallback={<LinearProgress />} >
            <Route path='/login' component={Login} />
            <Route path='/' component={Main} />
        </Suspense>
      </Switch>
    </HashRouter>

  </Fragment>
)

export default App;
