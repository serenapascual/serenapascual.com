import React, { useState } from "react"
import { Helmet } from "react-helmet"
import Project from "../components/project"
import Demos from "../components/cgai"

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null)

  const renderProjectList = () => (
    <ul>
      <li>
        <Project
          title="Computer Graphics in the AI Era demos"
          link="#"
          description="highlights from CS 8803 in Spring 2026 at GA Tech."
          technologies="[GLSL] [Python]"
          onClick={() => setSelectedProject("cgai")}
        />
      </li>

      <li>
        <Project
          title="Computational Photography deck"
          link="https://docs.google.com/presentation/d/16ia8MDIS8jU4ltnwu_OU9pw9nt6GcriYFh3js3aaWhY/"
          description="course portfolio for CS 6475 in Fall 2025 at GA Tech."
          technologies="[Python] [OpenCV] [NumPy] [SciPy]"
        />
      </li>

      <li>
        <Project
          title="southsista"
          link="https://github.com/serenapascual/southsista"
          description="a low-poly flocking simulation inspired by a week of hikes in Central OR."
          technologies="[three.js]"
        />
      </li>

      <li>
        <Project
          title="ice-cream-social"
          link="https://github.com/serenapascual/ice-cream-social"
          description="a static website for a client's budding nonprofit organization."
          technologies="[After Effects] [Illustrator] [SVG]"
        />
      </li>

      <li>
        <Project
          title="personal website"
          link="https://github.com/serenapascual/serenapascual.com"
          description={[
            <span key="0">asserting my existence. lovely sunset GLSL shader owed to </span>,
            <a key="1" href="https://www.shadertoy.com/user/miloszmaki">miloszmaki</a>,
            <span key="2">.</span>
          ]}
          technologies="[React] [three.js]"
        />
      </li>
    </ul>
  )

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>serena pascual | projects</title>
        <link rel="canonical" href="https://serenapascual.com/" />
      </Helmet>

      {selectedProject ? (
        <div>
          <button
            onClick={() => setSelectedProject(null)}
            style={{
              border: `none`,
              background: `none`,
              color: `#358182`,
              padding: 0,
              cursor: `pointer`,
              marginBottom: `0.75rem`
            }}
          >
          ← back to projects
          </button>
          {selectedProject === "cgai" && <Demos />}
        </div>
      ) : (
        <div>
          <h2>select tinkerings</h2>
          {renderProjectList()}
        </div>
      )}
    </div>
  )
}
