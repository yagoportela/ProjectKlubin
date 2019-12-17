import React from 'react'
import styled from 'styled-components'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import Select from '@material-ui/core/Select';
import theme from 'assets/styles/materialKit.jsx'

const classes  =  makeStyles(() => ({
  form: {
    width: '100%',
    marginTop: theme.spacing(1)
  }
}));

export const StyledButton = styled(({ ...props }) =>
  <Button type='submit' fullWidth variant='contained' color='primary' {...props} />)``

export const StyleTextField = styled(({ ...props }) =>
  <TextField variant='outlined' margin='normal' required fullWidth {...props} />)``

export const StyleFormControlLabel = styled(({ ...props }) =>
  <FormControlLabel control={<Checkbox value='remember' color='primary' />} {...props} />)``

  export const StyleFormControlSelect = styled(({ ...props }) =>
  <div  className={classes.form} props>
    <Select native>
        <option value={1}>Option 1</option>
        <option value={2}>Option 2</option>
    </Select></div>)``

  
