import React, { useState, useCallback } from 'react'
import qs from 'qs';
import { createBrowserHistory } from 'history';
// nodejs library to set properties for components
// @material-ui/core components
import Avatar from '@material-ui/core/Avatar'
import CssBaseline from '@material-ui/core/CssBaseline'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import CircularProgress from '@material-ui/core/CircularProgress';
// @material-ui/icons
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
// components servicos
import { apiLogin } from 'services/api'
import { login, secrets } from "services/auth";
// components styles
import styleClass from 'assets/styles/components/loginStyle.jsx'
// components views
import { StyledButton, StyleTextField, StyleFormControlLabel } from 'assets/views/components/loginViews.jsx'

const Login = () => {
  
  const classes = useCallback(styleClass(), [])

  const [email, setEmail] = useState()
  const [senha, setSenha] = useState()
  const [erro, setErro] = useState()
  const [submit, setSubmit] = useState(false)

  const logar = async e => {
    e.preventDefault();
    
    if (!email || !senha) {
      setErro("Preencha e-mail e senha para continuar!" );
    } else {
        try {
          setSubmit(true)

          const secret = secrets({            
            grant_type: 'password',
            redirect_uri: 'http://localhost:3000/login',
            username: email,
            password: senha})

          const data = qs.stringify(secret);

          const headers = {
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
          };

          await apiLogin.post("/connect/token", 
                              data,
                              headers)
                        .then(success => {
                          login(success.data);
                          let history = createBrowserHistory({ forceRefresh: true });
                          history.push('/');
                        })
                        .catch(error => {                                    
                          console.error(error.response)
                          setErro( "Houve um problema com o login, verifique suas credenciais.");
                          setSubmit(false)
                        })

        } catch (err) {
          console.error(err)
          setErro( "Houve um problema com o login, verifique suas credenciais.")
          setSubmit(false)
        }
    }
  };

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

        <div className="Error">{erro && <p>{erro}</p>}</div>

        <form className={classes.form} noValidate>
          <StyleTextField required 
                          id='email' 
                          label='Login' 
                          name='email' 
                          autoComplete='email' 
                          autoFocus 
                          onChange={ev => {
                            setEmail(ev.target.value);
                          }} />
          <StyleTextField required 
                          name='password' 
                          label='Senha' 
                          type='password' 
                          id='password' 
                          autoComplete='Senha' 
                          onChange={ev => {
                            setSenha(ev.target.value);
                          }}/>
          <StyleFormControlLabel label='Lembre-me' 
                                  name="lembre-me"/>

          <div>
            {!submit && (<StyledButton onClick={(e) => { logar(e) }}>
                            Entrar
            </StyledButton>)}            
            {submit && <CircularProgress />}
          </div>

        </form>
      </div>
    </Container>
  )
}

export default Login
