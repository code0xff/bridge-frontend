import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Index } from '../Index'
import { Evaluation } from '../Evaluation'
import { Xchain } from '../Xchain'
import { Viewer } from '../Viewer'
import { Creator } from '../Creator'
import { Feedback } from '../Feedback'
import '@elastic/eui/dist/eui_theme_light.json'
import { EuiProvider } from '@elastic/eui'

function App() {
  return (
    <EuiProvider colorMode="light">
      <div className="app-component">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} exact/>
            <Route path="xchain" element={<Xchain />} />
            <Route path="/evaluation/name/:name" element={<Evaluation />} />
            <Route path="/viewer/id/:xchainId" element={<Viewer />} />
            <Route path="creator" element={<Creator />} />
            <Route path="/feedback/name/:name/id/:id" element={<Feedback />} />
          </Routes>
        </BrowserRouter>
      </div>
    </EuiProvider>
  )
}

export default App
