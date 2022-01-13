import React from 'react'
import '@elastic/eui/dist/eui_theme_light.css'
import { 
  EuiMarkdownEditor, 
  getDefaultEuiMarkdownPlugins,
} from '@elastic/eui'

function Editor({value, setValue}) {
  const {
    parsingPlugins,
    processingPlugins,
    uiPlugins,
  } = getDefaultEuiMarkdownPlugins({ exclude: ['tooltip'] })

  return (
    <div className="editor-compoenent">
      <EuiMarkdownEditor
        aria-label="EUI markdown editor with no default plugins demo"
        value={value}
        onChange={setValue}
        parsingPluginList={parsingPlugins}
        processingPluginList={processingPlugins}
        uiPlugins={uiPlugins}
      />
    </div>
  )
}

export default Editor
