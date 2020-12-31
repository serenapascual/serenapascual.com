import React from "react"
import Scene from "./threeScene"

const Frame = props => (
  <div style= {{ 
      position: `relative`,
      height: `360px`,
      width: `280px`,
      border: `1px solid #222`
    }}>
      {props.children}
  </div>
)

const Container = props => (
  <div style= {{ 
      position: `absolute`,
      height: `320px`,
      width: `240px`,
      left: `20px`,
      top: `20px`,
      border: `1px solid #222`
    }}>
      {props.children}
      <Scene></Scene>
  </div>
)

const GrilleVertical = props => (
  <div style= {{ 
      position: `absolute`,
      zIndex: `10`,
      backgroundColor: `#fffdfb`,
      height: `101%`,
      width: `6px`,
      top: `-1px`,
      left: `120px`,
    }}>
      {props.children}
  </div>
)

const GrilleVerticalOutline = props => (
  <div style= {{ 
      position: `absolute`,
      zIndex: `8`,
      backgroundColor: `#222`,
      height: `100%`,
      width: `8px`,
      left: `119px`
    }}>
      {props.children}
  </div>
)

const GrilleHorizontal = props => (
  <div style= {{ 
      position: `absolute`,
      zIndex: `11`,
      backgroundColor: `#fffdfb`,
      height: `6px`,
      width: `101%`,
      top: `180px`,
      left: `-1px`,
    }}>
      {props.children}
  </div>
)

const GrilleHorizontalOutline = props => (
  <div style= {{ 
      position: `absolute`,
      zIndex: `9`,
      backgroundColor: `#222`,
      height: `8px`,
      width: `100%`,
      top: `179px`
    }}>
      {props.children}
  </div>
)

const Sill = props => (
  <div style= {{ 
      position: `absolute`,
      zIndex: `13`,
      height: `20px`,
      width: `320px`,
      top: `100%`,
      left: `-20px`,
      border: `1px solid #222`
    }}>
      {props.children}
  </div>
)

function calculateResizeScalar() {
  const bestWidth = 1080.0;
  const bestHeight = 670.0;

  const currentWidth = window.innerWidth
  const currentHeight = window.innerHeight
  
  if (currentWidth < bestWidth) {
    return (currentWidth / bestWidth)
  }
  else if (currentHeight < bestHeight) {
    return (currentHeight / bestHeight)
  }
  return 1.0
}

// Taken from PluralSight's article "Re-render a React Component on Window Resize"
// by Jake Trent, Oct. 2020
function debounce(fn, ms) {
  let timer
  return _ => {
    clearTimeout(timer)
    timer = setTimeout(_ => {
      timer = null
      fn.apply(this, arguments)
    }, ms)
  }
}

class VisuallyInteresting extends React.Component {
  constructor(props) {
    super(props)
    this.state = {resizeScalar: 1.0}
  }

  resize = () => debounce(
    this.setState({
      resizeScalar: calculateResizeScalar()
    }), 1000
  )

  componentDidMount() {
    window.addEventListener('resize', this.resize)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resize)
  }

  render () {
    return (
      <div style={{ transform: `scale(${this.state.resizeScalar})` }}>
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
      </div>
    )
  }
}

export default VisuallyInteresting