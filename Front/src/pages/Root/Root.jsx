import React, { useState, useEffect, useCallback } from 'react'
// nodejs library to set properties for components
import QrCode from 'react.qrcode.generator'
// @material-ui/core components
import CssBaseline from '@material-ui/core/CssBaseline'
import Container from '@material-ui/core/Container'
// @material-ui/icons
// components servicos
import { apiUser } from 'services/api'
// components styles
import styleClass from 'assets/styles/components/RootStyle.jsx'
// components views

const Root = () => {
  const classes = useCallback(styleClass(), [])  
  const [erro, setErro] = useState("");
  const [QtdMoedas, setMoedas] = useState("");
  const [CodBarra, setCodBarra] = useState("");

  useEffect(() => {
    (async () => {
      try {

        const response = await apiUser.get("/api/User");

        if(response.data !== undefined && response.data.result !== undefined){
          setCodBarra(response.data.result.idIdentity)
          setMoedas(response.data.result.moedas)
        }else{
          console.log("Valores nulos")
        }

      } catch (err) {

        console.log(err)
        setErro( "Houve um problema com o login, verifique suas credenciais.");

      }
    })()
  })

  return (
    <Container component='main' maxWidth='xs'>
      <CssBaseline />

      <div className={classes.paper}>
        {erro && <div>Suas informações não foram atualizadas. Em instante iremos atualizar suas informações.</div>}
        <div>{QtdMoedas}</div>

  <div>{CodBarra && <QrCode value={CodBarra} size={200}/>}</div>
        <div>{CodBarra}</div>
  
      </div>
    </Container>
  )
}

export default Root
