import React, { useState, Fragment, useCallback } from 'react'
// nodejs library to set properties for components
// @material-ui/core components
import Avatar from '@material-ui/core/Avatar'
import CssBaseline from '@material-ui/core/CssBaseline'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
// @material-ui/icons
import Assignment from '@material-ui/icons/Assignment'
// components servicos
import { apiAuthentic, apiAuthenticated } from 'services/api'
// components styles
import styleClass from 'assets/styles/components/RegisterStyle.jsx'
// components views
import { StyledButton, StyleTextField } from 'assets/views/components/RegisterViews.jsx'

const CadastroUsuario = () => {
  const [userinfo, setUserInfo] = useState({
    isUserLoggedIn: apiAuthenticated()
  })
  const { isUserLoggedIn } = userinfo
  const classes = useCallback(styleClass(), [])

  const cadastrar = useCallback((e) => {
    e.preventDefault()
    apiAuthentic((result) => {
      setUserInfo({
        isUserLoggedIn: result.authenticated
      })
    })
  }, [])

  return (
    <Container component='main' maxWidth='xs'>
      <CssBaseline />

      <div className={classes.paper}>

        <Avatar className={classes.avatar}>
          <Assignment />
        </Avatar>

        <Typography component='h1' variant='h5'>
            Cadastro
        </Typography>

        <form className={classes.form} noValidate>
          <StyleTextField required id='email' label='email' name='email' autoComplete='email' autoFocus />
          <StyleTextField required name='password' label='Senha' type='password' id='password' autoComplete='Senha' />
          <StyleTextField required name='confirmPassword' label='Confirmação da senha' type='password' id='confirmPassword' autoComplete='false' />
          <StyleTextField required name='phone' label='Celular' type='text' id='phone' autoComplete='phone' />
          <StyleTextField required name='nome' label='nome' type='text' id='nome' autoComplete='nome' />
          <StyleTextField required name='username' label='Como quer ser chamado?' type='text' id='username' autoComplete='username' />

          {!isUserLoggedIn && (
            <Fragment>
              <StyledButton onClick={(e) => { cadastrar(e) }}>
                  Cadastrar
              </StyledButton>
            </Fragment>
          )}

        </form>
      </div>
    </Container>
  )
}

export default CadastroUsuario
