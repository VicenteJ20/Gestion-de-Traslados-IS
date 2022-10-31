import '../Styles/ModelView.css'
import { useState } from 'react'
import { NavModel } from './NavModel'

const TrBody = ({ winery, letter }) => {
  function getRandom (val) {
    const randomValue = Math.floor(Math.random() * (25 - val)) + 1
    return Math.floor(Math.random() * randomValue)
  }
  return (
    <tr>
      <th scope='row'>{winery}</th>
      {
        letter.map(x => <td key={x}>{getRandom(x)}</td>)
      }
    </tr>
  )
}

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

showFactories.push('END')
showFactories.unshift('Bodega')

export const ModelView = () => {
  const [active, setActive] = useState(false)

  const setupMenu = () => {
    setActive(!active)
  }

  return (
    <>
      <NavModel active={active} setupMenu={setupMenu} />
      <div className={`ModelView ${active ? '' : 'move-child'}`}>
        <table className='Table-auto'>
          <thead>
            <tr>
              {
                showFactories.map(x => <th key={x}>{x}</th>)
              }
            </tr>
          </thead>
          <tbody>
            {
              wineryArray.map(x => <TrBody key={x} winery={wineryHeader[wineryArray.indexOf(x)]} letter={x} />)
            }
            {
              console.table(wineryArray)
            }
            {
              console.table(wineryHeader)
            }
          </tbody>
        </table>
      </div>
    </>
  )
}
