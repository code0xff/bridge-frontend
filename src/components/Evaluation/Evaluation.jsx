import React from 'react'
import { useParams } from 'react-router-dom'
import { Editor } from '../Editor'
import '@elastic/eui/dist/eui_theme_light.json'
import {
  EuiButton,
  EuiAccordion,
  EuiSpacer,
  EuiTitle,
  EuiHeader,
  EuiHeaderLogo,
  EuiSwitch,
  EuiHeaderSectionItemButton,
  EuiAvatar,
  EuiIcon
} from '@elastic/eui';
import { useGeneratedHtmlId } from '@elastic/eui'
import { Score } from '../Score'

function Evaluation() {

  const params = useParams()
  
  const [isFixed, setIsFixed] = React.useState(false);

  const breadcrumbs = [
    {
      text: 'Bridge',
      href: '#',
      onClick: (e) => {
        e.preventDefault();
      },
    },
    {
      text: 'Multichain',
      href: '#',
      onClick: (e) => {
        e.preventDefault();
      },
    },
    {
      text: 'Evaluation',
    },
  ];

  React.useEffect(() => {
    if (isFixed) document.body.classList.add('euiBody--headerIsFixed--double');

    return () => {
      document.body.classList.remove('euiBody--headerIsFixed--double');
    };
  }, [isFixed]);

  const headers = (
    <>
      <EuiHeader
        theme="dark"
        position={isFixed ? 'fixed' : 'static'}
        sections={[
          {
            items: [
              <EuiHeaderLogo iconType="logoElastic">Bridge Evaluation Platform</EuiHeaderLogo>,
            ],
            borders: 'none',
          },
          {
            items: [
              <EuiHeaderSectionItemButton aria-label="Account menu">
                <EuiAvatar name="John Username" size="s" />
              </EuiHeaderSectionItemButton>,
            ],
            borders: 'none',
          },
        ]}
      />
      <EuiHeader
        position={isFixed ? 'fixed' : 'static'}
        sections={[
          {
            items: [
              /*
              <EuiHeaderSectionItemButton aria-label="Account menu">
                <EuiAvatar type="space" name="Bridge" size="s" />
              </EuiHeaderSectionItemButton>,
              */
            ],
            breadcrumbs: breadcrumbs,
            borders: 'right',
          },
          {
            items: [
              <EuiHeaderSectionItemButton
                aria-label="News feed: Updates available"
                notification={true}
              >
                <EuiIcon type="cheer" size="m" />
              </EuiHeaderSectionItemButton>,
            ],
            borders: 'none',
          },
        ]}
      />
    </>
  );



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
      <EuiSwitch
        label={'Make header fixed position'}
        checked={isFixed}
        onChange={(e) => setIsFixed(e.target.checked)}
      />
      <EuiSpacer />
      {headers}

      <div className="evaluation-header">
        <EuiTitle size="l">
          <h1>{params.name}</h1>
        </EuiTitle>
      </div>
      <EuiSpacer />
      <EuiAccordion
        id={multipleAccordionsId__1}
        arrowDisplay="none"
        initialIsOpen={true}
        buttonContent={
          <EuiTitle size="m">
            <h3># Dectralization</h3>
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
          <EuiTitle size="m">
            <h3># Performance</h3>
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
          <EuiTitle size="m">
            <h3># Security</h3>
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
          <EuiTitle size="m">
            <h3># Scalability</h3>
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
  )
}

export default Evaluation
