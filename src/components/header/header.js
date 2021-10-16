import React, { useContext } from "react"
import PropTypes from "prop-types"
import classNames from "classnames"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import { AppContext } from "../../context/AppContext"

import "./header.scss"

import Logo from "../../images/Logo.svg"
import Background from "../back/Background"
import Menu from "../menu/Menu"

const Header = ({ siteTitle }) => {
  const { menuOpen, setMenuOpen } = useContext(AppContext)

  return (
    <header className="fixed w-full">
      <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-2 sm:p-6">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <AniLink swipe to="/">
            <img src={Logo} alt="Ikaro" />
          </AniLink>
        </div>
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className={classNames({ open: menuOpen }, "menu")}
        >
          <div className="icon-left"></div>
          <div className="icon-right"></div>
        </button>
        <Background show={menuOpen}>
          <Menu />
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
