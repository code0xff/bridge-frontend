import React from 'react'
import {
  EuiButton,
  EuiSpacer,
  EuiText,
} from '@elastic/eui'
import {Link, useParams} from 'react-router-dom'
import axios from "axios"
import {connectWallet} from "../../utils/wallet"
import {EvaluationViewer} from "../EvaluationViewer"
import {FeedbackViewer} from "../FeedbackViewer"

function Viewer() {
  const {id} = useParams()

  const [xchainName, setXchainName] = React.useState('')

  const [decDetail, setDecDetail] = React.useState('')
  const [perDetail, setPerDetail] = React.useState('')
  const [secDetail, setSecDetail] = React.useState('')
  const [scalDetail, setScalDetail] = React.useState('')

  const [userAddress, setUserAddress] = React.useState('')

  const [decScore, setDecScore] = React.useState(0)
  const [perScore, setPerScore] = React.useState(0)
  const [secScore, setSecScore] = React.useState(0)
  const [scalScore, setScalScore] = React.useState(0)

  const [feeAverage, setFeeAverage] = React.useState(0)
  const [timeAverage, setTimeAverage] = React.useState(0)
  const [uiAverage, setUiAverage] = React.useState(0)
  const [supportAverage, setSupportAverage] = React.useState(0)
  const [feedbackDetail, setFeedbackDetail] = React.useState({
    user_address: '',
    fee_detail: '등록된 리뷰가 존재하지 않습니다.',
    time_detail: '등록된 리뷰가 존재하지 않습니다.',
    ui_detail: '등록된 리뷰가 존재하지 않습니다.',
    support_detail: '등록된 리뷰가 존재하지 않습니다.',
    created_at: '',
  })

  React.useEffect(() => {
    axios.get(`/api/xchain/id/${id}`)
      .then(response => {
        const xchain = response.data
        setXchainName(xchain.xchain_en_name)
      })
      .catch(e => {
        console.log(e)
      })

    axios.get(`/api/evaluation/id/${id}`)
      .then(response => {
        const evaluation = response.data

        setDecDetail(evaluation.dec_detail)
        setPerDetail(evaluation.per_detail)
        setSecDetail(evaluation.sec_detail)
        setScalDetail(evaluation.scal_detail)
        setDecScore(evaluation.dec_score)
        setPerScore(evaluation.per_score)
        setSecScore(evaluation.sec_score)
        setScalScore(evaluation.scal_score)
      })
      .catch(e => {
        console.log(e)
      })

    axios.get(`/api/feedback/id/${id}`)
      .then(response => {
        const {
          feeAverage,
          timeAverage,
          uiAverage,
          supportAverage,
          feedbackDetail,
        } = response.data

        setFeeAverage(feeAverage)
        setTimeAverage(timeAverage)
        setUiAverage(uiAverage)
        setSupportAverage(supportAverage)
        if (feedbackDetail) {
          setFeedbackDetail(feedbackDetail)
        }
      })
      .catch(e => {
        console.log(e)
      })
  }, [])

  return (
    <div className='viewer-component'>
      <div className="viewer-wallet">
        <EuiText>
          <h4>{userAddress}</h4>
        </EuiText>
        &emsp;
        <EuiButton
          size='s'
          onClick={() => { connectWallet(setUserAddress) }}
          isDisabled={userAddress !== ''}
          fill={!userAddress}
        >
          Connect Wallet
        </EuiButton>
      </div>
      <EuiText>
        <h1>{xchainName}</h1>
      </EuiText>
      <EuiSpacer/>
      <EvaluationViewer
        decScore={decScore}
        decDetail={decDetail}
        perScore={perScore}
        perDetail={perDetail}
        secScore={secScore}
        secDetail={secDetail}
        scalScore={scalScore}
        scalDetail={scalDetail}
        userAddress={userAddress}
        id={id}
      />
      <EuiSpacer/>
      <FeedbackViewer
        feeAverage={feeAverage}
        timeAverage={timeAverage}
        uiAverage={uiAverage}
        supportAverage={supportAverage}
        feedbackDetail={feedbackDetail}
      />
      <EuiSpacer/>
      <div className="viewer-edit">
        <Link to={`/xchain`}>
          <EuiButton color="text" fill>To Xchain</EuiButton>
        </Link>
      </div>
    </div>
  )
}

export default Viewer
