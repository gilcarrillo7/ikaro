import React, { useContext } from "react"
import { AnchorLink } from "gatsby-plugin-anchor-links"

import { AppContext } from "../../context/AppContext"

const Menu = () => {
  const { setMenuOpen, setContactOpen } = useContext(AppContext)

  return (
    <>
      <ul className="flex flex-col h-screen ul-menu absolute">
        <li>
          <AnchorLink
            to="/#section1"
            onAnchorLinkClick={() => setMenuOpen(false)}
          >
            Inicio
          </AnchorLink>
        </li>
        <li>
          <AnchorLink
            to="/#section2"
            onAnchorLinkClick={() => setMenuOpen(false)}
          >
            Servicios
          </AnchorLink>
        </li>
        <li>
          <AnchorLink
            to="/#section3"
            onAnchorLinkClick={() => setMenuOpen(false)}
          >
            Personal
          </AnchorLink>
        </li>
        <li>
          <AnchorLink
            to="/#section4"
            onAnchorLinkClick={() => setMenuOpen(false)}
          >
            Proyectos
          </AnchorLink>
        </li>
        <li>
          <a
            href="#"
            onClick={() => {
              setMenuOpen(false)
              setContactOpen(true)
            }}
          >
            Contacto
          </a>
        </li>
      </ul>
      <div className="circle fixed"></div>
    </>
  )
}

export default Menu
