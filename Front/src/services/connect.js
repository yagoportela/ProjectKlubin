import {apiLogin} from './api'
import {getTokenRefresh, login, secrets} from './auth'
import qs from 'qs'


export const atualizar_refresh_token = async (callback, callbackError) => {   

    try {
        
        const secret = secrets({
                grant_type: 'refresh_token',
                refresh_token: getTokenRefresh()})
                
        const data = qs.stringify(secret);

        const headers = {
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
        };

        await apiLogin.post("/connect/token", 
                            data,
                            headers)
                        .then(success => {
                            login(success.data)
                            callback(success.status)
                        })
                        .catch(error => {                                    
                            console.error(error.response)
                            callbackError( "Houve um problema com o login, verifique suas credenciais.");
                        })

        } catch (err) {
          console.error(err)
          callbackError( "Houve um problema com o login, verifique suas credenciais.")
        }
    }