import { FormFormik } from './Form'
import '../Styles/Navbar.css'

export const Navbar = ({ active }) => {
  return (
    <>
      <section className={`Navbar ${active ? 'hide-nav' : ''}`}>
        <header className='title-header-nav'>
          <h1>Gestión de traslado de productos</h1>
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
