import { makeStyles } from '@material-ui/core/styles'
import theme from 'assets/styles/materialKit.jsx'

const styleClass = makeStyles(() => ({
  Paper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  CampoCodBarra: {
    width: '100%',
    textAlign: 'center',
    borderRadius: '0px 0px 30px 30px',
    padding: '40px',
    fontWeight: 'bold',
    fontSize: '20px',
    borderStyle: 'solid',
    borderColor: '#0784bc'
  },
  Erro: {
    backgroundColor: '#f60101',
    width: '100%',
    textAlign: 'center',
    borderRadius: '30px',
    color: 'white',
    margin: '10px'
  },
  BoxQtdMoedas: {
    backgroundColor: '#0784bc',
    width: '100%',
    textAlign: 'center',
    borderRadius: '30px 30px 0px 0px',
    padding: '10px 0px',
    color: '#ffffff',
    
  },
  QtdMoedas: {
    fontWeight: 'bold',
    fontSize: '38px'
  },
  LabelPontos: {
    display: 'flex',
    justifyContent: 'center'
  }
}))

export default styleClass
