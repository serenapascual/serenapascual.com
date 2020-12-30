import React from "react"
import { Link } from "gatsby"
import Scene from "./scene"

const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

const VisuallyInteresting = props => (
  <React.Fragment>
    <Frame>
      <Container>
        <GrilleVertical></GrilleVertical>
        <GrilleVerticalOutline></GrilleVerticalOutline>
        <GrilleHorizontal></GrilleHorizontal>
        <GrilleHorizontalOutline></GrilleHorizontalOutline>
      </Container>
      <Sill>
      </Sill>
    </Frame>
  </React.Fragment>
)

const Frame = props => (
  <div style= {{ 
      position: `relative`,
      height: `450px`,
      width: `350px`,
      border: `1px solid black`
    }}>
      {props.children}
  </div>
)

const Container = props => (
  <div style= {{ 
      position: `absolute`,
      height: `400px`,
      width: `300px`,
      left: `25px`,
      top: `25px`,
      border: `1px solid black`
    }}>
      {props.children}
      <Scene></Scene>
  </div>
)

const GrilleVertical = props => (
  <div style= {{ 
      position: `absolute`,
      zIndex: `10`,
      backgroundColor: `white`,
      height: `101%`,
      width: `6px`,
      top: `-1px`,
      left: `150px`,
    }}>
      {props.children}
  </div>
)

const GrilleVerticalOutline = props => (
  <div style= {{ 
      position: `absolute`,
      zIndex: `8`,
      backgroundColor: `black`,
      height: `100%`,
      width: `8px`,
      left: `149px`
    }}>
      {props.children}
  </div>
)

const GrilleHorizontal = props => (
  <div style= {{ 
      position: `absolute`,
      zIndex: `11`,
      backgroundColor: `white`,
      height: `6px`,
      width: `101%`,
      top: `200px`,
      left: `-1px`,
    }}>
      {props.children}
  </div>
)

const GrilleHorizontalOutline = props => (
  <div style= {{ 
      position: `absolute`,
      zIndex: `9`,
      backgroundColor: `black`,
      height: `8px`,
      width: `100%`,
      top: `199px`
    }}>
      {props.children}
  </div>
)

const Sill = props => (
  <div style= {{ 
      position: `absolute`,
      zIndex: `13`,
      height: `25px`,
      width: `400px`,
      top: `100%`,
      left: `-25px`,
      border: `1px solid black`
    }}>
      {props.children}
  </div>
)


export default function Layout({ children }) {
  return (
    <div style={{ margin: `3rem auto`, maxWidth: 700 }}>
      <header style={{ marginBottom: `1.5rem` }}>
        <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
          <h3 style={{ display: `inline` }}>Serena Pascual</h3>
        </Link>
        <ul style={{ listStyle: `none`, float: `right` }}>
          <ListLink to="/about">About</ListLink>
          <ListLink to="/projects/">Projects</ListLink>
          <ListLink to="/contact/">Contact</ListLink>
        </ul>
      </header>
      <div style={{ display: `grid`, gridTemplateColumns: `450px 250px` }}>
        <ul><VisuallyInteresting /></ul>
        <ul>{children}</ul>
      </div>
    </div>
  )
}