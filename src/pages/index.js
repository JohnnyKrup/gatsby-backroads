import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Layout from "../components/Layout"
import Banner from "../components/Banner"
import About from "../components/Home/About"
import Services from "../components/Home/Services"
import StyledHero from "../components/StyledHero"
import { graphql } from "gatsby"

const home = ({ data }) => {
  const {
    bcg: {
      childImageSharp: { fluid },
    },
  } = data

  return (
    <Layout>
      <StyledHero home="true" img={fluid}>
        <Banner
          title="continue exploring"
          info="Vexillologist twee biodiesel gochujang godard cray squid kickstarter church-key waistcoat bespoke. Mustache air plant brunch chambray edison bulb drinking vinegar."
        >
          <AniLink to="/tours" className="btn-white">
            Explore tours
          </AniLink>
        </Banner>
      </StyledHero>

      <About />
      <Services />
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

export default home
