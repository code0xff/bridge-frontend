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
  const [selectedXchain, setSelectedXchain] = React.useState(null)
  const [loadedXchains, setLoadedXchains] = React.useState([])

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

  const _renderXchains = () => {
    if (!loadedXchains) {
      return
    }
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
                title={<h3>{loadedXchains[j].xchain_name}<br/>{loadedXchains[j].xchain_en_name}</h3>}
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
      {_renderXchains()}
      {
        modalVisible ?
          <EuiOverlayMask>
            <EuiModal onClose={_closeModal} initialFocus="[name=popswitch]">
              <EuiModalHeader>
                <EuiModalHeaderTitle>{`${selectedXchain.xchain_name} (${selectedXchain.xchain_en_name})`}</EuiModalHeaderTitle>
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