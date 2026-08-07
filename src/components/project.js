import React from "react"

export default function Project(props) {
  const handleClick = event => {
    if (props.onClick) {
      event.preventDefault()
      props.onClick()
    }
  }

  return (
    <div className="project">
      <h3><a href={props.link || "#"} onClick={handleClick}> {props.title}</a></h3>
      <p>{props.description}</p>
      <p style={{ color: `#838383` }}>{props.technologies}</p>
    </div>
  )
}
