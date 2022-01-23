import React from 'react'
import {
  EuiAccordion,
  EuiButton,
  EuiMarkdownFormat,
  EuiPanel,
  EuiSpacer,
  EuiText,
  useGeneratedHtmlId,
} from '@elastic/eui'
import {Link} from 'react-router-dom'
import {Rating} from "react-simple-star-rating"

function EvaluationViewer(props) {
  const {
    decScore,
    decDetail,
    perScore,
    perDetail,
    secScore,
    secDetail,
    scalScore,
    scalDetail,
    userAddress,
    id,
  } = props


  const multipleAccordionsId__1 = useGeneratedHtmlId({
    prefix: 'evaluationMultipleAccordions',
    suffix: 'first',
  })
  const multipleAccordionsId__2 = useGeneratedHtmlId({
    prefix: 'evaluationMultipleAccordions',
    suffix: 'second',
  })
  const multipleAccordionsId__3 = useGeneratedHtmlId({
    prefix: 'evaluationMultipleAccordions',
    suffix: 'third',
  })
  const multipleAccordionsId__4 = useGeneratedHtmlId({
    prefix: 'evaluationMultipleAccordions',
    suffix: 'fourth',
  })

  return (
    <div className='evaluation-viewer-component'>
      <EuiText>
        <h1># Evaluation</h1>
      </EuiText>
      <EuiSpacer/>
      <EuiPanel paddingSize='l'>
        <EuiAccordion
          id={multipleAccordionsId__1}
          arrowDisplay='none'
          initialIsOpen={true}
          buttonContent={
            <EuiText>
              <h2>
                01 탈중앙성 (Dectralization)
              </h2>
            </EuiText>
          }
          paddingSize='l'
        >
          <Rating ratingValue={decScore} showTooltip readonly={true} size="40px"/>
          <EuiSpacer />
          <EuiMarkdownFormat>
            {decDetail}
          </EuiMarkdownFormat>
        </EuiAccordion>
      </EuiPanel>
      <EuiSpacer/>
      <EuiPanel paddingSize='l'>
        <EuiAccordion
          id={multipleAccordionsId__2}
          arrowDisplay='none'
          initialIsOpen={true}
          buttonContent={
            <EuiText>
              <h2>
                02 성능 (Performance)
              </h2>
            </EuiText>
          }
          paddingSize='l'
        >
          <Rating ratingValue={perScore} showTooltip readonly={true} size="40px"/>
          <EuiSpacer/>
          <EuiMarkdownFormat>
            {perDetail}
          </EuiMarkdownFormat>
        </EuiAccordion>
      </EuiPanel>
      <EuiSpacer/>
      <EuiPanel paddingSize='l'>
        <EuiAccordion
          id={multipleAccordionsId__3}
          arrowDisplay='none'
          initialIsOpen={true}
          buttonContent={
            <EuiText>
              <h2>
                03 보안 (Security)
              </h2>
            </EuiText>
          }
          paddingSize='l'
        >
          <Rating ratingValue={secScore} showTooltip readonly={true} size="40px"/>
          <EuiSpacer/>
          <EuiMarkdownFormat>
            {secDetail}
          </EuiMarkdownFormat>
        </EuiAccordion>
      </EuiPanel>
      <EuiSpacer/>
      <EuiPanel paddingSize='l'>
        <EuiAccordion
          id={multipleAccordionsId__4}
          arrowDisplay='none'
          initialIsOpen={true}
          buttonContent={
            <EuiText>
              <h2>
                04 확장성 (Scalability)
              </h2>
            </EuiText>
          }
          paddingSize='l'
        >
          <Rating ratingValue={scalScore} showTooltip readonly={true} size="40px"/>
          <EuiSpacer/>
          <EuiMarkdownFormat>
            {scalDetail}
          </EuiMarkdownFormat>
        </EuiAccordion>
      </EuiPanel>
      <EuiSpacer/>
      {
        userAddress ?
          <div className="evaluation-viewer-edit">
            <Link to={`/evaluation/id/${id}`}>
              <EuiButton fill>Edit</EuiButton>
            </Link>
          </div>
          : null
      }
    </div>
  )
}

export default EvaluationViewer
