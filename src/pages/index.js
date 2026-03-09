import React from "react"
import { Helmet } from "react-helmet"

export default function Home() {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>serena pascual | home</title>
        <link rel="canonical" href="https://serenapascual.com/" />
      </Helmet>
      <h1>hi, i'm serena</h1>
      <div>
        <p>
        artist at heart and software engineer by trade, i write code to solve problems 
        and explore whimsy.
        </p>
        <p>my interests lie primarily in image processing and graphics - or more generally, computation surrounding 2d and 3d.
        </p>
      </div>
      <p className="lineWithFunLink">view my &nbsp;
        <span>
          <a href="/Serena_Pascual__Resume_Web__2026_Jan.pdf">resume</a>
        </span>
      </p>
    </div>
  )
}
