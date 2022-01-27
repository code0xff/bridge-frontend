import React from 'react'
import '@elastic/eui/dist/eui_theme_light.json'
import {
  EuiCard,
  EuiFlexGroup,
  EuiFlexItem,
  EuiOverlayMask,
  EuiModal,
  EuiButton,
  EuiModalHeader,
  EuiModalHeaderTitle,
  EuiModalBody,
  EuiForm,
  EuiFormRow,
  EuiSpacer,
  EuiImage, EuiText,
} from '@elastic/eui'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import {connectWallet} from "../../utils/wallet"

function Xchain() {
  const [modalVisible, setModalVisible] = React.useState(false)
  const [selectedXchain, setSelectedXchain] = React.useState(null)
  const [loadedXchains, setLoadedXchains] = React.useState([])
  const [isAdmin, setIsAdmin] = React.useState(false)
  const [userAddress, setUserAddress] = React.useState('')

  const navigate = useNavigate()

  React.useEffect(() => {
    axios.get(`/api/xchain`)
      .then(response => {
        const xchains = response.data
        setLoadedXchains(xchains)
      })
      .catch(e => {
        console.error(e)
      })
  }, [])

  const _onClickXchain = (xchain) => {
    setSelectedXchain(xchain)
    setModalVisible(true)
  }

  const _closeModal = () => {
    setModalVisible(false)
  }

  const _checkAdmin = (userAddress) => {
    setUserAddress(userAddress)
    if (userAddress) {
      axios.get(`/api/admin/address/${userAddress}`)
        .then(response => {
          const isAdmin = response.data
          setIsAdmin(isAdmin)
        })
        .catch(e => {
          console.error(e)
        })
    }
  }

  const _renderXchains = () => {
    if (!loadedXchains) {
      return
    }
    let rowSize = parseInt(loadedXchains.length / 4)

    const groupComponents = []
    if (isAdmin) {
      groupComponents.push(
        <EuiFlexGroup gutterSize="s">
          <EuiFlexItem>
            <EuiCard
              title="Add New Xchain"
              onClick={() => {
                navigate("/creator")
              }}
            />
          </EuiFlexItem>
        </EuiFlexGroup>
      )
      groupComponents.push(
        <EuiSpacer />
      )
    }
    for (let i = 0; i <= rowSize; i++) {
      const itemCompnents = []
      for (let j = 4 * i; j < 4 * (i + 1); j++) {
        if (j < loadedXchains.length) {
          itemCompnents.push(
            <EuiFlexItem>
              <EuiCard
                icon={
                  <EuiImage
                    size={50}
                    alt="Xchain Icon"
                    src={loadedXchains[j].xchain_image}
                  />
                }
                title={loadedXchains[j].xchain_en_name}
                description={loadedXchains[j].xchain_detail}
                onClick={() => {_onClickXchain(loadedXchains[j])}}
              />
            </EuiFlexItem>
          )
        } else {
          itemCompnents.push(
            <EuiFlexItem>
              <EuiCard
                title={"Comming Soon"}
                isDisabled={true}
              />
            </EuiFlexItem>
          )
        }
      }
      groupComponents.push(
        <EuiFlexGroup gutterSize="l">
          {itemCompnents}
        </EuiFlexGroup>
      )
      groupComponents.push(<EuiSpacer/>)
    }
    return groupComponents
  }

  return (
    <div className="xchain-component">
      <div className="xchain-wallet">
        <EuiText>
          <h4>{userAddress}</h4>
        </EuiText>
        &emsp;
        <EuiButton
          size='s'
          onClick={() => { connectWallet(_checkAdmin) }}
          isDisabled={userAddress !== ''}
          fill={!userAddress}
        >
          Connect Wallet
        </EuiButton>
      </div>
      <EuiSpacer/>
      {_renderXchains()}
      {
        modalVisible ?
          <EuiOverlayMask>
            <EuiModal onClose={_closeModal}>
              <EuiModalHeader>
                <EuiModalHeaderTitle>{`${selectedXchain.xchain_en_name}${selectedXchain.xchain_name ? ' (' + selectedXchain.xchain_name + ')' : ''}`}</EuiModalHeaderTitle>
              </EuiModalHeader>
              <EuiModalBody>
                <div className='xchain-modal-body'>
                  <EuiForm>
                    <EuiFormRow>
                      <Link to={`/viewer/id/${selectedXchain.xchain_id}`}>
                        <EuiButton size='s'>Get Information</EuiButton>
                      </Link>
                    </EuiFormRow>
                    <EuiFormRow>
                      <Link to={`/feedback/name/${selectedXchain.xchain_en_name}/id/${selectedXchain.xchain_id}`}>
                        <EuiButton color='success' size='s'>User Feedback</EuiButton>
                      </Link>
                    </EuiFormRow>
                  </EuiForm>
                  </div>
              </EuiModalBody>
            </EuiModal>
          </EuiOverlayMask>:
          null
      }
    </div>
  )
}

export default Xchain