import React from "react"
import Boton from "../components/Boton"

const SectionD = () => {
  return (
    <>
      <div className="sm:grid sm:grid-cols-3 sm:gap-12 mt-8 mb-8 sm:mt-16 sm:mb-16 md:mt-20 md:mb-20 lg:mt-24 lg:mb-24">
        <div className="text-center m-4 sm:m-0">
          <div className="rounded-full w-36 h-36 bg-pinkbrand m-auto"></div>
          <p className="font-bold text-xl mt-4">Residencial</p>
          <p className="text-base font-thin mt-4 ">
            Casa de campo
            <br /> Capacidad: 3.96 kWh <br />
            Se evitó la emisión de 3 tCO2 <br />
            El recibo de luz disminuyó un 35%
          </p>
        </div>
        <div className="text-center m-4 sm:m-0">
          <div className="rounded-full w-36 h-36 bg-pinkbrand m-auto"></div>
          <p className="font-bold text-xl mt-4">Comercial</p>
          <p className="text-base font-thin mt-4">
            Oficinas
            <br />
            Capacidad: 39 kWp
            <br />
            Se evitó la emisión de 29.5 tCO2
            <br />
            El recibo de luz disminuyó un 35%
          </p>
        </div>
        <div className="text-center m-4 sm:m-0">
          <div className="rounded-full w-36 h-36 bg-pinkbrand m-auto"></div>
          <p className="font-bold text-xl mt-4">Industrial</p>
          <p className="text-base font-thin mt-4">
            Supermercado
            <br />
            Capacidad: 369 kWp
            <br />
            Se evitó la emisión de 295.9 tCO2
            <br />
            El recibo de luz disminuyó un 35%
          </p>
        </div>
      </div>
      <div className="flex justify-center">
        <p
          className="inline-flex text-left font-light text-2xl md:text-3xl"
          data-sal="slide-up"
          data-sal-delay="300"
          data-sal-duration="1000"
        >
          Utilizar energía solar contribuye a cuidar el planeta.
        </p>
      </div>
      <div className="text-center mt-6 mb-4">
        <Boton target="/contacto" direction="left">
          Contáctanos
        </Boton>
      </div>
    </>
  )
}

export default SectionD
