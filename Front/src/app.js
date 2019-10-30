import React, { lazy, Fragment, Suspense } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { CssBaseline, LinearProgress } from '@material-ui/core'
import 'assets/scss/main.scss'

const Main = lazy(() => import('./pages/Main'))
const Login = lazy(() => import('./pages/Login'))
const CadastroUsuario = lazy(() => import('./pages/CadastroUsuario'))
const Root = lazy(() => import('./pages/Root'))

const App = () => (
  <Fragment>
    <CssBaseline />
         
    <BrowserRouter>
      <Switch>
        <Suspense fallback={<LinearProgress />} >
            <Route path='/login' component={Login} />
            <Route path='/cadastro' component={CadastroUsuario} />
            <Route path='/main' component={Root} />
            {/*<Route path='/' component={Main} />*/}
        </Suspense>
      </Switch>
    </BrowserRouter>

  </Fragment>
)

export default App;
