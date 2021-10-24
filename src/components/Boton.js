import React, { useContext } from "react"
import { Link } from "gatsby"

import { AppContext } from "../context/AppContext"

const Boton = props => {
  const { setMenuOpen, setContactOpen } = useContext(AppContext)
  const { target } = props

  return (
    <>
      {target === "contact" ? (
        <button
          className="text-white text-xl rounded-full bg-pinkbrand py-2 px-8"
          onClick={() => {
            setMenuOpen(true)
            setTimeout(() => setContactOpen(true), 1000)
          }}
        >
          {props.children}
        </button>
      ) : (
        <Link
          className="text-white text-xl rounded-full bg-pinkbrand py-2 px-8"
          to={target}
        >
          {props.children}
        </Link>
      )}
    </>
  )
}

export default Boton
