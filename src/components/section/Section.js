import React from "react"

const Section = ({ children }) => {
  return (
    <section>
      <div className="min-h-screen text-white flex items-center justify-center	">
        <div className="container">{children}</div>
      </div>
    </section>
  )
}

export default Section
