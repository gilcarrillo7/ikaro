import React, { useState, useContext } from "react"
import PropTypes from "prop-types"
import classNames from "classnames"
import { Link } from "gatsby"
import { AnchorLink } from "gatsby-plugin-anchor-links"

import { AppContext } from "../../context/AppContext"

import "./header.scss"

import Logo from "../../images/Logo.svg"
import Background from "../back/Background"

const Header = ({ siteTitle }) => {
  const { menuOpen, setMenuOpen } = useContext(AppContext)

  return (
    <header className="fixed w-full">
      <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <Link to="/">
            <img src={Logo} />
          </Link>
        </div>
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className={classNames({ open: menuOpen }, "menu")}
        >
          <div className="icon-left"></div>
          <div className="icon-right"></div>
        </button>
        <Background show={menuOpen}>
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
              <a href="#">Contacto</a>
            </li>
          </ul>
          <div className="circle fixed"></div>
        </Background>
      </nav>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
