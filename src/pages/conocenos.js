import React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"

import Boton from "../components/Boton"
import Section from "../components/section/Section"

const Conocenos = () => {
  return (
    <Layout>
      <Section>
        <div className="flex justify-center"></div>
        <div className="md:grid md:grid-cols-5 md:gap-8 mt-10 sm:mt-20">
          <div className="text-center col-span-3">
            <p className="text-left md:mt-12 font-light text-3xl sm:text-3xl md:text-4xl">
              Entre 2030 y 2050 la energía solar se volverá la fuente
              predominante de generación de energía.
            </p>
          </div>
          <div className="flex flex-col justify-center items-center col-span-2">
            <p className="text-base font-thin mt-4 text-left">
              Somos un grupo de jovenes emprendedores mexicanos envueltos en la
              industria solar desde hace más de 15 años. Nuestra motivación es
              aportar nuestros conocimientos en energías limpias por el bien del
              planeta y todos los seres que lo habitamos.
            </p>
            <p className="text-base font-thin mt-4 text-left">
              Cada sistema instalado ayuda a reducir la emisión de CO2. Cada
              sistema instalado contribuye a un desarrollo sostenible. <br />
              En nuestros tiempos libres nos involucramos en proyectos de
              regeneración de ecosistemas y habitat naturales locales.
            </p>

            <div className="mt-10 mb-10">
              <Boton contact={true}>Contáctanos</Boton>
            </div>
          </div>
        </div>
      </Section>
    </Layout>
  )
}

export default Conocenos
