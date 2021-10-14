import React from "react"
import Section from "../components/section/Section"

import "./sectiona.scss"

const SectionA = () => {

  return (
    <Section>
      <div className="sun h-80 w-80 sm:h-96 sm:w-96"></div>
      <p className="mt-8 text-center text-3xl">
        Energía solar accesible para todos.
      </p>
    </Section>
  )
}

export default SectionA
