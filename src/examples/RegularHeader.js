import React from "react"
import { StaticQuery, graphql } from "gatsby"

const query = graphql`
  {
    site {
      siteMetadata {
        author
        description
        title
      }
    }
  }
`

const RegularHeader = () => {
  return (
    <StaticQuery
      query={query}
      render={data => {
        //console.log(data)
        return (
          <div>
            <h2>Static Query</h2>
            <p>
              same result as the static query hook, but more complicated to
              write
            </p>
            <h3>title: {data.site.siteMetadata.title}</h3>
            <hr />
          </div>
        )
      }}
    />
  )
}

export default RegularHeader
