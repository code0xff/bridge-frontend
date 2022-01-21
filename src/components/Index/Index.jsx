import React from 'react'
import { Link } from 'react-router-dom'
import {
  EuiFlexGroup,
  EuiFlexItem,
  EuiTitle,
  EuiButton,
  EuiSpacer,
} from '@elastic/eui';
import '@elastic/eui/dist/eui_theme_light.json'

function Index() {
  return (
    <div className="index-component">
      <EuiFlexGroup justifyContent="center">
        <EuiFlexItem grow={false}>
          <EuiTitle size="l">
            <h1>
              Cross Chain Evaluation Platform
            </h1>
          </EuiTitle>
          <EuiSpacer />
          <Link to="/xchain">
            <EuiButton color="primary" fill>Go To Xchains</EuiButton>
          </Link>
        </EuiFlexItem>
      </EuiFlexGroup>
    </div>
  )
}

export default Index
