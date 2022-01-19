import React from 'react'
import '@elastic/eui/dist/eui_theme_light.json'
import {
  EuiTitle,
  EuiFieldText,
  EuiButton,
  EuiSpacer,
  EuiImage,
  EuiTextArea,
  EuiToast,
  EuiGlobalToastList,
} from '@elastic/eui'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Creator() {
  const [xchainName, setXchainName] = React.useState('')
  const [xchainEnName, setXchainEnName] = React.useState('')
  const [xchainImage, setXchainImage] = React.useState('')
  const [xchainDetail, setXchainDetail] = React.useState('')
  const [toasts, setToasts] = React.useState([])

  const navigate = useNavigate()

  const _addXchain = async () => {
    try {
      const res = await axios.post(`/api/xchain`, { xchainName, xchainEnName, xchainImage, xchainDetail })
      navigate('/xchain')
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
      <EuiTitle>
        <h4>Xchain Name</h4>
      </EuiTitle>
      <EuiSpacer />
      <EuiFieldText fullWidth={true} onChange={(e) => {setXchainName(e.target.value)}}/>
      <EuiSpacer />
      <EuiTitle>
        <h4>Xchain English Name</h4>
      </EuiTitle>
      <EuiSpacer />
      <EuiFieldText fullWidth={true} onChange={(e) => {setXchainEnName(e.target.value)}}/>
      <EuiSpacer />
      <EuiTitle>
        <h4>Xchain Image Url</h4>
      </EuiTitle>
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
      <EuiSpacer />
      <EuiTitle>
        <h4>Xchain Detail</h4>
      </EuiTitle>
      <EuiSpacer />
      <EuiTextArea fullWidth={true} onChange={(e) => {setXchainDetail(e.target.value)}}/>
      <EuiSpacer />
      <div className="creator-footer">
        <EuiButton fill onClick={_addXchain}>Save</EuiButton>
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