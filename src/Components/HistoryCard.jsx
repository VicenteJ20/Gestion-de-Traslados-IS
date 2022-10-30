import '../Styles/HistoryCard.css'

export const HistoryCard = ({ id, method, asign, cost }) => {
  return (
    <div className='HistoryCard'>
      <header>
        <h2>ID Resultado {id}</h2>
      </header>
      <div className='content'>
        <p>Metodo: <span>{method}</span></p>
        <p>Asignación: <span>{asign}</span> </p>
        <p>Costo: <span>{cost}</span></p>
      </div>
    </div>
  )
}
