import '../Styles/Navbar.css'
import { useState } from 'react'
import { FaBars } from 'react-icons/fa'
import { FormFormik1 } from './FormModel'

export const NavModel = ({ active, setupMenu }) => {
  const [title, setTitle] = useState('Model 1')

  return (
    <>
      <button className='btn-toggle' onClick={setupMenu}>
        <FaBars />
      </button>
      <section className={`Navbar ${active ? 'hide-nav' : ''}`}>
        <header className='title-header-nav'>
          <input className='title-input' value={title} onChange={(e) => setTitle(e.target.value)} placeholder='Título' />
        </header>
        <div className='form-section'>
          <FormFormik1 />
        </div>
      </section>
    </>
  )
}
