import { useField } from 'formik'

export const Select = ({ label, ...props }) => {
  const [field, meta] = useField(props)

  return (
    <>
      <label className='label-form'>{label}</label>
      <select {...field} {...props} className={`optionform ${meta.touched && meta.error ? 'input-error' : ''}`} />
      {meta.touched && meta.error && <div className='error'>{meta.error}</div>}
    </>
  )
}
