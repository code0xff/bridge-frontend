import React from 'react'
import {
  EuiSpacer,
  EuiText,
  EuiAccordion,
  EuiPanel,
  EuiHorizontalRule,
} from '@elastic/eui'
import {FeedbackViewerPart} from "../FeedbackViewerPart"

function FeedbackViewer(props) {
  const {
    id,
    accordionId,
    feeAverage,
    timeAverage,
    uiAverage,
    supportAverage,
    feedbackDetail,
  } = props

  return (
    <div className='feedback-viewer-component'>
      <EuiPanel paddingSize="l">
        <EuiAccordion
          id={accordionId}
          arrowDisplay="none"
          initialIsOpen={true}
          buttonContent={
            <EuiText>
              <h1># User Feedback</h1>
            </EuiText>
          }
          paddingSize="l"
        >
          <FeedbackViewerPart
            title={'01 수수료 (Fee)'}
            average={feeAverage}
            address={feedbackDetail.user_address}
            createdAt={feedbackDetail.created_at}
            detail={feedbackDetail.fee_detail}
            score={feedbackDetail.fee_score}
            id={id}
            type='fee'
          />
          <EuiHorizontalRule/>
          <FeedbackViewerPart
            title={'02 시간 (Time)'}
            average={timeAverage}
            address={feedbackDetail.user_address}
            createdAt={feedbackDetail.created_at}
            detail={feedbackDetail.time_detail}
            score={feedbackDetail.time_score}
            id={id}
            type='time'
          />
          <EuiHorizontalRule/>
          <FeedbackViewerPart
            title={'03 유저 인터페이스 (User Interface)'}
            average={uiAverage}
            address={feedbackDetail.user_address}
            createdAt={feedbackDetail.created_at}
            detail={feedbackDetail.ui_detail}
            score={feedbackDetail.ui_score}
            id={id}
            type='ui'
          />
          <EuiHorizontalRule/>
          <FeedbackViewerPart
            title={'04 사용자 지원 (Support)'}
            average={supportAverage}
            address={feedbackDetail.user_address}
            createdAt={feedbackDetail.created_at}
            detail={feedbackDetail.support_detail}
            score={feedbackDetail.support_score}
            id={id}
            type='support'
          />
        </EuiAccordion>
      </EuiPanel>
    </div>
  )
}

export default FeedbackViewer
