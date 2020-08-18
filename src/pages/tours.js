import React from "react"
import Layout from "../components/Layout"
import StyledHero from "../components/StyledHero"
import { graphql } from "gatsby"
import Tours from "../components/Tours/Tours"

const tours = ({ data }) => {
  const {
    bcg: {
      childImageSharp: { fluid },
    },
  } = data
  return (
    <Layout>
      <StyledHero img={fluid}></StyledHero>
      <Tours />
    </Layout>
  )
}

export const query = graphql`
  {
    bcg: file(relativePath: { eq: "defaultBcg.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 1920, quality: 90) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

export default tours
