import { makeStyles } from '@material-ui/core/styles'
// eslint-disable-next-line no-unused-vars
import theme from 'assets/styles/materialKit.jsx'

const headerStyle = makeStyles(() => ({
  AppBar: {
    background: theme.primary.white
  },
  list: {
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
    display: 'flex',
    color: theme.primary.object
  },
  Tabs: {
    zIndex: 4,
    color: theme.primary.object,
    '& .MuiTabs-scrollable': {
      width: '100%',
      justifyContent: 'center'
    }
  },
  Tab: {
    '&$selected': {
      color: theme.primary.object
    }
  },
  indicator: {
    backgroundColor: theme.primary.object
  },
  selected: {
    color: theme.primary.object
  },
  sectionDesktop: {
    textAlign: 'right',
    width: '100%',
    position: 'absolute',
    paddingRight: '60px',
    paddingTop: '10px',
    color: theme.primary.object
  },
  sectionMobile: {
    width: '100%',
    paddingTop: '10px',
    display: 'flex',
    justifyContent: 'center'
    
  }
}))

export default headerStyle
