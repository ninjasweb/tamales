'use client'

import { Form, Formik, useFormikContext } from "formik";
import * as Yup from "yup";
import TextFieldUI from "./TextFieldUI";
import CallToAction from "../Buttons/CallToAction";
import SelectUI from "./SelectUI";
import Counter from "./Counter";
import { useState } from "react";

const OrderForm = () => {
  const [errorMessage, seterrorMessage] = useState()
  const [displayError, setDisplayError] = useState()
  const INITIAL_STATE = {
    name: "",
    lastName: "",
    phone: "",
    address: "",
    address2: "",
    email: "",
    city: "",
    neighborhood: "",
    selectedCount: {
      tradicional: 0,
      picante: 0,
      vegetariano: 0,
    },
  }

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("El nombre es obligatorio"),
    address: Yup.string().required("La dirección es obligatoria"),
    phone: Yup.string()
      .matches(
        /^[0-9]{7,15}$/,
        "El teléfono debe contener solo números y tener entre 7 y 15 dígitos"
      )
      .required("El teléfono es obligatorio"),
    email: Yup.string()
      .email("Ingresa un correo electrónico válido")
      .required("El correo electrónico es obligatorio"),
    city: Yup.string().required("La ciudad es obligatoria"),
    neighborhood: Yup.string().required("El barrio es obligatorio"),
  })

  const handleSubmit = (values) => {
    console.log(values)
    setDisplayError(false)
  }

  const OrderFormInner = () => {
    const { values } = useFormikContext()
    return (
      <>
        <Form>
          <div className="form">
            <p style={{color: 'var(--white)'}}>Información de contacto:</p>
            <div className="row">
              <TextFieldUI placeholder="Nombres" name="name" />
              <TextFieldUI placeholder="Apellidos" name="lastName" />
            </div>
            <div className="row">
              <TextFieldUI placeholder="Correo Electrónico" name="email" />
              <TextFieldUI placeholder="Teléfono" name="phone" />
            </div>
            <div className="row single">
              <p>Dirección de entrega:</p>
              <TextFieldUI
                placeholder="Dirección Ej: Calle 27 d sur # 27 c 51"
                name="address"
              />
            </div>
            <div className="row single">
              <TextFieldUI
                placeholder="Indicaciones: Ej: Río de Oro Torre 10 Apto 1201"
                name="address2"
              />
            </div>
            <div className="row">
              <SelectUI
                id="city"
                name="city"
                label="Ciudad"
                options={["Ibagué", "Bogotá"]}
              />
              <TextFieldUI name="neighborhood" placeholder="Barrio" />
            </div>
            <div className="row single">
              <p>¿Qué quieres pedir?</p>
              <Counter productName="Tamal Tradicional" price={'$8,000'} type="tradicional" />
              <Counter productName="Tamal Picante" price={'$8,500'} type="picante" />
              <Counter productName="Tamal Vegetariano" price={'$9,000'} type="vegetariano" />
            </div>
            {/* Resumen Pedido */}
            <div className="row single">
              <p style={{ color: "var(--yellow)", fontWeight: "bold" }}>
                TU PEDIDO:
              </p>
              <p>Tamal Tradicional: {values.selectedCount.tradicional}</p>
              <p>Tamal Picante: {values.selectedCount.picante}</p>
              <p>Tamal Vegetariano: {values.selectedCount.vegetariano}</p>
            </div>
            {/* Total Pedido */}
            <div className="row single total">
              <p style={{fontWeight: 'bold'}}>TOTAL:</p>
              <p> Subtotal: ${ (values.selectedCount.tradicional * 8000) + (values.selectedCount.picante * 8500) + (values.selectedCount.vegetariano * 9000)}</p>
              <p>Domicilio: {values.city === 'Ibagué' ? '$5,000' : values.city === 'Bogotá' ? '$8,000' : '(Selecciona una ciudad)'}</p>
              <p>Total a pagar: ${ (values.selectedCount.tradicional * 8000 + values.selectedCount.picante * 8500 + values.selectedCount.vegetariano * 9000) + (values.city === 'Ibagué' ? 5000 : values.city === 'Bogotá' ? 8000 : 0)}</p>
            </div>
            {/* SEND */}
            <div
              style={{
                marginTop: "2rem",
              }}
              className="row single"
            >
              <CallToAction
                style={{
                  width: "100%",
                }}
                type="submit"
              >
                Hacer Pedido
              </CallToAction>
            </div>
            {/* Error Message */}
            {displayError ? <p style={{
              color: '#d32f2f',
              textAlign: 'center',
              marginTop: '1rem'
            }}>{errorMessage}</p> : '' }
            <div className="advise">
              <p>Entregas: Viernes-Sábado-Domingo. de 8:00 am - 1:00 pm</p>
            </div>
          </div>
        </Form>
        <style jsx>{`
        .form {
          width: 100%;
        }
        .form .row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-gap: 1rem;
          margin-top: 1rem;
        }
        @media (max-width: 500px) {
          .form .row {
            grid-template-columns: 1fr;
          }
        }
        .form .row p {
          color: var(--white);
        }
        .form .single {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }
        .form .single p {
          color: var(--white);
        }
        .total {
          border-top: 1px solid var(--white);
          padding-top: 10px;
        }
        .advise p {
          text-align: center;
          margin: 1rem 0;
          color: var(--white);
        }
        `}</style>
      </>
      
    );
  };

  return (
    <>
      <div className="order__form">
        <Formik
          initialValues={INITIAL_STATE}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
          validate={values =>{
            const errors = {}
            if(!values.name || !values.address || !values.phone || !values.email || !values.city){
              errors.message = "Uno o más campos tienen un error o falta información"
              seterrorMessage(errors.message)
              setDisplayError(true)
              return errors
            }
          }}
        >
          <OrderFormInner />
        </Formik>
      </div>
      <style jsx>{`
        .order__form {
          margin: 2rem 0;
          border: 1px solid var(--white);
          border-radius: 10px;
          padding: 1rem;
        }
      `}</style>
    </>
  );
};

export default OrderForm;
