
import { apiUser } from 'services/api'
import { logout } from "services/auth";
import { atualizar_refresh_token } from 'services/connect'

import { createBrowserHistory } from 'history';

export const effect = ({setErro, setCodBarra, setMoedas}) => {
  try {
        atualizar_refresh_token(
          success => {
            if(success.status === 200){                                  
              conexaoInfo(setErro, setCodBarra, setMoedas)
            }
          },
          fail => {
            console.error(fail)
            erroLogin()
            setErro("Que feio servidor! :C .... Estamos fazendo as atualizações necessárias para que o aplicativo volte ao normal.");
          }
        )
        conexaoInfo(setErro, setCodBarra, setMoedas)        

      } catch (err) {
        console.error(err)
        erroLogin()
        setErro("Que feio servidor! :C .... Estamos fazendo as atualizações necessárias para que o aplicativo volte ao normal.");

      }
}
  
export const erroLogin = () => {                            
  logout();
  let history = createBrowserHistory({ forceRefresh: true });
  history.push('/');
}

export const ResgatarInfo = (response, setErro, setCodBarra, setMoedas) => {
  if(response.data !== undefined && response.data.result !== undefined){
    setCodBarra(response.data.result.idIdentity)
    setMoedas(response.data.result.moedas)
  }else{
    erroLogin()
    setErro("Que feio servidor! :C .... Estamos fazendo as atualizações necessárias para que o aplicativo volte ao normal.")
  }
}

export const conexaoInfo = async (setErro, setCodBarra, setMoedas) => {
  await apiUser.get("/api/User")
                .then(response => {
                  ResgatarInfo(response, setErro, setCodBarra, setMoedas)
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