//React
import React, { lazy, Fragment, useCallback } from 'react'
import {BrowserRouter} from 'react-router-dom'
//Material-Ui
import CssBaseline from '@material-ui/core/CssBaseline'
import Container from '@material-ui/core/Container'
//Components
import MainStyle from './MainStyle'

const Main = () => { 

  const Header = lazy(() => import('components/Header'))
  const Routes = lazy(() => import('utils/Routes'))
  const Root = lazy(() => import('pages/AdicionarMoedas'))
  const classes = useCallback(MainStyle(), [])
  
  return (
    <Fragment>
      <BrowserRouter>    
        <Container component='main' maxWidth='xs'>
          <CssBaseline />      
            <Header />
            <div className={classes.Main}>
              <Root />
            </div>
        </Container>
      </BrowserRouter>
    </Fragment>
  )
}

export default Main
