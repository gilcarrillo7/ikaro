import React from "react"

import Boton from "../components/Boton"

const SectionB = () => {
  return (
    <>
      <div className="flex justify-center">
        <p className="inline-flex text-left font-light text-3xl sm:text-4xl md:text-5xl">
          Las energías limpias son un medio
          <br className="hidden lg:block" /> para contribuir con la naturaleza.
        </p>
      </div>
      <div className="sm:grid sm:grid-cols-3 sm:gap-12 mt-8 mb-8 sm:mt-16 sm:mb-16 md:mt-20 md:mb-20 lg:mt-24 lg:mb-24">
        <div className="text-center m-4 sm:m-0">
          <p className="font-bold text-xl">Transforma</p>
          <p className="text-base font-thin mt-4 text-left">
            El efecto fotovoltaico es por el cual la radiación solar se
            convierte en energía eléctrica, para poder ser aprovechada en
            nuestros hogares, comercio o industria.
          </p>
        </div>
        <div className="text-center m-4 sm:m-0">
          <p className="font-bold text-xl">Ahorra</p>
          <p className="text-base font-thin mt-4 text-left">
            Además de contribuir con el cuidado del planeta al reducir las
            emisiones de CO2 por la generación de energía, tu tarifa eléctrica
            puede verse reducida hasta en un 96%.
          </p>
        </div>
        <div className="text-center m-4 sm:m-0">
          <p className="font-bold text-xl">Almacena</p>
          <p className="text-base font-thin mt-4 text-left">
            La energía se almacena en las baterías y en caso de un apagón la
            tendrás disponible en cualquier momento. (Las baterias son
            opcionales pero no son necesarias).
          </p>
        </div>
      </div>
      <p className="font-bold text-2xl text-center">
        Comienza a utilizar energía solar y contribuye a cuidar el planeta.
      </p>
      <div className="text-center mt-6 mb-4">
        <Boton contact={true}>Contáctanos</Boton>
      </div>
    </>
  )
}

export default SectionB
