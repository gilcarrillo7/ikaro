import React, { useContext } from "react"
import { navigate } from "gatsby"

import { AppContext } from "../context/AppContext"

const Boton = props => {
  const { target, contact } = props
  const { setContactOpen } = useContext(AppContext)

  const clickFunction = () => {
    if (contact) setContactOpen(true)
    else navigate(target)
  }

  return (
    <button
      className="text-white text-xl rounded-full bg-pinkbrand py-2 px-8"
      onClick={clickFunction}
    >
      {props.children}
    </button>
  )
}

export default Boton
