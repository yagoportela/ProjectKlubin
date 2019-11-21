import React, { useState, useEffect, useCallback } from 'react'
import { createBrowserHistory } from 'history';
// nodejs library to set properties for components
import QrCode from 'react.qrcode.generator'
// @material-ui/core components
import CssBaseline from '@material-ui/core/CssBaseline'
import Container from '@material-ui/core/Container'
// @material-ui/icons
// components servicos
import { apiUser } from 'services/api'
import { logout } from "services/auth";
import { atualizar_refresh_token } from 'services/connect'
// components styles
import styleClass from 'assets/styles/components/RootStyle.jsx'
// components views

const Root = () => {
  const classes = useCallback(styleClass(), [])  
  const [erro, setErro] = useState("");
  const [QtdMoedas, setMoedas] = useState("");
  const [CodBarra, setCodBarra] = useState("");

  const erroLogin = () => {                            
    logout();
    let history = createBrowserHistory({ forceRefresh: true });
    history.push('/');
  }

  const ResgatarInfo = (response) => {
    if(response.data !== undefined && response.data.result !== undefined){
      setCodBarra(response.data.result.idIdentity)
      setMoedas(response.data.result.moedas)
    }else{
      erroLogin()
      setErro("Que feio servidor! :C .... Estamos fazendo as atualizações necessárias para que o aplicativo volte ao normal.")
    }
  }

  var conexaoInfo = async () => {
    await apiUser.get("/api/User")
                  .then(response => {
                    ResgatarInfo(response)
                  })
                  .catch(err => {
                    if(err.response !== undefined && err.response.status === 401){
                      atualizar_refresh_token(
                          success => {
                            if(success.status === 200){                                  
                              conexaoInfo()
                            }
                          },
                          fail => {
                            console.error(fail)
                            erroLogin()
                            setErro("Que feio servidor! :C .... Estamos fazendo as atualizações necessárias para que o aplicativo volte ao normal.");
                          }
                        )
                    }else{                      
                      console.error(err)
                      erroLogin()
                      setErro("Que feio servidor! :C .... Estamos fazendo as atualizações necessárias para que o aplicativo volte ao normal.");
                    }
                  })
  }

  useEffect(() => {
    (() => {
      try {
        atualizar_refresh_token(
          success => {
            if(success.status === 200){                                  
              conexaoInfo()
            }
          },
          fail => {
            console.error(fail)
            erroLogin()
            setErro("Que feio servidor! :C .... Estamos fazendo as atualizações necessárias para que o aplicativo volte ao normal.");
          }
        )
        conexaoInfo()        

      } catch (err) {
        console.error(err)
        erroLogin()
        setErro("Que feio servidor! :C .... Estamos fazendo as atualizações necessárias para que o aplicativo volte ao normal.");

      }
    })()
  })

  return (
    <Container component='main' maxWidth='xs'>
      <CssBaseline />

      <div className={classes.paper}>
        {erro && <div>{erro}</div>}
        <div>{QtdMoedas}</div>

  <div>{CodBarra && <QrCode value={CodBarra} size={200}/>}</div>
        <div>{CodBarra}</div>
  
      </div>
    </Container>
  )
}

export default Root
