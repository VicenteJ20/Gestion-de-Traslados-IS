import { History } from './Components/History'
import './App.css'
import { useState } from 'react'
import { Routes, Route, useParams } from 'react-router-dom'
import { FaBars } from 'react-icons/fa'
import { ModelView } from './Components/ModelView'

function App () {
  const [active, setActive] = useState(false)

  const setupMenu = () => {
    setActive(!active)
  }

  const Model = ({ active }) => {
    const { data } = useParams()

    return <ModelView data={data} active={active} />
  }

  return (
    <main className={`App ${active ? '' : 'active-nav'}`}>
      <button className='btn-toggle' onClick={setupMenu}>
        <FaBars />
      </button>
      <Routes>
        <Route path='/' element={<History active={active} />} />
        <Route path='/ModelView/:data' element={<Model active={active} />} />
        <Route path='*' element={<h1>Not found</h1>} />
      </Routes>
    </main>
  )
}

export default App
