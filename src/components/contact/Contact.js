import React, { useRef } from "react"
import { Formik, Form, Field } from "formik"
import * as Yup from "yup"

import Boton from "../Boton"

import Section from "../section/Section"

import "./contact.scss"

const Contact = () => {
  const comment = useRef(null)
  const ContactSchema = Yup.object().shape({
    name: Yup.string().required("Ingresa tu nombre"),
    email: Yup.string().email("Email incorrecto").required("Ingresa tu email"),
  })

  return (
    <Section>
      <p
        className="text-3xl sm:text-4xl md:text-5xl text-blue"
      >
        Cotiza tu sistema solar y comienza <br className="hidden lg:block" />a
        contribuir con la naturaleza.
      </p>
      <Formik
        initialValues={{
          name: "",
          email: "",
          phone: "",
        }}
        validationSchema={ContactSchema}
        onSubmit={values => {
          // same shape as initial values
          console.log(values)
          console.log(comment.current.innerText)
        }}
      >
        {({ errors, touched }) => (
          <Form className="w-full text-black mt-8">
            <div className="sm:grid sm:grid-cols-2 sm:gap-12 ">
              <div className="flex flex-col items-center py-2 mt-4 sm:mt-0">
                <Field
                  name="name"
                  className="appearance-none bg-transparent border-b border-teal-500 w-full mr-3 py-1 px-2 focus:outline-none"
                  type="text"
                  placeholder="Nombre"
                  aria-label="Nombre"
                />
                {errors.name && touched.name ? (
                  <div className="w-full text-sm text-red text-left">
                    {errors.name}
                  </div>
                ) : null}
              </div>
              <div className="flex flex-col items-center py-2 mt-4 sm:mt-0">
                <Field
                  name="email"
                  className="appearance-none bg-transparent border-b border-teal-500 w-full mr-3 py-1 px-2 focus:outline-none"
                  type="mail"
                  placeholder="Email"
                  aria-label="Email"
                />
                {errors.email && touched.email ? (
                  <div className="w-full text-sm text-red text-left">
                    {errors.email}
                  </div>
                ) : null}
              </div>
            </div>
            <div className="sm:grid sm:grid-cols-2 sm:gap-12 sm:mt-8 ">
              <div className="flex flex-col items-center py-2 mt-4 sm:mt-0">
                <Field
                  name="phone"
                  className="appearance-none bg-transparent border-b border-teal-500 w-full mr-3 py-1 px-2 focus:outline-none"
                  type="tel"
                  placeholder="Teléfono"
                  aria-label="Telefono"
                />
              </div>
              <div className="flex flex-col items-center py-2 mt-4 sm:mt-0">
                <div className="appearance-none bg-transparent border-b border-teal-500 w-full mr-3 py-1 px-2 focus:outline-none">
                  <span
                    ref={comment}
                    contentEditable="true"
                    className="outline-none"
                    placeholder="Comentarios"
                  ></span>
                </div>
                {/*
            <textarea
              className="appearance-none bg-transparent border-none w-full mr-3 py-1 px-2 leading-tight focus:outline-none"
              type="mail"
              placeholder="Comentarios"
              aria-label="Comentarios"
              name="comment"
            ></textarea>*/}
              </div>
            </div>
            <div className="mt-8">
              <Boton type="submit">Enviar</Boton>
            </div>
          </Form>
        )}
      </Formik>
    </Section>
  )
}

export default Contact
