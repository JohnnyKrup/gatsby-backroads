import React from "react"
import Layout from "../components/Layout"
import StyledHero from "../components/StyledHero"
import { graphql } from "gatsby"
import BlogList from "../components/Blogs/BlogList"
import BlogCard from "../components/Blogs/BlogCard"
import SEO from "../components/SEO"

const blog = ({ data }) => {
  const {
    bcg: {
      childImageSharp: { fluid },
    },
  } = data
  return (
    <Layout>
      <SEO title="Blog" />
      <StyledHero img={fluid}></StyledHero>
      <BlogList />
    </Layout>
  )
}

export const query = graphql`
  {
    bcg: file(relativePath: { eq: "blogBcg.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 1920, quality: 90) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

export default blog
