import React from 'react';
import './App.css'
import MDEditor from '@uiw/react-md-editor'

function App() {
  const [value, setValue] = React.useState("**Hello world!!!**")

  return (
    <div className="App">
      <MDEditor
        value={value}
        onChange={setValue}
      />
    </div>
  );
}

export default App
