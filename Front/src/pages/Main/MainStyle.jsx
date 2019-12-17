import { makeStyles } from '@material-ui/core/styles'
import theme from 'assets/styles/materialKit.jsx'

const MainStyle = makeStyles(() => ({
  Main:{
    marginTop: '89px',
    background: theme.primary.objectBackground,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  }
}))

export default MainStyle
