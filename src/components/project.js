import React from "react"

export default function Project(props) {
  return (
    <div className="project">
      <h3><a href={props.link}> {props.title}</a></h3>
      <p>{props.description}</p>
      <p style={{ color: `#838383` }}>{props.technologies}</p>
    </div>
  )
}
