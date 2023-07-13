'use client'

import { Form, Formik } from "formik"
import * as Yup from 'yup'
import TextFieldUI from "./TextFieldUI"
import CallToAction from "../Buttons/CallToAction"
import SelectUI from "./SelectUI"

const OrderForm = () => {
  const INITIAL_STATE = {
    name: '',
    lastName: '',
    phone: '',
    address: '',
    address2: '',
    email: '',
    city: '',
    numer: 0
  }
  const validationSchema = Yup.object().shape({
    name: Yup.string().required('El nombre es obligatorio'),
    address: Yup.string().required('La dirección es obligatoria'),
  })
  const handleSubmit = (values) => {
    console.log(values)
  }
  return ( 
    <>
      <div className="order__form">
        <Formik
          initialValues={INITIAL_STATE}
          validationSchema={validationSchema}
          onSubmit={(values)=>{
            handleSubmit(values)
          }}
        >
          <Form>
            <div className="form">
              <div className="row">
                <TextFieldUI placeholder="Nombres" name={'name'}/>
                <TextFieldUI placeholder="Apellidos" name={'lastName'}/>
              </div>
              <div className="row">
                <TextFieldUI placeholder="Correo Electrónico" name={'email'}/>
                <TextFieldUI placeholder="Teléfono" name={'phone'}/>
              </div>
              <div className="row single">
                <p>Dirección:</p>
                <TextFieldUI placeholder="Dirección Ej: Calle 27 d sur # 27 c 51" name={'address'}/>
              </div>
              <div className="row single">
                <TextFieldUI placeholder="Indicaciones: Ej: Río de Oro Torre 10 Apto 1201" name={'address2'}/>
              </div>
              <div className="row">
                <SelectUI id="city" name={'city'} label={'Ciudad'} options={['Ibagué', 'Bogotá (Muy pronto)']}/>
                <TextFieldUI  type="number" name='number' placeholder="¿Cuántos tamales?" />
              </div>
              <div style={{
                marginTop: '2rem'
              }} className="row single">
                <CallToAction style={{
                  width: '100%'
                }}>Enviar</CallToAction>
              </div>
            </div>
          </Form>
        </Formik>
      </div>
      <style jsx>{`
        .order__form {
          margin: 2rem 0;
          border: 1px solid var(--white);
          border-radius: 10px;
          padding: 1rem;
        }
          .form {
            width: 100%;
          }
          .form .row {
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-gap: 1rem;
            margin-top: 1rem;
          }
          @media (max-width: 500px){
            .form .row {
              grid-template-columns: 1fr;
            }
          }
          .form .single {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
          }
          .form .single p {
            color: var(--white);
          }
      `}</style>
    </>
   )
}
 
export default OrderForm