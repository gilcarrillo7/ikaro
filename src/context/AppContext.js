import React, { useState } from "react"

const AppContext = React.createContext()
const { Provider } = AppContext

const AppProvider = props => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [contactOpen, setContactOpen] = useState(false)

  return (
    <Provider value={{ menuOpen, setMenuOpen, contactOpen, setContactOpen }}>
      {props.children}
    </Provider>
  )
}

export { AppProvider, AppContext }
