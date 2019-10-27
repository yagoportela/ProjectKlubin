import React from 'react'
import styled from 'styled-components'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'

export const StyledButton = styled(({ ...props }) =>
  <Button type='submit' fullWidth variant='contained' color='primary' {...props} />)`
  margin: theme.spacing(3, 0, 2)`

export const StyleTextField = styled(({ ...props }) =>
  <TextField variant='outlined' margin='normal' required fullWidth {...props} />)``

export const StyleFormControlLabel = styled(({ ...props }) =>
  <FormControlLabel control={<Checkbox value='remember' color='primary' />} />)``
