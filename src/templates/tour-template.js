import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import StyledHero from "../components/StyledHero"
import styled from "styled-components"
import Image from "gatsby-image"
import { FaMoneyBillWave, FaMap } from "react-icons/fa"
import Day from "../components/SingleTour/Day"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const tourTemplate = ({ data }) => {
  const {
    name,
    price,
    country,
    days,
    start,
    description,
    images: { localFiles },
    journey,
  } = data.tour.tourData

  //console.log(journey)

  // select first image and give me the rest of the array
  // variable name of the rest of the array could be anything here we use tourImages
  const [mainImage, ...tourImages] = localFiles
  // console.log(mainImage.childImageSharp.fluid)
  // console.log(tourImages)

  return (
    <Layout>
      <StyledHero img={mainImage.childImageSharp.fluid} />
      <Wrapper>
        <div className="center">
          <div className="images">
            {tourImages.map((item, index) => {
              return (
                <Image
                  fluid={item.childImageSharp.fluid}
                  key={index}
                  alt="single tour"
                  className="images"
                />
              )
            })}
          </div>
          <h2>{name}</h2>
          <div className="info">
            <p>
              <FaMoneyBillWave className="icon" />
              starting from ${price}
            </p>
            <p>
              <FaMap className="icon" />
              {country}
            </p>
          </div>
          <h4>starts on: {start}</h4>
          <h4>duration: {days}</h4>
          <p className="desc">{description}</p>
          <h2>daily schedule</h2>
          <div className="journey">
            {journey.map(({ data }, index) => {
              return <Day key={index} day={data.day} info={data.info} />
            })}
          </div>
          <AniLink fade to="/tours" className="btn-primary">
            back to all tours
          </AniLink>
        </div>
      </Wrapper>
    </Layout>
  )
}

const Wrapper = styled.section`
  padding: 4rem 0;

  .center {
    width: 80vw;
    margin: 0 auto;
  }
  .images {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-column-gap: 1rem;
    grid-row-gap: 1rem;
    margin-bottom: 2rem;
  }
  .image {
    box-shadow: var(--lightShadow);
  }
  h2 {
    text-transform: capitalize;
    letter-spacing: var(--mainSpacing);
    margin-bottom: 1rem;
  }
  .info {
    display: flex;
    flex-wrap: wrap;
  }
  .info p {
    display: flex;
    align-items: center;
    margin-right: 2rem;
    text-transform: capitalize;
  }
  .icon {
    color: var(--primaryColor);
    font-size: 1.4rem;
    margin-right: 0.5rem;
  }
  .desc {
    line-height: 2;
  }
  .template h4 {
    text-transform: capitalize;
  }
  .template h2 {
    margin: 2rem 0;
  }
  .journey {
    margin: 3rem 0;
  }
  @media (min-width: 992px) {
    .journey,
    .desc {
      width: 70vw;
    }
  }
  @media (min-width: 1200px) {
    .center {
      width: 95vw;
      max-width: 1170vw;
    }
    .images {
      grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
      grid-column-gap: 50px;
    }
  }
`

/**
 * the variable that we are quering for needs to be exactly the same name
 * as we have set it up in the gatsby-node.js or it won't work ($slug)
 */
export const query = graphql`
  query($slug: String) {
    tour: airtable(data: { slug: { eq: $slug } }) {
      id
      tourData: data {
        name
        slug
        price
        country
        days
        start(formatString: "dddd Do MMMM, yyyy")
        description
        images {
          localFiles {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
        journey {
          data {
            day
            info
          }
        }
      }
    }
  }
`

export default tourTemplate
