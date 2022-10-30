import * as yup from 'yup'

export const formSchema = yup.object().shape({
  factory: yup.number('Debe ingresar un número').positive('Solo puede ingresar números positivos').integer('Solo puede ingresar números enteros').min(2, 'Como mínimo debe ingresar 2').max(8, 'Excedió el máximo soportado').required('Requerido'),
  winery: yup.number().positive().integer().min(2, 'Como mínimo debe ingresar 2').max(8, 'Excedió el máximo soportado').required('Requerido')
})
