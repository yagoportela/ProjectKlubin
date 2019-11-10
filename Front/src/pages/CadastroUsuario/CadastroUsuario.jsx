import React, { useState, Fragment, useCallback } from 'react'
// nodejs library to set properties for components
// @material-ui/core components
import Avatar from '@material-ui/core/Avatar'
import CssBaseline from '@material-ui/core/CssBaseline'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import CircularProgress from '@material-ui/core/CircularProgress';
// @material-ui/icons
import Assignment from '@material-ui/icons/Assignment'
// components servicos
// components styles
import styleClass from 'assets/styles/components/RegisterStyle.jsx'
// components views
import { StyledButton, StyleTextField } from 'assets/views/components/RegisterViews.jsx'
// components Actions
import {Cadastrar, Logar} from './Actions.jsx'
import {ValidarEmail, ValidarNome, ValidarSenha, ValidarConfSenha, ValidarCelular, LiberarSubmit} from './Validacao.jsx';

const CadastroUsuario = () => {
  const classes = useCallback(styleClass(), [])

  const [email, setEmail] = useState()
  const [senha, setSenha] = useState()
  const [confSenha, setConfSenha] = useState()
  const [celular, setCelular] = useState()
  const [nome, setNome] = useState()
  const [submit, setSubmit] = useState(false)

  const [erro, setErro] = useState({
      conexao: {
        status: true,        
        erro: false,
        menssagem: ""
      },    
      nome: {
        status: false,
        erro: false,
        menssagem: ""
      },
      senha: {
        status: false,
        erro: false,
        menssagem: ""
      },
      confSenha: {
        status: false,
        erro: false,
        menssagem: ""
      },
      email: {
        status: false,
        erro: false,
        menssagem: ""
      },
      celular: {
        status: true,
        erro: false,
        menssagem: ""
      }
  })

  const CadastrarUsuario = (e) => {
    Cadastrar(e, 
              nome, 
              email, 
              senha, 
              confSenha, 
              celular, 
              success => {
                Logar(email, senha)               
                setSubmit(false)
              },
              error => {
                console.error(error)                
                setSubmit(false)

              });
  }

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

        <div>{erro.conexao.menssagem}</div>
        <StyleTextField required 
                          id='email' 
                          label='email' 
                          type="email"
                          name='emailaddress' 
                          autoComplete='emailaddress' 
                          autoFocus 
                          onChange={ev => {
                            setEmail(ev.target.value);
                          }}
                          onBlur={() => {
                            const validacao = ValidarEmail(email)
                            Object.assign(validacao, {status: true})
                            setErro({
                              ...erro,                             
                              email: validacao
                            })                 
                          }}/>
                          
        {erro.email.erro && <div>{erro.email.menssagem}</div>}

        <StyleTextField required 
                          name='nome' 
                          label='nome'
                          type='text' 
                          id='nome' 
                          autoComplete='nome' 
                          onChange={ev => {
                            setNome(ev.target.value);
                          }}
                          onBlur={() => {
                            const validacao = ValidarNome(nome)
                            Object.assign(validacao, {status: true})
                            setErro({
                              ...erro,                             
                              nome: validacao,
                            })                    
                          }} />
                          
          {erro.nome.erro && <div>{erro.nome.menssagem}</div>}

          <StyleTextField required 
                          name='password' 
                          label='Senha' 
                          type='password' 
                          id='password' 
                          autoComplete='Senha' 
                          onChange={ev => {
                            setSenha(ev.target.value);
                          }}
                          onBlur={() => {
                            const validacao = ValidarSenha(senha)
                            Object.assign(validacao, {status: true})
                            setErro({
                              ...erro,                         
                              senha: validacao
                            })                     
                          }}/>       
                          
          {erro.senha.erro && <div>{erro.senha.menssagem}</div>}

          <StyleTextField required 
                          name='confirmPassword' 
                          label='Confirmação da senha' 
                          type='password' 
                          id='confirmPassword' 
                          autoComplete='false' 
                          onChange={ev => {
                            setConfSenha(ev.target.value);
                          }}
                          onBlur={() => {
                            const validacao = ValidarConfSenha(senha, confSenha)
                            Object.assign(validacao, {status: true})
                            setErro({
                              ...erro,                               
                              confSenha: validacao
                            })                   
                          }}/>          
                          
          {erro.confSenha.erro && <div>{erro.confSenha.menssagem}</div>}

          <StyleTextField required
                          name='phone' 
                          label='Celular' 
                          type='text' 
                          id='phone' 
                          autoComplete='phone' 
                          onChange={ev => {
                            setCelular(ev.target.value);
                          }}
                          onBlur={() => {
                            const validacao = ValidarCelular(celular)
                            Object.assign(validacao, {status: true})
                            setErro({
                              ...erro,                              
                              celular: validacao
                            })                   
                          }}/>        
                          
          {erro.celular.erro && <div>{erro.celular.menssagem}</div>}
          
          <Fragment>
            
          {!submit && <StyledButton 
              onClick={(ev) => { 
                ev.preventDefault();
                
                setSubmit(true);

                if(LiberarSubmit(erro)){                                         
                  setErro({
                    ...erro,                              
                    conexao: {
                        erro: false,
                        menssagem: ""
                    }
                  })
                  CadastrarUsuario(ev)
                }
                else{ 
                  setErro({
                    ...erro,                              
                    conexao: {
                        erro: true,
                        menssagem: "Por Favor, Verifique todos os campos."
                    }
                  }) 
                  setSubmit(false)
                  return false
                }
              }} >
              Cadastrar
            </StyledButton>}
            {submit && <CircularProgress />}
          </Fragment>

        </form>
      </div>
    </Container>
  )
}

export default CadastroUsuario
