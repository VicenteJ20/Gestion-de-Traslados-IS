import '../Styles/History.css'
import historyData from '../JSON/history.json'
import { HistoryCard } from './HistoryCard'
import { Navbar } from './Navbar'

export const History = ({ active, setupMenu }) => {
  return (
    <>
      <Navbar active={active} setupMenu={setupMenu} />
      <div className='History'>
        <header className='history-header'>
          <h2>Modelos creados previamente</h2>
          <p>Para acceder a un modelo haga clic sobre el modelo escogido.</p>
        </header>
        <div className='grid-history-cards'>
          {
          historyData.map(data => <HistoryCard key={data.id} id={data.id} method={data.method} asign={data.asign} cost={data.cost} />)
        }
        </div>
      </div>
    </>
  )
}
