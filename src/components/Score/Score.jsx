import React from 'react'
import '@elastic/eui/dist/eui_theme_light.css'
import {
  EuiFlexGroup, 
  EuiFlexItem,
  EuiButton,
} from '@elastic/eui'

function Score({value, setValue}) {
  return (
    <div className="score-compoenent">
      <EuiFlexGroup justifyContent="spaceBetween" direction="row">
        <EuiFlexItem>
          <EuiButton fill={value === 1 ? true : false} onClick={() => setValue(1)}>1</EuiButton>
        </EuiFlexItem>
        <EuiFlexItem>
          <EuiButton fill={value === 2 ? true : false} onClick={() => setValue(2)}>2</EuiButton>
        </EuiFlexItem>
        <EuiFlexItem>
          <EuiButton fill={value === 3 ? true : false} onClick={() => setValue(3)}>3</EuiButton>
        </EuiFlexItem>
        <EuiFlexItem>
          <EuiButton fill={value === 4 ? true : false} onClick={() => setValue(4)}>4</EuiButton>
        </EuiFlexItem>
        <EuiFlexItem>
          <EuiButton fill={value === 5 ? true : false} onClick={() => setValue(5)}>5</EuiButton>
        </EuiFlexItem>
      </EuiFlexGroup>
    </div>
  )
}

export default Score
