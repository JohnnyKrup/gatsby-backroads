import React from "react"
import styled from "styled-components"
import BackgroundImage from "gatsby-background-image"
import { graphql, useStaticQuery } from "gatsby"

const query = graphql`
  {
    file(relativePath: { eq: "defaultBcg.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 1920, quality: 90) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

/**
 * Dynamic Hero Component that can be used in multiple places, with different looks
 *
 * img => image that will be passed in
 * className => is used for the styledComponent css
 * children => to render every child Tag that I will place into my <StyledHerp></StyledHerp>
 * home => used for conditional styling, if used on homepage or elsewhere
 */
const StyledHero = ({ img, className, children, home }) => {
  const data = useStaticQuery(query)
  console.log(data)
  const {
    file: {
      childImageSharp: { fluid },
    },
  } = data
  return (
    <BackgroundImage className={className} fluid={img || fluid} home={home}>
      {children}
    </BackgroundImage>
  )
}

export default styled(StyledHero)`
  min-height: ${({ home }) => (home ? "calc(100vh - 62px)" : "50vh")};
  background: ${props =>
    props.home
      ? "linear-gradient(rgba(63, 208, 212, 0.7), rgba(0, 0, 0, 0.7))"
      : "none"};
  background-position: center;
  background-size: cover;
  opacity: 1 !important;
  display: flex;
  justify-content: center;
  align-items: center;
`
