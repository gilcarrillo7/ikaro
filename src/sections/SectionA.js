import React from "react"
import classNames from "classnames"
import Section from "../components/section/Section"

import "./sectiona.scss"

const SectionA = () => {
  return (
    <Section>
      <div
        className={classNames("sun absolute z-20 h-80 w-80 sm:h-96 sm:w-96")}
        data-sal="zoom-in"
        data-sal-delay="300"
        data-sal-duration="1000"
      ></div>
      <p
        className="mt-8 text-center text-3xl mt-96 pt-10 sm:pt-20"
        data-sal="slide-up"
        data-sal-delay="300"
        data-sal-duration="1000"
      >
        Energía solar accesible para todos.
      </p>
    </Section>
  )
}

export default SectionA
