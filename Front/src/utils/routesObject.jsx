import {createContext} from 'react'

import Person from '@material-ui/icons/Person'
import Build from '@material-ui/icons/Build'
import ListAlt from '@material-ui/icons/ListAlt'
import Settings from '@material-ui/icons/Settings'

import Perfil from 'pages/Perfil'
import CadastrarServico from 'pages/CadastrarServicos'
import ServicosSolicitados from 'pages/ServicosSolicitados'
import FaleConosco from 'pages/FaleConosco'

const Routespath = {
  Login: { name: 'Login', Aunthentic: false, path: 'login', link: 'login', content: 'login', icon: 'login' },
  CadastroEmpresario: { Name: 'Cadastrar Oficina', Aunthentic: false, path: 'cadastro_oficina', link: 'cadastro-oficina', content: 'cadastro_oficina', icon: 'cadastro' },
  CadastroCliente: { Name: 'Cadastrar', Aunthentic: false, path: 'cadastro_cliente', link: 'cadastro-cliente', content: 'cadastro_cliente', icon: 'cadastro' },
  Cliente: [
    { Name: 'Perfil', Aunthentic: true, path: 'Perfil', link: 'perfil', content: Perfil, icon: Person },
    { Name: 'Cadastrar Serviço', Aunthentic: true, path: 'CadastrarServicos', link: 'cadastro-servico',content: CadastrarServico, icon: Build },
    { Name: 'Serviços Solicitados', Aunthentic: true, path: 'ServicosSolicitados', link: 'servicos-solicitados', content: ServicosSolicitados, icon: ListAlt },
    { Name: 'Fale Conosco', Aunthentic: true, path: 'FaleConosco', link: 'fale-conosco', content: FaleConosco, icon: Settings }
  ],
  Empresario: [
    { Name: 'Perfil', Aunthentic: true, path: 'perfil', link: 'perfil', content: 'perfil', icon: 'perfil' },
    { Name: 'Servico Disponíveis', Aunthentic: true, path: 'servico_disponiveis', link: 'servico-disponiveis', content: 'servico_disponiveis', icon: 'servico' },
    { Name: 'Propostas', Aunthentic: true, path: 'Propostas', link: 'propostas', content: 'Propostas', icon: 'propostas' },
    { Name: 'Fale Conosco', Aunthentic: true, path: 'fale_conosco', link: 'fale-conosco', content: 'fale conosco', icon: 'Settings' }
  ]
}

const ThemeContext = createContext(
  Routespath
);

export {ThemeContext}
export default Routespath 
