import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const Boton = props => {
  const { target, direction } = props

  return (
    <AniLink
      className="text-white text-xl rounded-full bg-pinkbrand py-2 px-8"
      swipe
      direction={direction}
      to={target}
    >
      {props.children}
    </AniLink>
  )
}

export default Boton
