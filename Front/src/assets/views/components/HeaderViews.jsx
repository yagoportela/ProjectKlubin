import React, { useState, Fragment } from 'react'
// nodejs library to set properties for components
import PropTypes from 'prop-types'
// @material-ui/core components
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import IconButton from '@material-ui/core/IconButton'
// @material-ui/icons
import AccountCircle from '@material-ui/icons/AccountCircle'

const IconLogin = ({ classes }) => {
  const [anchorEl, setAnchorEl] = useState(null)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
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
          htmlColor='rgb(235, 188, 14)'
          fontSize='large' />
      </IconButton>
      <Menu
        id='simple-menu'
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Meu Perfil</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </Fragment>
  )
}

IconLogin.propTypes = {
  classes: PropTypes.string
}

export default IconLogin
