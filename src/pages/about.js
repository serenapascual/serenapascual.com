import React from "react"
import { Helmet } from "react-helmet"

export default function About() {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>serena pascual | about</title>
        <link rel="canonical" href="https://serenapascual.com/" />
      </Helmet>
      <h2>about me</h2>
      <p>
        i'm a software engineer with 4 years of industry experience, most notably in Android SDK and browser development with Google Lens and Unix-based internal tooling at Dell EMC.
      </p>
      <p>
        currently, i'm pursuing my MS in Computer Science at <a href="https://www.gatech.edu/">Georgia Tech</a> and am due to graduate in December 2026. i previously earned my BS in Computer Science from <a href="https://www.sjsu.edu/">SJSU</a> with a minor in music. 
      </p>
      <p>
        outside of work, i like to ride bikes, camp, and experiment with 2d and 3d media.
         ask me about my DIY Halloween costumes!
      </p>
    </div>
  )
}
