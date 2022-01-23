import React from 'react'
import {
  EuiAccordion,
  EuiPanel,
  EuiSpacer,
  EuiText,
  EuiComment
} from '@elastic/eui'
import {Rating} from "react-simple-star-rating"

function FeedbackViewerPart(props) {
  const {
    accordionId,
    title,
    average,
    address,
    createdAt,
    detail,
  } = props

  return (
    <div className='feedback-viewer-part-component'>
      <EuiPanel paddingSize='l'>
        <EuiAccordion
          id={accordionId}
          arrowDisplay='none'
          initialIsOpen={true}
          buttonContent={
            <EuiText>
              <h2>
                {title}
              </h2>
            </EuiText>
          }
          paddingSize='l'
        >
          <Rating showTooltip ratingValue={average} readonly={true} size="40px" allowHalfIcon/>
          <EuiSpacer/>
            <EuiComment
              username={address ? address : 'Unknown'}
              event="added a comment"
              timestamp={createdAt}
            >
              <EuiText>
                <p>{detail ? detail : ''}</p>
              </EuiText>
            </EuiComment>
        </EuiAccordion>
      </EuiPanel>
    </div>
  )
}

export default FeedbackViewerPart
