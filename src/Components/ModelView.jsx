import '../Styles/ModelView.css'
import { NavModel } from './NavModel'

export const ModelView = ({ active }) => {
  return (
    <>
      <NavModel active={active} />
      <div className='ModelView'>
        hola
      </div>
    </>
  )
}
