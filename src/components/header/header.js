import React, { useState, useContext } from "react"
import PropTypes from "prop-types"
import classNames from "classnames"
import { Link } from "gatsby"

import { AppContext } from "../../context/AppContext"

import "./header.scss"

import Logo from "../../images/Logo.svg"
import Background from "../back/Background"
import Menu from "../menu/Menu"
import Contact from "../contact/Contact"

const Header = ({ siteTitle }) => {
  const { menuOpen, setMenuOpen, contactOpen, setContactOpen } =
    useContext(AppContext)

  const closeBackground = () => {
    if (contactOpen) setContactOpen(false)
    else setMenuOpen(!menuOpen)
  }

  return (
    <header className="fixed w-full">
      <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <Link to="/">
            <img src={Logo} />
          </Link>
        </div>
        <button
          onClick={() => closeBackground()}
          className={classNames({ open: menuOpen || contactOpen }, "menu")}
        >
          <div className="icon-left"></div>
          <div className="icon-right"></div>
        </button>
        <Background show={menuOpen || contactOpen}>
          {menuOpen && <Menu />}
          {contactOpen && <Contact />}
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
