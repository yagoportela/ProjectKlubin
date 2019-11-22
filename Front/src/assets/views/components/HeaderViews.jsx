import React, { useState, Fragment } from 'react'
import { createBrowserHistory } from 'history';
// nodejs library to set properties for components
import PropTypes from 'prop-types'
// @material-ui/core components
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import IconButton from '@material-ui/core/IconButton'
// @material-ui/icons
import AccountCircle from '@material-ui/icons/AccountCircle'
// eslint-disable-next-line no-unused-vars
import theme from 'assets/styles/materialKit.jsx'
// components servicos
import { logout } from "services/auth";

const IconLogin = ({ classes }) => {
  const [anchorEl, setAnchorEl] = useState(null)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const sair = () => {    
    logout()    
    let history = createBrowserHistory({ forceRefresh: true });
    history.push('/')
  }

  return (
    <Fragment>
      <IconButton
        edge='end'
        aria-label='account of current user'
        aria-haspopup='true'
        onClick={handleClick}
      >
        <AccountCircle
          htmlColor={theme.primary.object}
          fontSize='large' />
      </IconButton>
      <Menu
        id='simple-menu'
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClick={handleClose}
      >
        <MenuItem onClick={sair}>Logout</MenuItem>
      </Menu>
    </Fragment>
  )
}

IconLogin.propTypes = {
  classes: PropTypes.string
}

export default IconLogin
