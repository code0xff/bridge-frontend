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
} from '@elastic/eui'
import { Link } from 'react-router-dom'

function Xchain() {
  const [modalVisible, setModalVisible] = React.useState(false)
  const [selectedName, setSelectedName] = React.useState('')

  const _onClickXchain = (name) => {
    setSelectedName(name)
    setModalVisible(true)
  }

  const _closeModal = () => {
    setModalVisible(false)
  }

  return (
    <div className="xchain-component">
      <EuiFlexGroup gutterSize="l">
        <EuiFlexItem>
          <EuiCard
            title={"Polkadot"}
            description="Xchain Detail Part"
            onClick={() => {_onClickXchain('Polkadot')}}
          />
        </EuiFlexItem>
        <EuiFlexItem>
          <EuiCard
            title={"Cosmos"}
            description="Xchain Detail Part"
            onClick={() => {_onClickXchain('Cosmos')}}
          />
        </EuiFlexItem>
        <EuiFlexItem>
          <EuiCard
            title={"Multichain"}
            description="Xchain Detail Part"
            onClick={() => {_onClickXchain('Multichain')}}
          />
        </EuiFlexItem>
        <EuiFlexItem>
          <EuiCard
            title={"Comming Soon"}
            isDisabled={true}
          />
        </EuiFlexItem>
      </EuiFlexGroup>
      <EuiSpacer/>
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
                      <Link to={"/viewer/" + selectedName}>
                        <EuiButton size='s'>Get Information</EuiButton>
                      </Link>
                    </EuiFormRow>
                    <EuiFormRow>
                      <EuiButton color='success' size='s'>User Feedback</EuiButton>
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