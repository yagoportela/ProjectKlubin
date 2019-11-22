import { makeStyles } from '@material-ui/core/styles'
import theme from 'assets/styles/materialKit.jsx'

const styleClass = makeStyles(() => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white
    }
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1)
  },
  codBarra: {
    textAlign: 'center'
  }
}))

export default styleClass
