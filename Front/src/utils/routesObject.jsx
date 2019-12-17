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
    { Name: 'Root', 
      Aunthentic: true, 
      path: 'Root', 
      link: '', 
      content: Root, 
      icon: Person,
      menu: false,
      barra: true
    },
    { Name: 'Adicionar Moedas', 
      Aunthentic: true, 
      path: 'adicionar-moedas', 
      link: 'adicionar-moedas', 
      content: AdicionarMoedas, 
      icon: Settings,
      menu: false,
      barra: true
    },
    { Name: 'Fale Conosco', 
      Aunthentic: true, 
      path: 'fale-conosco', 
      link: 'fale-conosco', 
      content: AdicionarMoedas, 
      icon: Settings,
      menu: false,
      barra: false 
    },
    { Name: 'Perfil', 
      Aunthentic: true, 
      path: 'perfil', 
      link: 'perfil', 
      content: AdicionarMoedas, 
      icon: Settings,
      menu: false,
      barra: false 
    },
    { Name: 'Extrato', 
      Aunthentic: true, 
      path: 'extrato', 
      link: 'extrato', 
      content: AdicionarMoedas, 
      icon: Settings,
      menu: false,
      barra: true 
    },
    { Name: 'Detalhes do extrato', 
      Aunthentic: true, path: 'detalhes-extrato', 
      link: 'detalhes-extrato', 
      content: AdicionarMoedas, 
      icon: Settings,
      menu: false,
      barra: false 
    },
    { Name: 'Clubes Participantes', 
      Aunthentic: true, 
      path: 'clubes', 
      link: 'clubes', 
      content: AdicionarMoedas, 
      icon: Settings,
      menu: false,
      barra: true 
    },
    { Name: 'Trocar Moeda', 
      Aunthentic: true, 
      path: 'trocar-moeda', 
      link: 'trocar-moeda', 
      content: AdicionarMoedas, 
      icon: Settings,
      menu: false,
      barra: false 
    }
  ]
}

const ThemeContext = createContext(
  Routespath
);

export {ThemeContext}
export default Routespath 
