import React from "react"
import Boton from "../Boton"

import Section from "../section/Section"

import "./contact.scss"

const Contact = () => {
  return (
    <Section>
      <p className="text-3xl sm:text-4xl md:text-5xl text-blue">
        Cotiza tu sistema solar y comienza <br className="hidden lg:block" />a
        contribuir con la naturaleza.
      </p>
      <form className="w-full text-black mt-8">
        <div className="sm:grid sm:grid-cols-2 sm:gap-12 ">
          <div className="flex items-center border-b border-teal-500 py-2 mt-4 sm:mt-0">
            <input
              className="appearance-none bg-transparent border-none w-full mr-3 py-1 px-2 leading-tight focus:outline-none"
              type="text"
              placeholder="Nombre"
              aria-label="Nombre"
              name="name"
            />
          </div>
          <div className="flex items-center border-b border-teal-500 py-2 mt-4 sm:mt-0">
            <input
              className="appearance-none bg-transparent border-none w-full mr-3 py-1 px-2 leading-tight focus:outline-none"
              type="mail"
              placeholder="Email"
              aria-label="Email"
              name="email"
            />
          </div>
        </div>
        <div className="sm:grid sm:grid-cols-2 sm:gap-12 sm:mt-8 ">
          <div className="flex items-center border-b border-teal-500 py-2 mt-4 sm:mt-0">
            <input
              className="appearance-none bg-transparent border-none w-full mr-3 py-1 px-2 leading-tight focus:outline-none"
              type="tel"
              placeholder="Teléfono"
              aria-label="Telefono"
              name="phone"
            />
          </div>
          <div className="flex items-center border-b border-teal-500 py-2 mt-4 sm:mt-0">
            <div className="appearance-none bg-transparent border-none w-full mr-3 py-1 px-2 leading-tight focus:outline-none">
              <span
                contenteditable="true"
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
          <Boton>Enviar</Boton>
        </div>
      </form>
    </Section>
  )
}

export default Contact
