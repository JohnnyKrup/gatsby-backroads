import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const query = graphql`
  query getSEO {
    site {
      siteMetadata {
        siteTitle: title
        siteDescription: description
        author
        siteUrl
        twitterUsername
        image
      }
    }
  }
`

/**
 * There are 2 ways to add meta tags
 * 1. directly in the <Helmet> Tag as a property like the title
 * 2. adding a <meta /> Tag inbetween the <Helmet> Tag and passing the property into the 'content' property
 * @param {title, description} param0
 */
const SEO = ({ title, description }) => {
  const {
    site: { siteMetadata },
  } = useStaticQuery(query)

  const {
    siteTitle,
    siteDescription,
    author,
    siteUrl,
    twitterUsername,
    image,
  } = siteMetadata

  return (
    <Helmet htmlAttributes={{ lang: "en" }} title={`${title} | ${siteTitle}`}>
      <meta name="description" content={description || siteDescription} />
      <meta name="image" content={image} />
      {/* twitter card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={twitterUsername} />
      <meta name="twitter:title" content={siteTitle} />
      <meta
        name="twitter:description"
        content={description || siteDescription}
      />
      <meta name="twitter:image" content={`${siteUrl}${image}`} />
    </Helmet>
  )
}

export default SEO
