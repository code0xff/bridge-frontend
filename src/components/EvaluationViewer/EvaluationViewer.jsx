import React from 'react'
import {
  EuiAccordion,
  EuiButton,
  EuiMarkdownFormat,
  EuiPanel,
  EuiSpacer,
  EuiText,
  EuiHorizontalRule,
} from '@elastic/eui'
import {Link} from 'react-router-dom'
import {Rating} from "react-simple-star-rating"

function EvaluationViewer(props) {
  const {
    accordionId,
    decScore,
    decDetail,
    perScore,
    perDetail,
    secScore,
    secDetail,
    scalScore,
    scalDetail,
    refDetail,
    userAddress,
    id,
  } = props

  return (
    <div className='evaluation-viewer-component'>
      <EuiPanel paddingSize='l'>
        <EuiAccordion
          id={accordionId}
          arrowDisplay='none'
          initialIsOpen={true}
          buttonContent={
            <EuiText>
              <h1># Evaluation</h1>
            </EuiText>
          }
          paddingSize='l'
        >
          <EuiText>
            <h2>
              01 탈중앙성 (Dectralization)
            </h2>
          </EuiText>
          <EuiSpacer />
          <Rating ratingValue={decScore} showTooltip readonly={true} size="40px"/>
          <EuiSpacer />
          <EuiMarkdownFormat>
            {decDetail}
          </EuiMarkdownFormat>
          <EuiHorizontalRule/>
          <EuiText>
            <h2>
              02 성능 (Performance)
            </h2>
          </EuiText>
          <EuiSpacer />
          <Rating ratingValue={perScore} showTooltip readonly={true} size="40px"/>
          <EuiSpacer />
          <EuiMarkdownFormat>
            {perDetail}
          </EuiMarkdownFormat>
          <EuiHorizontalRule/>
          <EuiText>
            <h2>
              03 보안 (Security)
            </h2>
          </EuiText>
          <EuiSpacer />
          <Rating ratingValue={secScore} showTooltip readonly={true} size="40px"/>
          <EuiSpacer />
          <EuiMarkdownFormat>
            {secDetail}
          </EuiMarkdownFormat>
          <EuiHorizontalRule/>
          <EuiText>
            <h2>
              04 확장성 (Scalability)
            </h2>
          </EuiText>
          <EuiSpacer />
          <Rating ratingValue={scalScore} showTooltip readonly={true} size="40px"/>
          <EuiSpacer />
          <EuiMarkdownFormat>
            {scalDetail}
          </EuiMarkdownFormat>
          <EuiHorizontalRule/>
          <EuiText>
            <h2>
              05 현황 (Current Status)
            </h2>
          </EuiText>
          <EuiSpacer />
          <EuiMarkdownFormat>
            {refDetail}
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
