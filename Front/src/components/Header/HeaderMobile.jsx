import React from 'react'
// nodejs library to set properties for components
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
// @material-ui/core components
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import ListSubheader from '@material-ui/core/ListSubheader'
// components
import IconLogin from 'assets/views/components/HeaderViews.jsx'

const HeaderMobile = ({ mobileOpen, handleDrawerToggle, classes, routes }) => (
  <Drawer
    variant='temporary'
    anchor={'right'}
    open={mobileOpen}
    onClose={handleDrawerToggle}
  >
    <div className={classes.sectionMobile}>
      <IconLogin />
    </div>
      <List
        component='nav'
        className={classes.list}
        aria-labelledby='nested-list-subheader'
        subheader={
          <ListSubheader component='div' id='nested-list-subheader'>
            Lista de itens
          </ListSubheader>
        }
      >
        {routes.map((rotas, index) => (          
          <NavLink key={index} to={rotas.link} className={classes.rotaLink} onClick={handleDrawerToggle} >
            <ListItem button>
              <ListItemIcon>
                <rotas.icon />
              </ListItemIcon>
              <ListItemText primary={rotas.Name} />
            </ListItem>            
          </NavLink>
        ))}
        </List>
  </Drawer>
)

// Props
HeaderMobile.defaultProps = {
  handleDrawerToggle: () => { },
  mobileOpen: false,
  classes: {}
}

HeaderMobile.propTypes = {
  handleDrawerToggle: PropTypes.func,
  mobileOpen: PropTypes.bool,
  classes: PropTypes.object,
  routes: PropTypes.array.isRequired
}

export default HeaderMobile
