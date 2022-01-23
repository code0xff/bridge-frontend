import React from 'react'
import '@elastic/eui/dist/eui_theme_light.json'
import {
  EuiFieldText,
  EuiButton,
  EuiSpacer,
  EuiImage,
  EuiGlobalToastList,
  EuiPanel,
  EuiText,
} from '@elastic/eui'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import {connectWallet} from "../../utils/wallet";

function Creator() {
  const [userAddress, setUserAddress] = React.useState('')

  const [xchainName, setXchainName] = React.useState('')
  const [xchainEnName, setXchainEnName] = React.useState('')
  const [xchainImage, setXchainImage] = React.useState('')
  const [xchainDetail, setXchainDetail] = React.useState('')
  const [toasts, setToasts] = React.useState([])

  const navigate = useNavigate()

  const _addXchain = async () => {
    try {
      if (!userAddress) {
        setToasts(toasts.concat({
          id: 'no_wallet_address',
          title: 'Wallet Not Connected',
          color: 'danger',
          text: <p>please connect wallet</p>,
        }))
        return
      }

      if (xchainName.trim() && xchainEnName.trim() && xchainImage.trim() && xchainDetail.trim()) {
        const xchain = { xchainName, xchainEnName, xchainImage, xchainDetail}
        await axios.post(`/api/xchain`, { xchain })
        navigate('/xchain')
      } else {
        setToasts(toasts.concat({
          id: 'warning',
          title: 'Warning',
          color: 'warning',
          text: <p>please enter input values</p>,
        }))
      }
    } catch (e) {
      console.error(e)
      setToasts(toasts.concat({
        id: 'internal_server_error',
        title: 'Internal Service Error',
        color: 'danger',
        text: <p>failed to save new xchain</p>,
      }))
    }
  }

  return (
    <div className="creator-component">
      <div className="creator-wallet">
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
        <h1># Add New Xchain</h1>
      </EuiText>
      <EuiSpacer />
      <EuiPanel paddingSize="l">
        <EuiText>
          <h2>01 이름 (Name)</h2>
        </EuiText>
        <EuiSpacer />
          <EuiFieldText fullWidth={true} onChange={(e) => {setXchainName(e.target.value)}}/>
      </EuiPanel>
      <EuiSpacer />
      <EuiPanel paddingSize="l">
        <EuiText>
          <h2>02 영문명 (English Name)</h2>
        </EuiText>
        <EuiSpacer />
        <EuiFieldText fullWidth={true} onChange={(e) => {setXchainEnName(e.target.value)}}/>
      </EuiPanel>
      <EuiSpacer />
      <EuiPanel paddingSize="l">
        <EuiText>
          <h2>03 이미지 Url (Image Url)</h2>
        </EuiText>
        <EuiSpacer />
        <EuiFieldText fullWidth={true} onChange={(e) => {setXchainImage(e.target.value)}}/>
        <EuiSpacer />
        <EuiImage
          hasShadow
          allowFullScreen
          size={50}
          alt="Xchain Icon"
          src={xchainImage}
        />
      </EuiPanel>
      <EuiSpacer />
      <EuiPanel paddingSize="l">
        <EuiText>
          <h2>04 설명 (Description)</h2>
        </EuiText>
        <EuiSpacer />
        <EuiFieldText fullWidth={true} onChange={(e) => {setXchainDetail(e.target.value)}}/>
      </EuiPanel>
      <EuiSpacer />
      <div className="creator-footer">
        <EuiButton fill onClick={_addXchain}>Submit</EuiButton>&emsp;
        <EuiButton fill color="text" onClick={() => {navigate("/xchain")}}>Cancel</EuiButton>
      </div>
      <EuiGlobalToastList
        toasts={toasts}
        toastLifeTimeMs={5000}
        dismissToast={() => setToasts([])}
      />
    </div>
  )
}

export default Creator