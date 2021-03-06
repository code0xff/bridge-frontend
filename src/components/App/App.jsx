import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Index } from '../Index'
import { Evaluation } from '../Evaluation'
import { Xchain } from '../Xchain'
import { Viewer } from '../Viewer'
import { Creator } from '../Creator'
import { Feedback } from '../Feedback'
import { FeedbackDetailViewer } from "../FeedbackDetailViewer"
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
            <Route path="/evaluation/id/:id" element={<Evaluation />} />
            <Route path="/viewer/id/:id" element={<Viewer />} />
            <Route path="creator" element={<Creator />} />
            <Route path="/feedback/name/:name/id/:id" element={<Feedback />} />
            <Route path="/feedback/detail/id/:id/type/:type" element={<FeedbackDetailViewer />} />
          </Routes>
        </BrowserRouter>
      </div>
    </EuiProvider>
  )
}

export default App
