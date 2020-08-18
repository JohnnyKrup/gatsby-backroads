import React from "react"
import Layout from "../components/Layout"
import StyledHero from "../components/StyledHero"
import { graphql } from "gatsby"
import Contact from "../components/Contact/Contact"
import SEO from "../components/SEO"

const contact = ({ data }) => {
  const {
    bcg: {
      childImageSharp: { fluid },
    },
  } = data
  return (
    <Layout>
      <SEO title="Contact" />
      <StyledHero img={fluid}></StyledHero>
      <Contact />
    </Layout>
  )
}

export const query = graphql`
  {
    bcg: file(relativePath: { eq: "connectBcg.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 1920, quality: 90) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

export default contact
