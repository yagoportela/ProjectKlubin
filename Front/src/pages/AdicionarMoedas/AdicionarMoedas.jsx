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
import Person from '@material-ui/icons/Person'
// components servicos
import { apiLogin } from 'services/api'
import { login, secrets } from "services/auth";
// components styles
import styleClass from 'assets/styles/components/loginStyle.jsx'
// components views
import { StyledButton, StyleTextField, StyleFormControlLabel } from 'assets/views/components/loginViews.jsx'

const AdicionarMoedas = ({id}) => {
  const classes = useCallback(styleClass(), [])  
  const [Result, setResult] = useState(id);
  const [submit, setSubmit] = useState(false)
  const [erro, setErro] = useState()

  const handleScan = data => {
    if (data) {
      setResult(data)
    }
  }

  const handleError = err => {
    console.error(err)
  }

  return (
    <Container component='main' maxWidth='xs'>
      <CssBaseline />
      

      <div className={classes.paper}>

        <Avatar className={classes.avatar}>
          <Person />
        </Avatar>

        <Typography component='h1' variant='h5'>
            Entrar
        </Typography>
      
        <div className="Error">{erro && <p>{erro}</p>}</div>

        <form className={classes.form} noValidate>
          <StyleTextField required 
                          id='qrCode' 
                          label='QR Code' 
                          name='qrCode' 
                          autoFocus  />

          <StyleTextField required 
                          name='valor' 
                          label='Valor' 
                          type='number' 
                          id='valor'  />

          <div>

           {!submit && <StyledButton onClick={(e) => { }}>
                              Enviar
            </StyledButton> }         
            {submit && <CircularProgress />}
          </div>

        </form>
      </div>
    </Container>
  )
}

export default AdicionarMoedas
