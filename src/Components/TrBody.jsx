export const TrBody = ({ winery, letter, position }) => {
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

  return (
    <>
      <tr>
        <th scope='row'>{winery++}</th>
        {
          letter.map(x => <td key={x}>{getRandom(x)}</td>)
        }
        <td className='total-winery'>{getTotal(randomValues)}</td>
      </tr>
    </>
  )
}
