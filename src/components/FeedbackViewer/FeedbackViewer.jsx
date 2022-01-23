import React from 'react'
import {
  EuiSpacer,
  EuiText,
  useGeneratedHtmlId,

} from '@elastic/eui'
import {FeedbackViewerPart} from "../FeedbackViewerPart"

function FeedbackViewer(props) {
  const {
    feeAverage,
    timeAverage,
    uiAverage,
    supportAverage,
    feedbackDetail,
  } = props

  const multipleAccordionsId__1 = useGeneratedHtmlId({
    prefix: 'feedbackMultipleAccordions',
    suffix: 'first',
  })
  const multipleAccordionsId__2 = useGeneratedHtmlId({
    prefix: 'feedbackMultipleAccordions',
    suffix: 'second',
  })
  const multipleAccordionsId__3 = useGeneratedHtmlId({
    prefix: 'feedbackMultipleAccordions',
    suffix: 'third',
  })
  const multipleAccordionsId__4 = useGeneratedHtmlId({
    prefix: 'feedbackMultipleAccordions',
    suffix: 'fourth',
  })

  return (
    <div className='feedback-viewer-component'>
      <EuiText>
        <h1># User Feedback</h1>
      </EuiText>
      <EuiSpacer/>
      <FeedbackViewerPart
        accordionId={multipleAccordionsId__1}
        title={'01 수수료 (Fee)'}
        average={feeAverage}
        address={feedbackDetail.user_address}
        createdAt={feedbackDetail.created_at}
        detail={feedbackDetail.fee_detail}
      />
      <EuiSpacer/>
      <FeedbackViewerPart
        accordionId={multipleAccordionsId__2}
        title={'02 시간 (Time)'}
        average={timeAverage}
        address={feedbackDetail.user_address}
        createdAt={feedbackDetail.created_at}
        detail={feedbackDetail.time_detail}
      />
      <EuiSpacer/>
      <FeedbackViewerPart
        accordionId={multipleAccordionsId__3}
        title={'03 유저 인터페이스 (User Interface)'}
        average={uiAverage}
        address={feedbackDetail.user_address}
        createdAt={feedbackDetail.created_at}
        detail={feedbackDetail.ui_detail}
      />
      <EuiSpacer/>
      <FeedbackViewerPart
        accordionId={multipleAccordionsId__4}
        title={'04 사용자 지원 (Support)'}
        average={supportAverage}
        address={feedbackDetail.user_address}
        createdAt={feedbackDetail.created_at}
        detail={feedbackDetail.support_detail}
      />
    </div>
  )
}

export default FeedbackViewer
