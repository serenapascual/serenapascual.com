import React from "react"
import { Helmet } from "react-helmet"

export default function Projects() {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>serena pascual | projects</title>
        <link rel="canonical" href="https://serenapascual.com/" />
      </Helmet>
      <h2>recent tinkerings</h2>
      <h3><a href="https://github.com/serenapascual/southsista">southsista</a></h3>
      <p>a low-poly flocking simulation inspired by a week of hikes in Central OR.</p>
      <p>
        [three.js]
      </p>
      <h3><a href="https://github.com/serenapascual/ice-cream-social">ice-cream-social</a></h3>
      <p>
        a static website for a friend's budding nonprofit org.
      </p>
      <p>
        [After Effects] [Illustrator] [SVG]
      </p>
      <h3><a href="https://github.com/serenapascual/mechmarket">mechmarket - in progress</a></h3>
      <p>an iOS app to improve the UX of trade within the mechanical keyboard community. </p>
      <p>
        [Swift] [UIKit]
      </p>
      <h3><a href="https://github.com/serenapascual/serenapascual.com">personal website</a></h3>
      <p>
        asserting my existence. lovely sunset GLSL shader owed to <a href="https://www.shadertoy.com/user/miloszmaki">miloszmaki</a>.
      </p>
      <p>
        [React] [three.js]
      </p>
    </div>
  )
}