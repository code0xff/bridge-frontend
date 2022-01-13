import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Index } from '../Index'
import { Evaluation } from '../Evaluation'
import '@elastic/eui/dist/eui_theme_dark.json'
import '@elastic/eui/dist/eui_theme_light.json'
import { EuiProvider } from '@elastic/eui';

function App() {
  return (
    <EuiProvider colorMode="light">
      <div className="app-component">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} exact/>
            <Route path="/evaluation" element={<Evaluation />} />
          </Routes>
        </BrowserRouter>
      </div>
    </EuiProvider>
  )
}

export default App
