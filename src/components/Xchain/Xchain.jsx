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
  EuiImage,
} from '@elastic/eui'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

function Xchain() {
  const [modalVisible, setModalVisible] = React.useState(false)
  const [selectedName, setSelectedName] = React.useState('')
  const [selectedXchainId, setSelectedXchainId] = React.useState('')
  const [loadedXchains, setLoadedXchains] = React.useState([])

  const navigate = useNavigate()

  React.useEffect(() => {
    _loadXchains()
  }, [])

  const _onClickXchain = (name, id) => {
    setSelectedName(name)
    setSelectedXchainId(id)
    setModalVisible(true)
  }

  const _closeModal = () => {
    setModalVisible(false)
  }

  const _loadXchains = async () => {
    const response = await axios.get(`/api/xchain`)
    const xchains = response.data

    if (xchains.length > 0) {
      setLoadedXchains(...loadedXchains, xchains)
    }
  }

  const _renderXchains = () => {
    if (!loadedXchains) {
      return
    }
    console.log(loadedXchains)
    let rowSize = parseInt(loadedXchains.length / 4)

    const groupComponents = []
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
                onClick={() => {_onClickXchain(loadedXchains[j].xchain_en_name, loadedXchains[j].xchain_id)}}
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
      {_renderXchains()}
      {
        modalVisible ?
          <EuiOverlayMask>
            <EuiModal onClose={_closeModal} initialFocus="[name=popswitch]">
              <EuiModalHeader>
                <EuiModalHeaderTitle>{selectedName}</EuiModalHeaderTitle>
              </EuiModalHeader>
              <EuiModalBody>
                <div className='xchain-modal-body'>
                  <EuiForm>
                    <EuiFormRow>
                      <Link to={"/viewer/id/" + selectedXchainId}>
                        <EuiButton size='s'>Get Information</EuiButton>
                      </Link>
                    </EuiFormRow>
                    <EuiFormRow>
                      <Link to={"/feedback/id/" + selectedXchainId}>
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