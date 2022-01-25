import React from 'react'
import {
  EuiPanel,
  EuiText,
  EuiComment,
} from '@elastic/eui'
import {Rating} from 'react-simple-star-rating'

function FeedbackDetailViewerPart(props) {
  const {
    userAddress,
    createdAt,
    score,
    detail
  } = props
  return (
    <EuiPanel paddingSize='l'>
      <EuiComment
        username={userAddress ? userAddress : 'Unknown'}
        event='added a comment'
        timestamp={createdAt}
      >
        <EuiText>
          <p>{detail ? detail : ''}</p>
        </EuiText>
      </EuiComment>
      <Rating showTooltip ratingValue={score} readonly={true} size="20px"/>
    </EuiPanel>
  )
}

export default FeedbackDetailViewerPart
