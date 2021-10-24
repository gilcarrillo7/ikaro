import React, { useContext } from "react"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import classNames from "classnames"

import { AppContext } from "../../context/AppContext"

const Menu = () => {
  const { menuOpen, setMenuOpen, currSection, setContactOpen } =
    useContext(AppContext)

  return (
    <>
      <ul
        className={classNames(
          { open: menuOpen },
          "ul-menu flex flex-col h-screen fixed z-50 ml-4 sm:ml-8 md:ml-8 lg:ml-24"
        )}
      >
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
          <button onClick={() => setContactOpen(true)}>
            Contacto
          </button>
        </li>
      </ul>
      {currSection > 1 && (
        <div
          className={classNames(
            { open: menuOpen },
            "circle fixed z-20 h-80 w-80 sm:h-96 sm:w-96"
          )}
        ></div>
      )}
    </>
  )
}

export default Menu
