import React from 'react'
import {
  EuiButtonEmpty,
  EuiButton,
  EuiSpacer,
  EuiText,
} from '@elastic/eui'
import {Link, useParams} from 'react-router-dom'
import axios from 'axios'
import {FeedbackDetailViewerPart} from '../FeedbackDetailViewerPart'

function FeedbackDetailViewer() {
  const {id, type} = useParams()

  const [xchainName, setXchainName] = React.useState('')
  const [feedbacks, setFeedbacks] = React.useState([])
  const [loadedFeedbackSeq, setLoadedFeedbackSeq] = React.useState(0)
  const [isFeedbackEnd, setIsFeedbackEnd] = React.useState(true)

  React.useEffect(() => {
    axios.get(`/api/xchain/id/${id}`)
      .then(response => {
        const xchain = response.data
        setXchainName(xchain.xchain_en_name)
      })
      .catch(e => {
        console.log(e)
      })

    _loadFeedbacks()
  }, [])

  const _loadFeedbacks = () => {
    axios.get(`/api/feedback/detail/id/${id}/from/${loadedFeedbackSeq}`)
      .then(response => {
        const loadedFeedbacks = response.data.feedbacks
        if (loadedFeedbacks) {
          setIsFeedbackEnd(response.data.isFeedbackEnd)
          let feedbackArray = []
          feedbackArray.push(...feedbacks, ...loadedFeedbacks)
          setFeedbacks(feedbackArray)
          setLoadedFeedbackSeq(loadedFeedbacks[loadedFeedbacks.length - 1].xchain_feedback_detail_seq)
        }
      })
      .catch(e => {
        console.log(e)
      })
  }

  const _renderFeedbacks = () => {
    const feedbackViewParts = []
    feedbacks.forEach((f) => {
      if (type === 'fee') {
        feedbackViewParts.push(
          <FeedbackDetailViewerPart
            userAddress={f.user_address}
            createdAt={f.created_at}
            score={f.fee_score}
            detail={f.fee_detail}
          />
        )
      } else if (type === 'time') {
        feedbackViewParts.push(
          <FeedbackDetailViewerPart
            userAddress={f.user_address}
            createdAt={f.created_at}
            score={f.time_score}
            detail={f.time_detail}
          />
        )
      } else if (type === 'ui') {
        feedbackViewParts.push(
          <FeedbackDetailViewerPart
            userAddress={f.user_address}
            createdAt={f.created_at}
            score={f.ui_score}
            detail={f.ui_detail}
          />
        )
      } else {
        feedbackViewParts.push(
          <FeedbackDetailViewerPart
            userAddress={f.user_address}
            createdAt={f.created_at}
            score={f.support_score}
            detail={f.support_detail}
          />
        )
      }
      feedbackViewParts.push(<EuiSpacer/>)
    })
    feedbackViewParts.pop()
    return (
      <div>
        {feedbackViewParts}
      </div>
    )
  }

  return (
    <div className='feedback-detail-viewer-component'>
      <EuiText>
        <h1>{xchainName}</h1>
      </EuiText>
      <EuiSpacer/>
      <EuiText>
        <h1># More Feedbacks</h1>
      </EuiText>
      <EuiSpacer/>
      {_renderFeedbacks()}
      <EuiSpacer/>
      <div className="feedback-detail-viewer-to-viewer">
        {
          isFeedbackEnd ?
            null :
            <div>
              <EuiButtonEmpty onClick={() => {_loadFeedbacks()}}>more feedbacks ...</EuiButtonEmpty>
              <EuiSpacer/>
            </div>
        }
        <Link to={`/viewer/id/${id}`}>
          <EuiButton color="text" fill>To Information</EuiButton>
        </Link>
      </div>
    </div>
  )
}

export default FeedbackDetailViewer
