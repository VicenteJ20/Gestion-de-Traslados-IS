import '../Styles/ModelView.css'
import { useState } from 'react'
import { NavModel } from './NavModel'
import { TrBody } from './TrBody'

const factoryArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']
const showFactories = []
const wineryArray = []
const wineryHeader = []
const rowInputs = []

const URLData = String(window.location.href).split('').reverse().join('')
const row = URLData[0]
const column = URLData[2]

for (let i = 0; i < column; i++) {
  showFactories.push(factoryArray[i])
  rowInputs.push(i)
}

for (let j = 0; j < row; j++) {
  wineryArray.push(rowInputs)
  wineryHeader.push(j + 1)
}

showFactories.push(' ')
showFactories.unshift(' ')

export const ModelView = () => {
  let cont = 1
  let contResult = 1
  const [active, setActive] = useState(false)

  const setupMenu = () => {
    setActive(!active)
  }

  return (
    <>
      <NavModel active={active} setupMenu={setupMenu} />
      <div className={`ModelView ${active ? '' : 'move-child'}`}>
        <table className='table-auto'>
          <thead>
            <tr>
              {
                showFactories.map((x, index) => <th key={index} style={x === ' ' ? { color: 'transparent', backgroundColor: 'var(--dark-blue)' } : {}}>{x}</th>)
              }
            </tr>
          </thead>
          <tbody>
            {
              wineryArray.map((x, index) => <TrBody key={index} winery={cont++} letter={x} />)
            }
            <tr className='results-column'>
              <th scope='row' style={{ backgroundColor: 'var(--dark-blue)' }} />
              {
                wineryArray.map((x, index) => <td key={index} className='result-card'>{contResult++}</td>)
              }
            </tr>
          </tbody>
        </table>
      </div>
    </>
  )
}
