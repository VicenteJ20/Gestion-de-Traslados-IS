import { Form, Formik } from 'formik'
import { formSchema } from '../Schemas/form'
import '../Styles/form.css'
import { Input } from './Input'

export const FormFormik = () => {
  const onSubmit = (values) => {
    window.location.assign(`/ModelView/${values.factory}+${values.winery}`)
  }
  return (
    <Formik
      initialValues={
        {
          factory: '',
          winery: ''
        }
      }
      validationSchema={formSchema}
      onSubmit={onSubmit}
    >
      {
      ({ isSubmitting }) => (
        <Form className='Form'>
          <div className='form-div factory-div'>
            <Input label='Número de fábricas' name='factory' type='number' placeholder='N° Fábricas' />
          </div>
          <div className='form-div winery-div'>
            <Input label='Número de bodegas' name='winery' type='number' placeholder='N° Bodegas' />
          </div>
          <div className='button-div'>
            <button className='btn submit-btn' disabled={isSubmitting} type='submit'>Generar modelo</button>
          </div>
          <div className='button-div'>
            <button className='btn random-btn' type='button'>Generar modelo aleatorio</button>
          </div>
        </Form>
      )
    }
    </Formik>
  )
}
