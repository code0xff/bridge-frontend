import React from 'react'
import { Editor } from '../Editor'
import '@elastic/eui/dist/eui_theme_dark.json'
import '@elastic/eui/dist/eui_theme_light.json'
import {
  EuiButton,
  EuiAccordion,
  EuiSpacer,
  EuiTitle,
} from '@elastic/eui';
import { useGeneratedHtmlId } from '@elastic/eui'

function Evaluation() {
  const [dec, setDec] = React.useState('# Dectralization\n')
  const [per, setPer] = React.useState('# Performance\n')
  const [sec, setSec] = React.useState('# Security\n')
  const [scal, setScal] = React.useState('# Scalability\n')

  const multipleAccordionsId__1 = useGeneratedHtmlId({
    prefix: 'multipleAccordions',
    suffix: 'first',
  })
  const multipleAccordionsId__2 = useGeneratedHtmlId({
    prefix: 'multipleAccordions',
    suffix: 'second',
  })
  const multipleAccordionsId__3 = useGeneratedHtmlId({
    prefix: 'multipleAccordions',
    suffix: 'third',
  })
  const multipleAccordionsId__4 = useGeneratedHtmlId({
    prefix: 'multipleAccordions',
    suffix: 'fourth',
  })


  return (
    <div className="evaluation-component">
      <EuiAccordion
        id={multipleAccordionsId__1}
        arrowDisplay="none"
        initialIsOpen={true}
        buttonContent={
          <EuiTitle>
            <h1># Dectralization</h1>
          </EuiTitle>
        }
        paddingSize="l"
      >
        <Editor value={dec} setValue={setDec}/>
      </EuiAccordion>
      <EuiSpacer />
      <EuiAccordion
        id={multipleAccordionsId__2}
        arrowDisplay="none"
        buttonContent={
          <EuiTitle>
            <h1># Performance</h1>
          </EuiTitle>
        }
        paddingSize="l"
      >
        <Editor value={per} setValue={setPer}/>
      </EuiAccordion>
      <EuiSpacer />
      <EuiAccordion
        id={multipleAccordionsId__3}
        arrowDisplay="none"
        buttonContent={
          <EuiTitle>
            <h1># Security</h1>
          </EuiTitle>
        }
        paddingSize="l"
      >
        <Editor value={sec} setValue={setSec}/>
      </EuiAccordion>
      <EuiSpacer />
      <EuiAccordion
        id={multipleAccordionsId__4}
        arrowDisplay="none"
        buttonContent={
          <EuiTitle>
            <h1># Scalability</h1>
          </EuiTitle>
        }
        paddingSize="l"
      >
        <Editor value={scal} setValue={setScal}/>
      </EuiAccordion>
      <EuiSpacer />
      <div className="evaluation-footer">
        <EuiButton color="primary" fill>Save</EuiButton>
      </div>
    </div>
  );
}

export default Evaluation