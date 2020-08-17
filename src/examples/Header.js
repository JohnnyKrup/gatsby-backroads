import React from "react"
import { useStaticQuery, graphql } from "gatsby"

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

const Header = () => {
  const {
    site: {
      siteMetadata: { author, description, title },
    },
  } = useStaticQuery(query)

  return (
    <div>
      <h1>use Static Query Hook</h1>
      <h4>this is the way to go, less complicated compared to StaticQueries</h4>
      <h2>title: {title}</h2>
      <h2>author: {author}</h2>
      <p>{description}</p>
      <hr />
    </div>
  )
}

export default Header
