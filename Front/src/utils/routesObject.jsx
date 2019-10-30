import {createContext} from 'react'

import Person from '@material-ui/icons/Person'
import Settings from '@material-ui/icons/Settings'

import Perfil from 'pages/Perfil'
import FaleConosco from 'pages/FaleConosco'

const Routespath = {
  Login: { name: 'Login', Aunthentic: false, path: 'login', link: 'login', content: 'login', icon: 'login' },
  CadastroCliente: { Name: 'Cadastrar', Aunthentic: false, path: 'cadastro_cliente', link: 'cadastro-cliente', content: 'cadastro_cliente', icon: 'cadastro' },
  Cliente: [
    { Name: 'Perfil', Aunthentic: true, path: 'Perfil', link: 'perfil', content: Perfil, icon: Person },
    { Name: 'Fale Conosco', Aunthentic: true, path: 'FaleConosco', link: 'fale-conosco', content: FaleConosco, icon: Settings }
  ]
}

const ThemeContext = createContext(
  Routespath
);

export {ThemeContext}
export default Routespath 
