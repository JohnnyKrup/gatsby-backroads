import React from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import img from "../images/connectBcg.jpeg"
import Img from "gatsby-image"

const query = graphql`
  {
    fixed: file(relativePath: { eq: "defaultBcg.jpeg" }) {
      childImageSharp {
        fixed(width: 300, height: 400, grayscale: true) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    fluid: file(relativePath: { eq: "blogBcg.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 200) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
  }
`

/**
 * fluid (maxWidth: 200){
 * does not mean the image will be 200px width
 * it generates just more copies that are closer to 200 instead of the default 800 size
 */
const Images = () => {
  const data = useStaticQuery(query)
  console.log(data)
  return (
    <Wrapper>
      <article>
        <h3>normal import</h3>
        <img src={img} alt="" className="basic" />
      </article>

      <article>
        <h3>fixed image / blur</h3>
        <Img fixed={data.fixed.childImageSharp.fixed} />
      </article>

      <article>
        <h3>fluid image / svg</h3>
        <Img fluid={data.fluid.childImageSharp.fluid} />
        <div className="fluid">
          <Img fluid={data.fluid.childImageSharp.fluid} />
        </div>
      </article>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  text-align: center;
  text-transform: capitalize;
  width: 80vw;
  margin: 0 auto 10rem auto;

  article {
    border: 3px solid gray;
    padding: 1rem 0;
  }

  .basic {
    width: 100%;
  }
  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 1rem;
  }

  .fluid {
    width: 200px;
    margin: 1rem;
  }
`

export default Images
