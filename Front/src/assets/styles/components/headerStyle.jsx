import { makeStyles } from '@material-ui/core/styles'
// eslint-disable-next-line no-unused-vars
import theme from 'assets/styles/materialKit.jsx'

const headerStyle = makeStyles(() => ({
  AppBar: {
    background: theme.primary.white
  },
  list: {
    paddingTop: '20%',
    minWidth: '240px'
  },
  rotaLink: {
    '& .MuiListItem-button:hover':{ 
      backgroundColor: 'rgb(235, 235, 235)'
    }
  },
  imgLogo: {
    width: '180px'
  },
  iconButton: {
    width: '100%',
    justifyContent: 'flex-end',
    flex: 'auto',
    color: theme.primary.yellow
  },
  Tabs: {
    zIndex: 4,
    color: theme.primary.yellow,
    '& .MuiTabs-scrollable': {
      width: '100%',
      justifyContent: 'center'
    }
  },
  Tab: {
    '&$selected': {
      color: theme.primary.yellow
    }
  },
  indicator: {
    backgroundColor: theme.primary.yellow
  },
  selected: {
    color: theme.primary.yellow
  },
  sectionDesktop: {
    textAlign: 'right',
    width: '100%',
    position: 'absolute',
    paddingRight: '60px',
    paddingTop: '10px',
    color: theme.primary.yellow
  },
  sectionMobile: {
    position: 'absolute',
    paddingTop: '10px',
    zIndex: 3
  }
}))

export default headerStyle
