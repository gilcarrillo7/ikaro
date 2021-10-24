import React, { useContext } from "react"
import PropTypes from "prop-types"
import classNames from "classnames"
import { Link } from "gatsby"
import Helmet from "react-helmet"

import { AppContext } from "../../context/AppContext"

import Contacto from "../contacto/Contacto"

import "./header.scss"

import Logo from "../../images/Logo.svg"
import Background from "../back/Background"
import Menu from "../menu/Menu"

const Header = ({ siteTitle }) => {
  const { menuOpen, setMenuOpen, contactOpen, setContactOpen } =
    useContext(AppContext)

  const closeMenu = () => {
    setMenuOpen(!menuOpen)
    setContactOpen(false)
  }

  return (
    <>
      <Helmet
        bodyAttributes={{
          class: `${menuOpen ? "overflow-hidden" : ""}`,
        }}
      />
      <header className="fixed w-full z-30 sm:z-10">
        <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-2 sm:p-6">
          <div className="flex items-center flex-shrink-0 text-white mr-6">
            <Link to="/">
              <img src={Logo} alt="Ikaro" />
            </Link>
          </div>
          <button
            onClick={closeMenu}
            className={classNames({ open: menuOpen }, "menu")}
          >
            <div className="icon-left"></div>
            <div className="icon-right"></div>
          </button>
          <Background show={menuOpen}></Background>
        </nav>
      </header>
      {!contactOpen && <Menu show={menuOpen} />}
      {contactOpen && <Contacto />}
    </>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
