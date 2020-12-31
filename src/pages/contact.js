import React from "react"
import { Helmet } from "react-helmet"

export default function Contact() {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>serena pascual | contact</title>
        <link rel="canonical" href="https://serenapascual.com/" />
      </Helmet>
      <h2>let's chat!</h2>
      <p>
        feel free to drop me a line at <a href="mailto:hi@serenapascual.com">hi@serenapascual.com</a>.
      </p>
      <p>
        you can also find driblets of my presence in the spaces below:
      </p>
      <p>
        <a href="https://github.com/serenapascual">Github&nbsp;↗</a> <a href="https://linkedin.com/in/serenapascual">LinkedIn&nbsp;↗</a> <a href="https://reading.supply/@serena">Reading&nbsp;Supply&nbsp;↗</a>
      </p>
    </div>
  )
}