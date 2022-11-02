import * as yup from 'yup'

export const formSchema = yup.object().shape({
  method: yup.string().oneOf(['Vogel', 'Mín. Coste', 'NWC']).required('Requerido'),
  asign: yup.number().positive().integer().min(1, 'El valor mínimo permitido es 1').required('Requerido'),
  costo: yup.number('Solo puede ingresar números').positive('El valor debe ser positivo').integer('Debe ingresar el valor entero')
})
