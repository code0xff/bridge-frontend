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
    title,
    average,
    address,
    createdAt,
    detail,
  } = props

  return (
    <div className='feedback-viewer-part-component'>
      <EuiText>
        <h2>
          {title}
        </h2>
      </EuiText>
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
    </div>
  )
}

export default FeedbackViewerPart
