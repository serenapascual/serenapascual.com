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
        artist at heart and software engineer by trade, i write code to solve problems 
        and spread smiles.
      </div>
      <p className="lineWithFunLink">view my &nbsp;
        <span>
          <a href="/Serena_Pascual__Resume_Web__2021_Jan.pdf">resume</a>
        </span>
      </p>
    </div>
  )
}