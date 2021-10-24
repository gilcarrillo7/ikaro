import React from "react"

const Section = props => {
  const { bg } = props
  return (
    <section>
      <div
        className={`min-h-screen text-white flex items-center justify-center relative ${
          bg === "white" ? "bg-white" : ""
        }`}
      >
        <div className="container">{props.children}</div>
      </div>
    </section>
  )
}

export default Section
