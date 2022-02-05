import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Editor } from '../Editor'
import '@elastic/eui/dist/eui_theme_light.json'
import {
  EuiButton,
  EuiAccordion,
  EuiSpacer,
  EuiText,
  EuiPanel,
  EuiGlobalToastList,
} from '@elastic/eui';
import { useGeneratedHtmlId } from '@elastic/eui'
import {Rating} from 'react-simple-star-rating'
import axios from "axios";
import {connectWallet} from "../../utils/wallet";

function Evaluation() {
  const {id} = useParams()

  const [xchainName, setXchainName] = React.useState('')

  const [decDetail, setDecDetail] = React.useState('')
  const [perDetail, setPerDetail] = React.useState('')
  const [secDetail, setSecDetail] = React.useState('')
  const [scalDetail, setScalDetail] = React.useState('')
  const [refDetail, setRefDetail] = React.useState('')

  const [decScore, setDecScore] = React.useState(0)
  const [perScore, setPerScore] = React.useState(0)
  const [secScore, setSecScore] = React.useState(0)
  const [scalScore, setScalScore] = React.useState(0)

  const [userAddress, setUserAddress] = React.useState('')
  const [toasts, setToasts] = React.useState([])

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
        setRefDetail(evaluation.ref_detail)
        setDecScore(evaluation.dec_score)
        setPerScore(evaluation.per_score)
        setSecScore(evaluation.sec_score)
        setScalScore(evaluation.scal_score)
      })
      .catch(e => {
        console.log(e)
      })
  }, [])

  const navigate = useNavigate()

  const _saveEvaluation = () => {
    if (!userAddress) {
      setToasts(toasts.concat({
        id: 'no_wallet_address',
        title: 'Wallet Not Connected',
        color: 'danger',
        text: <p>please connect wallet</p>,
      }))
      return
    }

    const evaluation = {
      decDetail,
      perDetail,
      secDetail,
      scalDetail,
      refDetail,
      decScore,
      perScore,
      secScore,
      scalScore,
      xchainId: id,
    }

    axios.post(`/api/evaluation`, {evaluation})
      .then(response => {
        navigate(`/viewer/id/${id}`)
      })
      .catch(e => {
        console.log(e)
      })
  }

  const multipleAccordionsId__1 = useGeneratedHtmlId({
    prefix: 'multipleAccordions',
    suffix: 'first',
  })
  const multipleAccordionsId__2 = useGeneratedHtmlId({
    prefix: 'multipleAccordions',
    suffix: 'second',
  })
  const multipleAccordionsId__3 = useGeneratedHtmlId({
    prefix: 'multipleAccordions',
    suffix: 'third',
  })
  const multipleAccordionsId__4 = useGeneratedHtmlId({
    prefix: 'multipleAccordions',
    suffix: 'fourth',
  })
  const multipleAccordionsId__5 = useGeneratedHtmlId({
    prefix: 'multipleAccordions',
    suffix: 'fifth',
  })

  return (
    <div className="evaluation-component">
      <div className="evaluation-wallet">
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
      <EuiText>
        <h1># Evaluation</h1>
      </EuiText>
      <EuiSpacer/>
      <EuiPanel paddingSize="l">
        <EuiAccordion
          id={multipleAccordionsId__1}
          arrowDisplay="none"
          initialIsOpen={true}
          buttonContent={
            <EuiText>
              <h2>01 탈중앙성 (Decentralization)</h2>
            </EuiText>
          }
          paddingSize="l"
        >
          <Editor value={decDetail} setValue={setDecDetail}/>
          <EuiSpacer/>
          <Rating showTooltip ratingValue={decScore} allowHalfIcon onClick={(decScore) => {
            setDecScore(decScore)
          }} size="40px"/>
        </EuiAccordion>
      </EuiPanel>
      <EuiSpacer />
      <EuiPanel paddingSize="l">
        <EuiAccordion
          id={multipleAccordionsId__2}
          arrowDisplay="none"
          buttonContent={
            <EuiText>
              <h2>02 성능 (Performance)</h2>
            </EuiText>
          }
          paddingSize="l"
        >
          <Editor value={perDetail} setValue={setPerDetail}/>
          <Rating showTooltip ratingValue={perScore} allowHalfIcon onClick={(perScore) => {
            setPerScore(perScore)
          }} size="40px"/>
        </EuiAccordion>
      </EuiPanel>
      <EuiSpacer />
      <EuiPanel paddingSize="l">
        <EuiAccordion
          id={multipleAccordionsId__4}
          arrowDisplay="none"
          buttonContent={
            <EuiText>
              <h2>03 범용성 (Versatility)</h2>
            </EuiText>
          }
          paddingSize="l"
        >
          <Editor value={scalDetail} setValue={setScalDetail}/>
          <Rating showTooltip ratingValue={scalScore} allowHalfIcon onClick={(scalScore) => {
            setScalScore(scalScore)
          }} size="40px"/>
        </EuiAccordion>
      </EuiPanel>
      <EuiSpacer />
      <EuiPanel paddingSize="l">
        <EuiAccordion
          id={multipleAccordionsId__3}
          arrowDisplay="none"
          buttonContent={
            <EuiText>
              <h2>04 보안 (Security)</h2>
            </EuiText>
          }
          paddingSize="l"
        >
          <Editor value={secDetail} setValue={setSecDetail}/>
        </EuiAccordion>
      </EuiPanel>
      <EuiSpacer />
      <EuiPanel paddingSize="l">
        <EuiAccordion
          id={multipleAccordionsId__5}
          arrowDisplay="none"
          buttonContent={
            <EuiText>
              <h2>05 현황 (Current Status)</h2>
            </EuiText>
          }
          paddingSize="l"
        >
          <Editor value={refDetail} setValue={setRefDetail}/>
        </EuiAccordion>
      </EuiPanel>
      <EuiSpacer />
      <div className="evaluation-footer">
        <EuiButton color="primary" fill onClick={() => {_saveEvaluation()}}>Submit</EuiButton>&emsp;
        <EuiButton color="text" fill onClick={() => {
          navigate(`/viewer/id/${id}`)
        }}>Cancel</EuiButton>
      </div>
      <EuiGlobalToastList
        toasts={toasts}
        toastLifeTimeMs={5000}
        dismissToast={() => setToasts([])}
      />
    </div>
  )
}

export default Evaluation