import React from "react"
import { Helmet } from "react-helmet"

export default function About() {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>serena pascual | 404</title>
        <link rel="canonical" href="https://serenapascual.com/" />
      </Helmet>
      <h1>404</h1>
      <p>
        sorry, couldn't find that!
      </p>
    </div>
  )
}