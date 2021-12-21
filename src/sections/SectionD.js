import React from "react"
import Boton from "../components/Boton"

import Comercial from "../images/comercial.png"
import Industrial from "../images/industrial.png"
import Residencial from "../images/residencial.png"

const SectionD = () => {
  return (
    <>
      <div className="min-h-screen text-white flex items-center justify-center relative flex-col">
        <div className="container">
          <div className="sm:grid sm:grid-cols-3 sm:gap-12 mt-8 mb-8 sm:mt-16 sm:mb-16 md:mt-20 md:mb-20 lg:mt-24 lg:mb-24">
            <div className="text-center m-4 sm:m-0">
              <img
                src={Residencial}
                alt="Residencial"
                className="rounded-full w-36 h-36 bg-pinkbrand m-auto"
                data-sal="zoom-out"
                data-sal-duration="1000"
              />
              <p className="font-bold text-xl mt-4">Residencial</p>
              <p className="text-base font-thin mt-4 ">
                Casa de campo
                <br />
                Capacidad: 3.96 kWh
                <br />
                Se evitó la emisión de 3 toneladas de CO2 al año, equivalente a
                1.5 hectáreas de bosque en un año.
                <br />
                El recibo de luz disminuyó un 99%
              </p>
            </div>
            <div className="text-center m-4 sm:m-0">
              <img
                src={Comercial}
                alt="Comercial"
                className="rounded-full w-36 h-36 bg-pinkbrand m-auto"
                data-sal="zoom-out"
                data-sal-duration="1000"
              />
              <p className="font-bold text-xl mt-4">Comercial</p>
              <p className="text-base font-thin mt-4">
                Oficinas <br />
                Capacidad: 39 kWp <br />
                Se evitó la emisión de 29.5 toneladas de CO2 al año, equivalente
                a 14.6 hectáreas de bosque en un año. <br />
                El recibo de luz disminuyó un 89%
              </p>
            </div>
            <div className="text-center m-4 sm:m-0">
              <img
                src={Industrial}
                alt="Industrial"
                className="rounded-full w-36 h-36 bg-pinkbrand m-auto"
                data-sal="zoom-out"
                data-sal-duration="1000"
              />
              <p className="font-bold text-xl mt-4">Industrial</p>
              <p className="text-base font-thin mt-4">
                Supermercado
                <br />
                Capacidad: 369 kWp
                <br />
                Se evitó la emisión de 295.9 toneladas de CO2 al año,
                equivalente a 144 hectáreas de bosque en un año.
                <br />
                El recibo de luz disminuyó un 25%
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
            <Boton target="contact">Contáctanos</Boton>
          </div>
        </div>
        <div className="mt-auto bg-white py-4 w-full text-blue flex justify-center">
          <div className="container">
            <div className="grid grid-cols-2">
              <p className="text-sm">© Ikaro 2021</p>
              <p className="text-sm text-right">
                Diseño y desarrollo por{" "}
                <a
                  href="https://www.trazovivo.com"
                  target="_blank"
                  className="font-display max-w-sm leading-tight"
                >
                  <span className="link link-underline link-underline-black ">
                    Trazo Vivo
                  </span>
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SectionD
