import React, { useState, useEffect, useCallback } from 'react'
// nodejs library to set properties for components
import QrReader from 'react-qr-reader'
// @material-ui/core components
import CssBaseline from '@material-ui/core/CssBaseline'
import Container from '@material-ui/core/Container'
// @material-ui/icons
// components styles
import styleClass from 'assets/styles/components/RootStyle.jsx'

const LeitorQRCode = () => {
  const classes = useCallback(styleClass(), [])  
  const [Result, setResult] = useState("No result");

  const handleScan = data => {
    if (data) {
      setResult(data)
    }
  }

  const handleError = err => {
    console.error(err)
  }

  return (
    <Container component='main' maxWidth='xs'>
      <CssBaseline />
        <div>
          <QrReader
            delay={300}
            onError={handleError}
            onScan={handleScan}
            style={{ width: '100%' }}
          />
          <p>{Result}</p>
        </div>
    </Container>
  )
}

export default LeitorQRCode
