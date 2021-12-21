import React from "react"

import Boton from "../components/Boton"

const SectionC = () => {
  return (
    <>
      <div className="flex justify-center">
        <p
          className="inline-flex text-left font-light text-3xl sm:text-4xl md:text-5xl"
          data-sal="slide-up"
          data-sal-delay="300"
          data-sal-duration="1000"
        >
          El mundo necesita de manera urgente
          <br className="hidden lg:block" /> que las actividades humanas sean{" "}
          <br className="hidden lg:block" />
          descarbonizadas.
        </p>
      </div>
      <div className="sm:grid sm:grid-cols-2 sm:gap-12 mt-10 sm:mt-20">
        <div className="text-center">
          <p className="text-lg font-thin mt-4 text-left">
            Somos amantes de la tecnología solar, vimos en los sistemas solares
            fotovoltaicos la oportunidad de aprovechar nuestros conocimientos
            para contribuir al cuidado del planeta. Razón que nos motiva a
            crecer y a convencer a nuestros clientes de que es una tecnología
            viable, rentable y limpia.
          </p>
          <p className="text-lg font-thin mt-4 text-left">
            Más de 20 años de experiencia, más de 100 sistemas solares
            instalados y un equipo multidisciplinario nos respaldan.
          </p>
        </div>
        <div className="flex justify-center items-center">
          <div className="mt-10 mb-10">
            <Boton target="/conocenos" direction="left">
              Conócenos
            </Boton>
          </div>
        </div>
      </div>
    </>
  )
}

export default SectionC
