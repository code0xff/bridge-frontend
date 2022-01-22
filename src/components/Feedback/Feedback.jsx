import React from 'react'
import '@elastic/eui/dist/eui_theme_light.json'
import {Rating} from 'react-simple-star-rating'
import {
  EuiSpacer,
  EuiPanel,
  EuiText,
  EuiButton,
  EuiFieldText,
  EuiGlobalToastList,
} from '@elastic/eui'
import {useNavigate, useParams} from 'react-router-dom'
import axios from "axios";

function Feedback() {
  const {name, id} = useParams()

  const [feeScore, setFeeScore] = React.useState(0) // 0 ~ 5
  const [timeScore, setTimeScore] = React.useState(0)
  const [uiScore, setUiScore] = React.useState(0)
  const [supportScore, setSupportScore] = React.useState(0)

  const [feeText, setFeeText] = React.useState('')
  const [timeText, setTimeText] = React.useState('')
  const [uiText, setUiText] = React.useState('')
  const [supportText, setSupportText] = React.useState('')
  const [toasts, setToasts] = React.useState([])

  const [userAddress, setUserAddress] = React.useState('')

  const navigate = useNavigate()

  const _addFeedback = () => {
    if (!userAddress) {
      setToasts(toasts.concat({
        id: 'no_wallet_address',
        title: 'Wallet Not Connected',
        color: 'danger',
        text: <p>please connect wallet</p>,
      }))
      return
    }

    const feedback = {
      feeScore,
      timeScore,
      uiScore,
      supportScore,
      feeText,
      timeText,
      uiText,
      supportText,
      xchainId: id,
      userAddress
    }
    axios.post(`/api/feedback`, { feedback })
      .then(response => {
        console.log(response)
        navigate('/xchain')
      })
      .catch(e => {
        console.error(e)
        setToasts(toasts.concat({
          id: 'internal_server_error',
          title: 'Internal Service Error',
          color: 'danger',
          text: <p>failed to submit feedback</p>,
        }))
      })
  }


  return (
    <div className="feedback-component">
      <div className="feedback-wallet">
        <EuiText>
          <h4>{userAddress}</h4>
        </EuiText>
        &emsp;
        <EuiButton
          size='s'
          onClick={() => { connectWallet(setUserAddress) }}
          isDisabled={userAddress}
          fill={!userAddress}
        >
          Connect Wallet
        </EuiButton>
      </div>
      <EuiText>
        <h1>{name}</h1>
      </EuiText>
      <EuiSpacer/>
      <EuiText>
        <h1># User Feedback</h1>
      </EuiText>
      <EuiSpacer/>

      <EuiPanel paddingSize="l">
        <EuiText>
          <h3>01 수수료 (Fee)</h3>
          수수료(Fee)는 브리지를 사용할 때 추가적으로 지불하게 되는 금액을 의미합니다.
          다음 항목에서는 사용자 경험에 기반해 수수료가 매우 저렴하다(1)부터 매우 비싸다(5)까지 평가할 수 있습니다. <br/>
          ... <br/>
        </EuiText>
        <Rating showTooltip ratingValue={feeScore} onClick={(feeScore) => {
          setFeeScore(feeScore)
        }} size="40px"/>
        <EuiSpacer/>
        <EuiText>
          <h4>Additional Feedback</h4>
        </EuiText>
        <EuiFieldText
          fullWidth={true}
          placeholder="한 줄 평을 남겨주세요."
          value={feeText}
          onChange={(e) => setFeeText(e.target.value)}
        />
      </EuiPanel>
      <EuiSpacer/>

      <EuiPanel paddingSize="l">
        <EuiText>
          <h3>02 시간 (Time)</h3>
          시간(Time)은 브리지를 통해 전송이 완료되는데 필요한 시간을 의미합니다.
          다음 항목에서는 사용자 경험에 기반해 시간이 매우 길다(1)부터 매우 짧다(5)까지 평가할 수 있습니다. <br/>
          ... <br/>
        </EuiText>
        <Rating showTooltip ratingValue={timeScore} onClick={(timeScore) => {
          setTimeScore(timeScore)
        }} size="40px"/>
        <EuiSpacer/>
        <EuiText>
          <h4>Additional Feedback</h4>
        </EuiText>
        <EuiFieldText
          fullWidth={true}
          placeholder="한 줄 평을 남겨주세요."
          value={timeText}
          onChange={(e) => setTimeText(e.target.value)}
        />
      </EuiPanel>
      <EuiSpacer/>
      <EuiPanel paddingSize="l">
        <EuiText>
          <h3>03 유저 인터페이스 (User Interface)</h3>
          유저 인터페이스(User Interface)는 브리지가 사용자 친화적으로 설계되었는가를 의미합니다.
          다음 항목에서는 유저 인터페이스가 매우 불편하다(1)부터 매우 편리하다(5)까지 평가할 수 있습니다. <br/>
          ... <br/>
        </EuiText>
        <Rating showTooltip ratingValue={uiScore} onClick={(uiScore) => {
          setUiScore(uiScore)
        }} size="40px"/>
        <EuiSpacer/>
        <EuiText>
          <h4>Additional Feedback</h4>
        </EuiText>
        <EuiFieldText
          fullWidth={true}
          placeholder="한 줄 평을 남겨주세요."
          value={uiText}
          onChange={(e) => setUiText(e.target.value)}
        />
      </EuiPanel>
      <EuiSpacer/>

      <EuiPanel paddingSize="l">
        <EuiText>
          <h3>04 사용자 지원 (Support)</h3>
          사용자 지원(Support)은 사용자를 위한 메뉴얼이나 안내 등이 잘 지원되고 있는가를 의미합니다.
          다음 항목에서는 사용자 지원이 매우 미흡하다(1)부터 매우 잘 갖춰져있다(5)까지 평가할 수 있습니다. <br/>
          ... <br/>
        </EuiText>
        <Rating showTooltip ratingValue={supportScore} onClick={(supportScore) => {
          setSupportScore(supportScore)
        }} size="40px"/>
        <EuiSpacer/>
        <EuiText>
          <h4>Additional Feedback</h4>
        </EuiText>
        <EuiFieldText
          fullWidth={true}
          placeholder="한 줄 평을 남겨주세요."
          value={supportText}
          onChange={(e) => setSupportText(e.target.value)}
        />
      </EuiPanel>
      <EuiSpacer/>
      <div className="feedback-submit">
        <EuiButton fill onClick={() => { _addFeedback() }}>Submit</EuiButton>&emsp;
        <EuiButton color="text" fill onClick={() => {
          navigate("/xchain")
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

const connectWallet = async function(setAddress) {
  const ethereum = window.ethereum;
  if (ethereum) {
    const accounts = await ethereum.request({method: 'eth_requestAccounts'})
    setAddress(accounts[0])
  } else {
    console.error('no wallet')
  }
}

export default Feedback

