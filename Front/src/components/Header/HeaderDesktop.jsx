import React, { useState, Fragment } from 'react'
// nodejs library to set properties for components
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
// @material-ui/core components
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
// components
import IconLogin from 'assets/views/components/HeaderViews.jsx'

const HeaderDesktop = ({ classes, routes }) => {
  const [value, setValue] = useState(window.location.pathname)
  const handleChange = (event, newValue) => {
    setValue(newValue)
  }
  
  return (
    <Fragment>
        <Tabs
          className={classes.Tabs}
          value={value}
          onChange={handleChange}
          indicatorcolor='primary'
          variant='scrollable'
          textColor='primary'
          classes={{ indicator: classes.indicator }}
        >
          { routes.map((rotas, index) => {

            if(!rotas.barra)
              return ''
              
            return (            
              <Tab
                key={index}
                value={'/'+rotas.link}
                icon={<rotas.icon />}
                label={rotas.Name}
                className={classes.Tab}
                classes={{ selected: classes.selected }} 
                component={Link}
                to={'/'+rotas.link}
              >
              </Tab>
            )
          })}
        </Tabs>
      <div className={classes.sectionDesktop}>
        <IconLogin />
      </div>
    </Fragment>
  )
}

HeaderDesktop.defaultProps = {
  classes: {}
}

HeaderDesktop.propTypes = {
  classes: PropTypes.object,
  routes: PropTypes.array.isRequired
}

export default HeaderDesktop
