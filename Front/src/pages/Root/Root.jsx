import React, { useState, Fragment, useCallback } from 'react'
// nodejs library to set properties for components
// @material-ui/core components
import Avatar from '@material-ui/core/Avatar'
import CssBaseline from '@material-ui/core/CssBaseline'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
// @material-ui/icons
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
// components servicos
import { apiAuthentic, apiLogout, apiAuthenticated } from 'services/api'
// components styles
import styleClass from 'assets/styles/components/RootStyle.jsx'
// components views
import { StyledButton, StyleTextField, StyleFormControlLabel } from 'assets/views/components/RootViews.jsx'

const Root = () => {
  const [userinfo, setUserInfo] = useState({
    isUserLoggedIn: apiAuthenticated()
  })
  const { isUserLoggedIn } = userinfo
  const classes = useCallback(styleClass(), [])

  const logar = useCallback((e) => {
    e.preventDefault()
    apiAuthentic((result) => {
      setUserInfo({
        isUserLoggedIn: result.authenticated
      })
    })
  }, [])

  const logout = useCallback((e) => {
    e.preventDefault()
    apiLogout()
    setTimeout(() => {
      setUserInfo({
        isUserLoggedIn: apiAuthenticated()
      })
    }, 50)
  }, [])

  return (
    <Container component='main' maxWidth='xs'>
      <CssBaseline />

      <div className={classes.paper}>

        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>

        <Typography component='h1' variant='h5'>
            Entrar
        </Typography>

        <form className={classes.form} noValidate>
          <StyleTextField required id='email' label='Login' name='email' autoComplete='email' autoFocus />
          <StyleTextField required name='password' label='Senha' type='password' id='password' autoComplete='Senha' />
          <StyleFormControlLabel label='Remember me' />

          {!isUserLoggedIn && (
            <Fragment>
              <StyledButton onClick={(e) => { logar(e) }}>
                  Entrar
              </StyledButton>
            </Fragment>
          )}

          {isUserLoggedIn && (
            <Fragment>
              <StyledButton onClick={(e) => { logout(e) }}>
                  Sair
              </StyledButton>
            </Fragment>
          )}

        </form>
      </div>
    </Container>
  )
}

export default Root
