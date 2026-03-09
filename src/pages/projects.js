import React from "react"
import { Helmet } from "react-helmet"
import Project from "../components/project"

export default function Projects() {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>serena pascual | projects</title>
        <link rel="canonical" href="https://serenapascual.com/" />
      </Helmet>

      <h2>select tinkerings</h2>
      <ul>
        <Project
          title="Computational Photography deck"
          link="https://docs.google.com/presentation/d/16ia8MDIS8jU4ltnwu_OU9pw9nt6GcriYFh3js3aaWhY/"
          description="course portfolio for CS 6475 at GA Tech."
          technologies="[Python] [OpenCV] [NumPy] [SciPy]"
          />

        <Project
          title="southsista"
          link="https://github.com/serenapascual/southsista"
          description="a low-poly flocking simulation inspired by a week of hikes in Central OR."
          technologies="[three.js]"
          />

        <Project
          title="ice-cream-social"
          link="https://github.com/serenapascual/ice-cream-social"
          description="a static website for a client's budding nonprofit organization."
          technologies="[After Effects] [Illustrator] [SVG]"
        />

        <Project
          title="personal website"
          link="https://github.com/serenapascual/serenapascual.com"
          description={[
            <span key="0">asserting my existence. lovely sunset GLSL shader owed to </span>,
            <a key="1" href="https://www.shadertoy.com/user/miloszmaki\">miloszmaki</a>,
            <span key="2">.</span>
          ]}
          technologies="[React] [three.js]"
          />
        </ul>
    </div>
  )
}
