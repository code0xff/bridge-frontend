import React from 'react'
import {
  EuiSpacer,
  EuiText,
  EuiComment,
  EuiButtonEmpty,
} from '@elastic/eui'
import {Rating} from 'react-simple-star-rating'
import {Link} from 'react-router-dom'
import {FeedbackDetailViewerPart} from "../FeedbackDetailViewerPart"

function FeedbackViewerPart(props) {
  const {
    id,
    type,
    title,
    average,
    address,
    createdAt,
    score,
    detail,
  } = props

  return (
    <div className='feedback-viewer-part-component'>
      <EuiText>
        <h2>
          {title}
        </h2>
      </EuiText>
      <Rating showTooltip ratingValue={average} readonly={true} size='40px' allowHalfIcon/>
      <EuiSpacer/>
      <EuiComment
        username={address ? address : 'Unknown'}
        event='added a comment'
        timestamp={createdAt}
      >
        <EuiText>
          <p>{detail ? detail : ''}</p>
        </EuiText>
      </EuiComment>
      {
        address ? 
        <Link to={`/feedback/detail/id/${id}/type/${type}`}>
        <EuiButtonEmpty>
          view more feedbacks ...
        </EuiButtonEmpty>
        </Link> :
        null
      }
    </div>
  )
}

export default FeedbackViewerPart
