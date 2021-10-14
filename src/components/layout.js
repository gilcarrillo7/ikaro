/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React, { useState, useEffect, useCallback } from "react"
import PropTypes from "prop-types"
import { AppProvider } from "../context/AppContext"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header/header"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <AppProvider>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div className="text-white">
        <main>{children}</main>
      </div>
    </AppProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
