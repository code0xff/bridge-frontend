import React from 'react'
import { Editor } from '../Editor'
import '@elastic/eui/dist/eui_theme_light.css'
import {
  EuiButton,
} from '@elastic/eui';

function Evaluation() {
  const [dec, setDec] = React.useState('# Dectralization\n')
  const [per, setPer] = React.useState('# Performance\n')
  const [sec, setSec] = React.useState('# Security\n')
  const [scal, setScal] = React.useState('# Scalability\n')

  return (
    <div className="evaluation-component">
      <Editor value={dec} setValue={setDec}/>
      <Editor value={per} setValue={setPer}/>
      <Editor value={sec} setValue={setSec}/>
      <Editor value={scal} setValue={setScal}/>
      <div className="evaluation-footer">
        <EuiButton color="primary" fill>Save</EuiButton>
      </div>
    </div>
  );
}

export default Evaluation