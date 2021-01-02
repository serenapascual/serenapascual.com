import React from "react"
import { Link } from "gatsby"
import VisuallyInteresting from "./visuallyInteresting"
import "fontsource-karla"
import "fontsource-karla/600.css"

const listLinkStyles = {
  color: `#838383`,
  textDecoration: `none`
}

const listLinkActiveStyles = {
  color: `#358182`,
  textDecoration: `none`,
  fontWeight: `bold`,
}

const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link style={listLinkStyles} activeStyle={listLinkActiveStyles} to={props.to}>{props.children}</Link>
  </li>
)

export default function Layout({ children }) {
  return (
    <div className="layout">
      <header style={{ 
        marginBottom: `2rem`, 
        height: `1em`, 
        display: `flex`, 
        alignItems: `center`, 
        justifyContent: `space-between`
        }}>
        <Link to="/" style={{ textDecoration: `none`, backgroundImage: `none` }}>
          <h3 style={{ display: `inline-block`, color: `#222` }}>serena pascual</h3>
        </Link>
        <ul style={{ listStyle: `none`, float: `right` }}>
          <ListLink to="/about">about</ListLink>
          <ListLink to="/projects">projects</ListLink>
          <ListLink to="/contact">contact</ListLink>
        </ul>
      </header>
      <div className="subnav">
        <ul><VisuallyInteresting /></ul>
        <ul>{children}</ul>
      </div>
    </div>
  )
}