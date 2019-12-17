import React, { useState, useEffect, useCallback } from 'react'
// nodejs library to set properties for components
import QRCode from 'qrcode.react'
// @material-ui/icons
// components servicos
import styleClass from './RootStyle'
import { effect } from './RootAction'

const Root = () => {
  const classes = useCallback(styleClass(), [])  
  const [erro, setErro] = useState("Erro");
  const [QtdMoedas, setMoedas] = useState("10");
  const [CodBarra, setCodBarra] = useState("teste@teste.com");

  useEffect(() => {
    //effect(setErro, setCodBarra, setMoedas)
  })

  return (
      <div className={classes.Paper}>
        {erro && <div className={classes.Erro}>{erro}</div>}
        <div className={classes.BoxQtdMoedas}>
          <span className={classes.QtdMoedas}>{QtdMoedas}</span>
          <span className={classes.LabelPontos}>Pontos</span>
        </div>

        <div className={classes.CampoCodBarra}>
          <div className={classes.TextCodBarra}>{CodBarra && <QRCode value={CodBarra} size={200} />}</div>
          <div className={classes.CodBarra}>{CodBarra}</div>
        </div>
      </div>
  )
}

export default Root
