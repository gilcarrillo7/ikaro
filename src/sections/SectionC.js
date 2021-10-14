import React from "react"
import { Link } from "gatsby"

import Boton from "../components/Boton"

const SectionC = () => {
  return (
    <>
      <div className="flex justify-center">
        <p className="inline-flex text-left font-light text-3xl sm:text-4xl md:text-5xl">
          El mundo necesita de manera urgente
          <br className="hidden lg:block" /> que las actividades humanas sean{" "}
          <br className="hidden lg:block" />
          descarbonizadas.
        </p>
      </div>
      <div className="sm:grid sm:grid-cols-2 sm:gap-12 mt-10 sm:mt-20">
        <div className="text-center">
          <p className="text-lg font-thin mt-4 text-left">
            El mundo necesita de manera urgente que las actividades humanas sean
            descarbonizadas. El consumo de energía es de las actividades más
            contaminantes para el planeta, el uso de energía limpia y rentable
            disminuye tu huella de carbono.
          </p>
          <p className="text-lg font-thin mt-4 text-left">
            Más de 20 años de experiencia, más de 100 sistemas solares
            instalados y un equipo multidisciplinario nos respaldan.
          </p>
        </div>
        <div className="flex justify-center items-center">
          <div className="mt-10 mb-10">
            <Boton target="/conocenos">Conócenos</Boton>
          </div>
        </div>
      </div>
    </>
  )
}

export default SectionC
