import React from 'react'
import {
  EuiMarkdownFormat,
  EuiTitle,
  EuiSpacer,
} from '@elastic/eui'
import { useParams } from 'react-router-dom'

function Viewer() {
  const contents = `
### Title
- detail
- detail
- detail
`

  const params = useParams()
  return (
    <div className="viewer-component">
      <div className="viewer-header">
        <EuiTitle size="l">
          <h1>{params.name}</h1>
        </EuiTitle>
      </div>
      <EuiTitle size="m">
        <h3># Dentralization</h3>
      </EuiTitle>
      <EuiMarkdownFormat>
        {contents}
      </EuiMarkdownFormat>
      <EuiSpacer/>
      <EuiTitle size="m">
        <h3># Performance</h3>
      </EuiTitle>
      <EuiMarkdownFormat>
        {contents}
      </EuiMarkdownFormat>
      <EuiSpacer/>
      <EuiTitle size="m">
        <h3># Security</h3>
      </EuiTitle>
      <EuiMarkdownFormat>
        {contents}
      </EuiMarkdownFormat>
      <EuiSpacer/>
      <EuiTitle size="m">
        <h3># Scalability</h3>
      </EuiTitle>
      <EuiMarkdownFormat>
        {contents}
      </EuiMarkdownFormat>
      <EuiSpacer/>
    </div>
  )
}

export default Viewer
