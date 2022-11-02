export const TrBody = ({ winery, letter }) => {
  const randomValues = []
  const randomTopValues = []

  function getRandom (val) {
    const randomValue = Math.floor(Math.random() * (25 - val)) + 1
    const newRandom = Math.floor(Math.random() * randomValue)
    randomValues.push(newRandom)
    return newRandom
  }

  function getRandomTop (val) {
    const randomValue = Math.floor(Math.random() * (50 - val)) + 1
    const newRandom = Math.floor(Math.random() * randomValue)
    randomTopValues.push(newRandom)
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
          letter.map((x, index) =>
            <td key={index} className='number-td'>
              <input id='input-top' type='number' defaultValue={getRandomTop(x)} placeholder='0' min='0' />
              <input type='number' defaultValue={getRandom(x)} placeholder='1' min='0' />
            </td>
          )
        }
        <td className='total-winery'>
          <input type='number' defaultValue={getTotal(randomValues)} placeholder='1' min='0' />
        </td>
      </tr>
    </>
  )
}
