import React from "react"
import Scene from "./threeScene"

const FrameOutline = props => (
  <div style= {{ 
      display: `inline-block`,
      position: `absolute`,
      zIndex: `8`,
      height: `360px`,
      width: `280px`,
      border: `1px solid #222`
    }}>
      {props.children}
  </div>
)

const FrameTop = props => (
  <div style= {{ 
      position: `absolute`,
      zIndex: `6`,
      height: `20px`,
      width: `280px`,
      left: `0px`,
      top: `0px`,
      backgroundColor: `#fffdfb`,
    }}>
      {props.children}
  </div>
)

const FrameRight = props => (
  <div style= {{ 
      position: `absolute`,
      zIndex: `1`,
      height: `360px`,
      width: `20px`,
      left: `260px`,
      top: `0px`,
      backgroundColor: `#fffdfb`,
    }}>
      {props.children}
  </div>
)

const FrameBottom = props => (
  <div style= {{ 
      position: `absolute`,
      zIndex: `6`,
      height: `20px`,
      width: `280px`,
      left: `0px`,
      top: `340px`,
      backgroundColor: `#fffdfb`,
    }}>
      {props.children}
  </div>
)

const FrameLeft = props => (
  <div style= {{ 
      position: `absolute`,
      zIndex: `6`,
      height: `360px`,
      width: `20px`,
      left: `0px`,
      top: `0px`,
    }}>
      {props.children}
  </div>
)

const PaneUpperLeft = props => (
  <div style= {{ 
      position: `absolute`,
      zIndex: `10`,
      height: `156px`,
      width: `116px`,
      top: `20px`,
      left: `20px`,
      border: `1px solid #222`
    }}>
      {props.children}
  </div>
)

const PaneUpperRight = props => (
  <div style= {{ 
      position: `absolute`,
      zIndex: `11`,
      height: `156px`,
      width: `116px`,
      top: `20px`,
      left: `143px`,
      border: `1px solid #222`
    }}>
      {props.children}
  </div>
)

const PaneLowerLeft = props => (
  <div style= {{ 
      position: `absolute`,
      zIndex: `12`,
      height: `156px`,
      width: `116px`,
      top: `183px`,
      left: `20px`,
      border: `1px solid #222`
    }}>
      {props.children}
  </div>
)

const PaneLowerRight = props => (
  <div style= {{ 
      position: `absolute`,
      zIndex: `12`,
      height: `156px`,
      width: `116px`,
      top: `183px`,
      left: `143px`,
      border: `1px solid #222`
    }}>
      {props.children}
  </div>
)

const GrilleVertical = props => (
  <div style= {{ 
      position: `absolute`,
      zIndex: `4`,
      backgroundColor: `#fffdfb`,
      height: `322px`,
      width: `6px`,
      top: `20px`,
      left: `138px`,
    }}>
      {props.children}
  </div>
)

const GrilleHorizontal = props => (
  <div style= {{ 
      position: `absolute`,
      zIndex: `3`,
      backgroundColor: `#fffdfb`,
      height: `6px`,
      width: `242px`,
      top: `178px`,
      left: `20px`,
    }}>
      {props.children}
  </div>
)

const Sill = props => (
  <div style= {{ 
      position: `absolute`,
      zIndex: `13`,
      backgroundColor: `#fffdfb`,
      height: `20px`,
      width: `320px`,
      top: `360px`,
      left: `-20px`,
      border: `1px solid #222`
    }}>
      {props.children}
  </div>
)

const Sky = props => (
  <div style= {{ 
      display: `inline-block`,
      position: `absolute`,
      zIndex: `1`,      
      height: `400px`,
      width: `300px`,
      top: '20px',
      left: '20px'
    }}>
      {props.children}
      <Scene />
  </div>
)

function calculateResizeScalar() {
  const bestWidth = 1080.0;
  const bestHeight = 670.0;

  const currentWidth = window.innerWidth
  const currentHeight = window.innerHeight
  
  if (currentWidth !== bestWidth) {
    return (currentWidth / bestWidth)
  }
  else if (currentHeight !== bestHeight) {
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
    this.resize()
    window.addEventListener('resize', this.resize)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resize)
  }

  render () {
    return (
      <div style={{ 
         transform: `scale(${this.state.resizeScalar})`,
         WebkitTransformOrigin: `top left`
         }}>

        <FrameOutline />
        <FrameTop />
        <FrameRight />
        <FrameBottom />
        <FrameLeft />
        <PaneUpperLeft />
        <PaneUpperRight />
        <PaneLowerLeft />
        <PaneLowerRight />
        <GrilleVertical />
        <GrilleHorizontal />
        <Sky />
        <Sill />
      </div>
    )
  }
}

export default VisuallyInteresting