import { History } from './Components/History'
import './App.css'
import { Routes, Route, useParams } from 'react-router-dom'
import { ModelView } from './Components/ModelView'

function App () {
  const Model = () => {
    const { data } = useParams()

    return <ModelView data={data} />
  }

  return (
    <main className='App'>
      <Routes>
        <Route path='/' element={<History />} />
        <Route path='/ModelView/:data' element={<Model />} />
        <Route path='*' element={<h1>Not found</h1>} />
      </Routes>
    </main>
  )
}

export default App
