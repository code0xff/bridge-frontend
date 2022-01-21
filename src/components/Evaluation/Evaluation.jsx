import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Editor } from '../Editor'
import '@elastic/eui/dist/eui_theme_light.json'
import {
  EuiButton,
  EuiAccordion,
  EuiSpacer,
  EuiText,
  EuiPanel,
  EuiHeader,
  EuiHeaderLogo,
  EuiHeaderSectionItemButton,
  EuiAvatar,
  EuiIcon
} from '@elastic/eui';
import { useGeneratedHtmlId } from '@elastic/eui'
import {Rating} from 'react-simple-star-rating'

function Evaluation() {
  const {name} = useParams()
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

  const navigate = useNavigate()

  return (
    <div className="evaluation-component">
      <EuiSpacer />
      {headers}
      <EuiText>
        <h1>{name}</h1>
      </EuiText>
      <EuiSpacer/>
      <EuiText>
        <h1># Evaluation</h1>
      </EuiText>
      <EuiSpacer/>
      <EuiPanel paddingSize="l">
        <EuiAccordion
          id={multipleAccordionsId__1}
          arrowDisplay="none"
          initialIsOpen={true}
          buttonContent={
            <EuiText>
              <h3>01 탈중앙성 (Dectralization)</h3>
            </EuiText>
          }
          paddingSize="l"
        >
          <Editor value={decDetail} setValue={setDecDetail}/>
          <EuiSpacer/>
          <Rating showTooltip ratingValue={decScore} onClick={(decScore) => {
            setDecScore(decScore)
          }} size="40px"/>
        </EuiAccordion>
      </EuiPanel>
      <EuiSpacer />
      <EuiPanel paddingSize="l">
        <EuiAccordion
          id={multipleAccordionsId__2}
          arrowDisplay="none"
          buttonContent={
            <EuiText>
              <h3>02 성능 (Performance)</h3>
            </EuiText>
          }
          paddingSize="l"
        >
          <Editor value={perDetail} setValue={setPerDetail}/>
          <Rating showTooltip ratingValue={perScore} onClick={(perScore) => {
            setPerScore(perScore)
          }} size="40px"/>
        </EuiAccordion>
      </EuiPanel>
      <EuiSpacer />
      <EuiPanel paddingSize="l">
        <EuiAccordion
          id={multipleAccordionsId__3}
          arrowDisplay="none"
          buttonContent={
            <EuiText>
              <h3>03 보안 (Security)</h3>
            </EuiText>
          }
          paddingSize="l"
        >
          <Editor value={secDetail} setValue={setSecDetail}/>
          <Rating showTooltip ratingValue={secScore} onClick={(secScore) => {
            setSecScore(secScore)
          }} size="40px"/>
        </EuiAccordion>
      </EuiPanel>
      <EuiSpacer />
      <EuiPanel paddingSize="l">
        <EuiAccordion
          id={multipleAccordionsId__4}
          arrowDisplay="none"
          buttonContent={
            <EuiText>
              <h3>04 확장성 (Scalability)</h3>
            </EuiText>
          }
          paddingSize="l"
        >
          <Editor value={scalDetail} setValue={setScalDetail}/>
          <Rating showTooltip ratingValue={scalScore} onClick={(scalScore) => {
            setScalScore(scalScore)
          }} size="40px"/>
        </EuiAccordion>
      </EuiPanel>
      <EuiSpacer />
      <div className="evaluation-footer">
        <EuiButton color="primary" fill>Submit</EuiButton>&emsp;
        <EuiButton color="text" fill onClick={() => {
          navigate("/xchain")
        }}>Cancel</EuiButton>
      </div>
    </div>
  )
}

export default Evaluation
