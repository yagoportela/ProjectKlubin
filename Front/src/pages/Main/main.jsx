import React, { lazy, Fragment } from 'react'
import {BrowserRouter} from 'react-router-dom'

const Header = lazy(() => import('components/Header'))
const Routes = lazy(() => import('utils/Routes'))

const Main = () => (
    <Fragment>
      <BrowserRouter>          
        <Header />
        <Routes />
      </BrowserRouter>
  </Fragment>
)

export default Main
