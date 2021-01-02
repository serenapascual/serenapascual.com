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
        i'm an early-career software generalist who graduated from <a href="https://www.sjsu.edu/">SJSU</a> with a BS in Computer Science. 
       my love for the planet and its inhabitants fuels me in my creative and professional pursuits.
      </p>
      <p>
        outside of work, i like to rock climb, make music, binge-read Wikipedia, and experiment with 2d and 3d media.
         ask me about my funny Halloween costumes!
      </p>
    </div>
  )
}