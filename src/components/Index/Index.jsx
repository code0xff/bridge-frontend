import React from 'react'
import { Link } from 'react-router-dom'
import {
  EuiTitle,
  EuiButton,
} from '@elastic/eui';

function Index() {
  return (
    <div className="index-component">
      <EuiTitle size="l">
        <h1>
          Cross Chain Evaluation Platform
        </h1>
      </EuiTitle>
      
      <Link to="/evaluation">
        <EuiButton color="primary" fill>Go To Evaluation</EuiButton>
      </Link>
    </div>
  )
}

export default Index