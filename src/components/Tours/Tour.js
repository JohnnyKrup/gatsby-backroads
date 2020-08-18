import React from "react"
import Image from "gatsby-image"
import styled from "styled-components"
import { FaMap } from "react-icons/fa"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import PropTypes from "prop-types"
import { useStaticQuery } from "gatsby"

const getDefaultImage = graphql`
  query {
    file(relativePath: { eq: "defaultBcg.jpeg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const Tour = ({ tour }) => {
  const {
    data: {
      name,
      price,
      country,
      days,
      slug,
      images: { localFiles },
    },
  } = tour

  const data = useStaticQuery(getDefaultImage)
  const defaultImage = data.file.childImageSharp.fluid
  // console.log(tour)
  // console.log(localFiles)

  let mainImage = localFiles
    ? localFiles[0].childImageSharp.fluid
    : defaultImage
  //console.log(mainImage)
  return (
    <Wrapper>
      <div className="img-container">
        <Image fluid={mainImage} className="img" alt="single tour" />
        <AniLink fade className="link" to={`/tours/${slug}`}>
          details
        </AniLink>
      </div>
      <div className="footer">
        <h3>{name || "new tour"}</h3>
        <div className="info">
          <h4 className="country">
            <FaMap className="icon" />
            {country || "default country"}
          </h4>
          <div className="details">
            <h6>{days || 0} days</h6>
            <h6>from ${price || 0}</h6>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.article`
  box-shadow: var(--lightShadow);
  transition: var(--mainTransition);

  :hover {
    box-shadow: var(--darkShadow);
  }

  .img-container {
    position: relative;
    background: var(--primaryColor);
    transition: var(--mainTransition);
  }
  .img {
    transition: var(--mainTransition);
  }
  .img-container:hover .img {
    opacity: 0.3;
  }

  .link {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0;
    text-transform: uppercase;
    letter-spacing: var(--mainSpacing);
    color: var(--mainWhite);
    border: 2px solid var(--mainWhite);
    padding: 0.5rem 0.7rem;
    display: inline-block;
    transition: var(--mainTransition);
    cursor: pointer;
  }
  .link:hover {
    background: var(--mainWhite);
    color: var(--primaryColor);
  }
  .img-container:hover .link {
    opacity: 1;
  }

  .footer {
    padding: 1rem;
    text-align: left;
  }
  .footer h3 {
    text-transform: capitalize;
    margin-bottom: 0;
  }
  .info {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    text-transform: uppercase;
    align-items: center;
    margin-top: 0.5rem;
  }
  .info h6,
  .info h4 {
    margin-bottom: 0;
  }
  .country {
    text-transform: capitalize;
    color: var(--primaryColor);
    display: flex;
    align-items: center;
  }
  .icon {
    margin-right: 0.4rem;
  }
  .details {
    color: var(--darkGrey);
    text-transform: uppercase;
    text-align: right;
  }
`
/**
 * in order to be able to check for an object I need to set an object as a shape to access its children
 */
// Tour.propTypes = {
//   tour: PropTypes.shape({
//     name: PropTypes.string.isRequired,
//     country: PropTypes.string.isRequired,
//     price: PropTypes.number.isRequired,
//     days: PropTypes.number.isRequired,
//     images: PropTypes.arrayOf(PropTypes.object).isRequired,
//   }),
// }

export default Tour
