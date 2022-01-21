import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Index } from '../Index'
import { Evaluation } from '../Evaluation'
import { Xchain } from '../Xchain'
import { Viewer } from '../Viewer'
import { Creator } from '../Creator'
import { User } from '../User'
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
            <Route path="evaluation" element={<Evaluation />}>
              <Route path=":name" element={<Evaluation />} />
            </Route>
            <Route path="viewer" element={<Viewer />}>
              <Route path=":name" element={<Viewer />} />
            </Route>
            <Route path="creator" element={<Creator />}>
              <Route path=":name" element={<Creator />} />
            </Route>
            <Route path="user-review" element={<User />}>
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </EuiProvider>
  )
}

export default App
