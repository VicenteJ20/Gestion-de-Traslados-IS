import { FormFormik } from './Form'
import '../Styles/Navbar.css'
import { useState } from 'react'

export const NavModel = ({ active, setupMenu }) => {
  const [title, setTitle] = useState('Model 1')

  return (
    <>
      <section className={`Navbar ${active ? 'hide-nav' : ''}`}>
        <header className='title-header-nav'>
          <input className='title-input' value={title} onChange={(e) => setTitle(e.target.value)} placeholder='Título' />
        </header>
        <div className='restrictions-div'>
          <h3>Restricciones:</h3>
          <ul>
            <li>Debe ingresar como mínimo 2 fábricas y 2 bodegas.</li>
            <li>Se permite ingresar como máximo 8 fábricas y 8 bodegas.</li>
          </ul>
        </div>
        <div className='form-section'>
          <FormFormik />
        </div>
      </section>
    </>
  )
}
