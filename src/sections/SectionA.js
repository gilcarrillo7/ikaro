import React from "react"
import classNames from "classnames"
import Section from "../components/section/Section"

import "./sectiona.scss"

import Dest1 from "../images/Destello1.png"
import Dest2 from "../images/Destello2.png"

const SectionA = () => {
  return (
    <Section>
      <div
        className={classNames("sun absolute z-20 h-80 w-80 sm:h-96 sm:w-96")}
      ></div>
      <img src={Dest1} className="destello1" />
      <img src={Dest2} className="destello2" />
      <p
        className="psun mt-8 text-center text-3xl mt-96 pt-10 sm:pt-20"
      >
        Energía solar accesible para todos.
      </p>
    </Section>
  )
}

export default SectionA
