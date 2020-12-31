import React from "react"
import { Helmet } from "react-helmet"
import ReactTooltip from 'react-tooltip';

export default function Home() {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>serena pascual | home</title>
        <link rel="canonical" href="https://serenapascual.com/" />
      </Helmet>
      <h1>hi, i'm serena</h1>
      <p>
        artist at heart and software engineer by trade, i write code to solve problems and spread <span class="tooltip" data-tip=":-)">smiles</span>.
        <ReactTooltip place="bottom" type="info" effect="float" backgroundColor="#358182" data-offset="{'top': -10}" />
      </p>
    </div>
  )
}