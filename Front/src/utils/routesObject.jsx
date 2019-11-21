import {lazy} from 'react'
import {createContext} from 'react'

import Person from '@material-ui/icons/Person'
import Settings from '@material-ui/icons/Settings'

//import Perfil from 'pages/Perfil'
//import FaleConosco from 'pages/FaleConosco'
const Root = lazy(() => import('pages/Root'))
const AdicionarMoedas = lazy(() => import('pages/AdicionarMoedas'))

const Routespath = {
  Login: { name: 'Login', Aunthentic: false, path: 'login', link: 'login', content: 'login', icon: 'login' },
  CadastroCliente: { Name: 'Cadastrar', Aunthentic: false, path: 'cadastro_cliente', link: 'cadastro-cliente', content: 'cadastro_cliente', icon: 'cadastro' },
  Cliente: [
    { Name: 'Root', Aunthentic: true, path: 'Root', link: '', content: Root, icon: Person },
    { Name: 'Adicionar Moedas', Aunthentic: true, path: 'adicionar-moedas', link: 'adicionar-moedas', content: AdicionarMoedas, icon: Settings }
  ]
}

const ThemeContext = createContext(
  Routespath
);

export {ThemeContext}
export default Routespath 
