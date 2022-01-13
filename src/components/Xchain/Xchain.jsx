import React from 'react'
import '@elastic/eui/dist/eui_theme_light.json'
import {
  EuiCard,
  EuiFlexGroup,
  EuiFlexItem,
} from '@elastic/eui'

function Xchain() {
  return (
    <div className="xchain-component">
      <EuiFlexGroup gutterSize="l">
        <EuiFlexItem>
          <EuiCard
            title={"Polkadot"}
            description="Xchain Detail Part"
            onClick={() => {}}
          />
        </EuiFlexItem>
        <EuiFlexItem>
          <EuiCard
            title={"Cosmos"}
            description="Xchain Detail Part"
            onClick={() => {}}
          />
        </EuiFlexItem>
        <EuiFlexItem>
          <EuiCard
            title={"Multichain"}
            description="Xchain Detail Part"
            onClick={() => {}}
          />
        </EuiFlexItem>
        <EuiFlexItem>
          <EuiCard
            title={"Polygon"}
            description="Xchain Detail Part"
            onClick={() => {}}
          />
        </EuiFlexItem>
      </EuiFlexGroup>
      <EuiFlexGroup gutterSize="l">
        <EuiFlexItem>
          <EuiCard
            title={"Comming Soon"}
            isDisabled={true}
          />
        </EuiFlexItem>
        <EuiFlexItem>
          <EuiCard
            title={"Comming Soon"}
            isDisabled={true}
          />
        </EuiFlexItem>
        <EuiFlexItem>
          <EuiCard
            title={"Comming Soon"}
            isDisabled={true}
          />
        </EuiFlexItem>
        <EuiFlexItem>
          <EuiCard
            title={"Comming Soon"}
            isDisabled={true}
          />
        </EuiFlexItem>
      </EuiFlexGroup>
    </div>
  )
}

export default Xchain