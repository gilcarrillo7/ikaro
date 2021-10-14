import React from "react"
import { navigate } from "gatsby"

const Boton = props => {
  const { target } = props
  return (
    <button
      className="text-white text-xl rounded-full bg-pinkbrand py-2 px-8"
      onClick={() => {
        navigate(target)
      }}
    >
      {props.children}
    </button>
  )
}

export default Boton
