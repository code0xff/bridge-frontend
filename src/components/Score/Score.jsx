import React from 'react'
import '@elastic/eui/dist/eui_theme_light.css'
import {
  EuiFlexGroup, 
  EuiButtonIcon,
} from '@elastic/eui'

const one = "data:image/svg+xml;base64,PHN2ZyBpZD0iaWNvbiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMzIgMzIiPjxkZWZzPjxzdHlsZT4uY2xzLTF7ZmlsbDojZmZmO30uY2xzLTJ7ZmlsbDpub25lO308L3N0eWxlPjwvZGVmcz48dGl0bGU+bnVtYmVyLS0xPC90aXRsZT48cGF0aCBkPSJNMTYsMTBWMjJoMFYxMG0xLTFIMTJ2MmgzVjIxSDEydjJoOFYyMUgxN1Y5WiIvPjxyZWN0IGlkPSJfVHJhbnNwYXJlbnRfUmVjdGFuZ2xlXyIgZGF0YS1uYW1lPSImbHQ7VHJhbnNwYXJlbnQgUmVjdGFuZ2xlJmd0OyIgY2xhc3M9ImNscy0yIiB3aWR0aD0iMzIiIGhlaWdodD0iMzIiLz48L3N2Zz4K"
const two = "data:image/svg+xml;base64,PHN2ZyBpZD0iaWNvbiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMzIgMzIiPjxkZWZzPjxzdHlsZT4uY2xzLTF7ZmlsbDpub25lO308L3N0eWxlPjwvZGVmcz48dGl0bGU+bnVtYmVyLS0yPC90aXRsZT48cGF0aCBkPSJNMjAsMjNIMTJWMTdhMiwyLDAsMCwxLDItMmg0VjExSDEyVjloNmEyLDIsMCwwLDEsMiwydjRhMiwyLDAsMCwxLTIsMkgxNHY0aDZaIi8+PHJlY3QgaWQ9Il9UcmFuc3BhcmVudF9SZWN0YW5nbGVfIiBkYXRhLW5hbWU9IiZsdDtUcmFuc3BhcmVudCBSZWN0YW5nbGUmZ3Q7IiBjbGFzcz0iY2xzLTEiIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIvPjwvc3ZnPg=="
const three = "data:image/svg+xml;base64,PHN2ZyBpZD0iaWNvbiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMzIgMzIiPjxkZWZzPjxzdHlsZT4uY2xzLTF7ZmlsbDpub25lO308L3N0eWxlPjwvZGVmcz48dGl0bGU+bnVtYmVyLS0zPC90aXRsZT48cGF0aCBkPSJNMTgsOUgxMnYyaDZ2NEgxNHYyaDR2NEgxMnYyaDZhMiwyLDAsMCwwLDItMlYxMUEyLDIsMCwwLDAsMTgsOVoiLz48cmVjdCBpZD0iX1RyYW5zcGFyZW50X1JlY3RhbmdsZV8iIGRhdGEtbmFtZT0iJmx0O1RyYW5zcGFyZW50IFJlY3RhbmdsZSZndDsiIGNsYXNzPSJjbHMtMSIgd2lkdGg9IjMyIiBoZWlnaHQ9IjMyIi8+PC9zdmc+"
const four = "data:image/svg+xml;base64,PHN2ZyBpZD0iaWNvbiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMzIgMzIiPjxkZWZzPjxzdHlsZT4uY2xzLTF7ZmlsbDojZmZmO30uY2xzLTJ7ZmlsbDpub25lO308L3N0eWxlPjwvZGVmcz48dGl0bGU+bnVtYmVyLS00PC90aXRsZT48cGF0aCBkPSJNMTgsMTB2OGgwVjEwbTEtMUgxN3Y4SDE0VjlIMTJWMTloNXY0aDJWMTloMVYxN0gxOVY5WiIvPjxyZWN0IGlkPSJfVHJhbnNwYXJlbnRfUmVjdGFuZ2xlXyIgZGF0YS1uYW1lPSImbHQ7VHJhbnNwYXJlbnQgUmVjdGFuZ2xlJmd0OyIgY2xhc3M9ImNscy0yIiB3aWR0aD0iMzIiIGhlaWdodD0iMzIiLz48L3N2Zz4K"
const five = "data:image/svg+xml;base64,PHN2ZyBpZD0iaWNvbiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMzIgMzIiPjxkZWZzPjxzdHlsZT4uY2xzLTF7ZmlsbDpub25lO308L3N0eWxlPjwvZGVmcz48dGl0bGU+bnVtYmVyLS01PC90aXRsZT48cGF0aCBkPSJNMTgsMjNIMTJWMjFoNlYxN0gxMlY5aDh2MkgxNHY0aDRhMiwyLDAsMCwxLDIsMnY0QTIsMiwwLDAsMSwxOCwyM1oiLz48cmVjdCBpZD0iX1RyYW5zcGFyZW50X1JlY3RhbmdsZV8iIGRhdGEtbmFtZT0iJmx0O1RyYW5zcGFyZW50IFJlY3RhbmdsZSZndDsiIGNsYXNzPSJjbHMtMSIgd2lkdGg9IjMyIiBoZWlnaHQ9IjMyIi8+PC9zdmc+"


function Score({value, setValue}) {
  return (
    <div className="score-compoenent">
      <EuiFlexGroup justifyContent="spaceBetween">
          <EuiButtonIcon
            display={value === 1 ? "fill" : "base"}
            color="primary"
            iconType={one}
            size="m"
            onClick={() => setValue(1)}
          />
        <EuiButtonIcon
            display={value === 2 ? "fill" : "base"}
            color="primary"
            iconType={two}
            size="m"
            onClick={() => setValue(2)}
          />
        <EuiButtonIcon
            display={value === 3 ? "fill" : "base"}
            color="primary"
            iconType={three}
            size="m"
            onClick={() => setValue(3)}
          />
        <EuiButtonIcon
            display={value === 4 ? "fill" : "base"}
            color="primary"
            iconType={four}
            size="m"
            onClick={() => setValue(4)}
          />
        <EuiButtonIcon
            display={value === 5 ? "fill" : "base"}
            color="primary"
            iconType={five}
            size="m"
            onClick={() => setValue(5)}
          />
      </EuiFlexGroup>
    </div>
  )
}

export default Score
