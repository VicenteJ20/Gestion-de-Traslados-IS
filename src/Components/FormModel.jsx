import { Form, Formik } from 'formik'
import { formSchema } from '../Schemas/formModel'
import '../Styles/form.css'
import { Input } from './Input'
import { Select } from './Select'

export const FormFormik1 = () => {
  return (
    <Formik
      initialValues={
        {
          factory: '',
          winery: ''
        }
      }
      validationSchema={formSchema}
    >
      {
      ({ isSubmitting }) => (
        <Form className='Form'>
          <div className='form-div factory-div'>
            <Select label='Método' name='method' placeholder='Seleccione un servicio'>
              <option value=''>Seleccione un método</option>
              <option value='Vogel'>Vogel</option>
              <option value='Mín. Coste'>Mín. Coste</option>
              <option value='NWC'>NWC</option>
            </Select>
          </div>
          <div className='form-div winery-div'>
            <Input label='Asignación' name='asign' type='number' placeholder='Asignación' />
          </div>
          <div className='form-div winery-div'>
            <Input label='Costo' name='costo' type='number' placeholder='Costo' />
          </div>
          <div className='button-div'>
            <button className='btn submit-btn' disabled={isSubmitting} type='submit'>Guardar y salir</button>
          </div>
          <div className='button-div'>
            <button className='btn random-btn' type='button'>Salir sin guardar</button>
          </div>
        </Form>
      )
    }
    </Formik>
  )
}
