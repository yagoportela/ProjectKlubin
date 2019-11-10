
import qs from 'qs';
import { apiUser, apiLogin } from 'services/api'
import { login } from "services/auth";
import { createBrowserHistory } from 'history';


export const Cadastrar = async (e, nome, email, senha, confSenha, celular, Callback, CallbackErro) => {
    e.preventDefault();

        try {
            
            const phone = celular === "" ? "11111111111" : celular

            const data = {   
                "userEntity" : {
                    "ImgPerfil":"",
                    "Tipo":0,
                    "nome":nome,
                    "cpf":"",
                    "moedas":"0",
                    "codigoDeBarras":""
                },
                "email":email,
                "Password":senha,
                "confirmPassword":confSenha,
                "phoneNumber":phone,
                "name":nome,
                "username":email,
                "picture":"not",
                "provider":"string",
                "providerId":"string"
            }

            console.log(data);
            const headers = {
                'Content-Type': 'application/json'
            };

            const response = await apiUser.post(
                                    "/api/User", 
                                    data,
                                    headers);
            
            Callback(response.data);
        //   login(response.data);
        //   let historya = createBrowserHistory({ forceRefresh: true });
        //   historya.push('/');

        } catch (err) {
          CallbackErro( "Houve um problema com o login, verifique suas credenciais.")
        }
    
  };

  export const Logar = async (email, senha) => {

    try {
        
        let history = createBrowserHistory({ forceRefresh: true });
        history.push('/');

    } catch (err) {          
        let history = createBrowserHistory({ forceRefresh: true });
        history.push('/');
    }
    
  };