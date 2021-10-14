import React from "react"
import classNames from "classnames"

import "./background.scss"

const Background = props => {
  const { show } = props

  return (
    <div
      className={classNames(
        { show: show },
        "background-all bg-white h-screen w-screen absolute"
      )}
    >
      <div className="container m-auto p-4">{props.children}</div>
    </div>
  )
}

export default Background
