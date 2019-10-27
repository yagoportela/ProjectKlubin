import React, { useState, useCallback } from 'react'
// nodejs library to set properties for components
// @material-ui/core components
import AppBar from '@material-ui/core/AppBar'
import CardMedia from '@material-ui/core/CardMedia'
import Hidden from '@material-ui/core/Hidden'
import IconButton from '@material-ui/core/IconButton'
import Toolbar from '@material-ui/core/Toolbar'
import withStyles from '@material-ui/core/styles/withStyles'
// @material-ui/icons
import MenuIcon from '@material-ui/icons/Menu'
// components
import headerStyle from 'assets/styles/components/headerStyle'
import Logo from 'assets/Images/logo-og2.png'
import HeaderDesktop from './HeaderDesktop'
import HeaderMobile from './HeaderMobile'
import Routespath from 'utils/routesObject.jsx'

const Header = () => {
  const routes = Routespath.Cliente
  const [userState, setUserInfo] = useState({ mobileOpen: false })
  const { mobileOpen } = userState
  const classes = useCallback(headerStyle(), [])
  const handleDrawerToggle = useCallback(() => {
    setUserInfo({ mobileOpen: !mobileOpen })
  }, [mobileOpen])

  return (
    <AppBar className={classes.AppBar}>
      <Toolbar className={'container'}>

        <div className={classes.Logo}>
          <CardMedia image={Logo} component='img' title='Logo' className={classes.imgLogo} />
        </div>

        <Hidden smDown>
          <HeaderDesktop classes={classes} routes={routes} />
        </Hidden>

        <Hidden mdUp>
          <IconButton
            color='inherit'
            aria-label='open drawer'
            onClick={handleDrawerToggle}
            className={classes.iconButton}
          >
            <MenuIcon />
          </IconButton>
        </Hidden>
      </Toolbar>

      <Hidden mdUp implementation='js'>
        <HeaderMobile mobileOpen={mobileOpen} handleDrawerToggle={handleDrawerToggle} classes={classes} routes={routes} />
      </Hidden>
    </AppBar>
  )
}

export default withStyles(headerStyle)(Header)
