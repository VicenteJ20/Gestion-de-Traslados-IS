import '../Styles/ModelView.css'
import { useState } from 'react'
import { NavModel } from './NavModel'

const allDataTD = []

const TrBody = ({ winery, letter }) => {
  const randomValues = []

  function getRandom (val) {
    const randomValue = Math.floor(Math.random() * (25 - val)) + 1
    const newRandom = Math.floor(Math.random() * randomValue)
    randomValues.push(newRandom)
    return newRandom
  }

  function getTotal (x) {
    const total = x.reduce((a, b) => a + b, 0)
    return total
  }

  allDataTD.push(randomValues)

  return (
    <tr>
      <th scope='row'>{winery++}</th>
      {
        letter.map(x => <td key={x}>{getRandom(x)}</td>)
      }
      <td className='total-winery'>{getTotal(randomValues)}</td>

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

showFactories.push('Fi')
showFactories.unshift('In')

export const ModelView = () => {
  let cont = 1
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
                showFactories.map(x => <th key={x} style={x === 'Fi' || x === 'In' ? { color: 'transparent', backgroundColor: 'var(--dark-blue)' } : {}}>{x}</th>)
              }
            </tr>
          </thead>
          <tbody>
            {
              wineryArray.map(x => <TrBody key={x} winery={cont++} letter={x} />)
            }
            <tr className='results-column'>
              <th scope='row'>0</th>
              {}
            </tr>
          </tbody>
        </table>
      </div>
    </>
  )
}
