import React from 'react'
import { Editor } from '../Editor'
import '@elastic/eui/dist/eui_theme_light.json'
import {
  EuiButton,
  EuiAccordion,
  EuiSpacer,
  EuiTitle,
} from '@elastic/eui';
import { useGeneratedHtmlId } from '@elastic/eui'
import { Score } from '../Score'

function Evaluation() {
  const [decDetail, setDecDetail] = React.useState('# Dectralization\n')
  const [perDetail, setPerDetail] = React.useState('# Performance\n')
  const [secDetail, setSecDetail] = React.useState('# Security\n')
  const [scalDetail, setScalDetail] = React.useState('# Scalability\n')

  const [decScore, setDecScore] = React.useState(3)
  const [perScore, setPerScore] = React.useState(3)
  const [secScore, setSecScore] = React.useState(3)
  const [scalScore, setScalScore] = React.useState(3)

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
        <Editor value={decDetail} setValue={setDecDetail}/>
        <Score name="decentralization" value={decScore} setValue={setDecScore}/>
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
        <Editor value={perDetail} setValue={setPerDetail}/>
        <Score name="performance" value={perScore} setValue={setPerScore}/>
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
        <Editor value={secDetail} setValue={setSecDetail}/>
        <Score name="security" value={secScore} setValue={setSecScore}/>
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
        <Editor value={scalDetail} setValue={setScalDetail}/>
        <Score name="scalability" value={scalScore} setValue={setScalScore}/>
      </EuiAccordion>
      <EuiSpacer />
      <div className="evaluation-footer">
        <EuiButton color="primary" fill>Save</EuiButton>
      </div>
    </div>
  );
}

export default Evaluation