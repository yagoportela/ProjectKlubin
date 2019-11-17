
import qs from 'qs';
import { apiUser, apiLogin } from 'services/api'
import { login, secrets } from "services/auth";


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

            const headers = {
                'Content-Type': 'application/json'
            };

           await apiUser.post("/api/User", 
                                data,
                                headers)
                        .then(success => {
                            console.log(success.data)
                            if(success.data != null && !success.data.resultado.status){
                                CallbackErro( success.data.resultado.erros[0])
                            } else{
                                Callback(success.data);
                            }
                        })
                        .catch(fail => {
                            console.error(fail);                         
                            CallbackErro("Estamos em manutenção. por favor, espere alguns minutos para continuar o cadastro.")
                        })
   

        } catch (err) {
            console.error(err)
            CallbackErro("Estamos em manutenção. por favor, espere alguns minutos para continuar o cadastro.")
        }
    
  }

  export const Logar = async (email, senha) => {

        try {
          const secret = secrets({
            grant_type: 'password',
            redirect_uri: 'http://localhost:3000/login',
            username: email,
            password: senha })

          const data = qs.stringify(secret);

          const headers = {
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
          };

          await apiLogin.post("/connect/token", 
                              data,
                              headers)
                        .then(success => {
                          login(success.data);
                          return true
                        })
                        .catch(error => {                                    
                          console.error(error.success)
                          return false;
                        })

        } catch (err) {
          console.error(err)
          return false
        }

        return true;
  };