import React from "react"
import Tour from "../Tours/Tour"
import { graphql, useStaticQuery } from "gatsby"
import Title from "../StyledTitle"
import styled from "styled-components"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const getTours = graphql`
  query {
    featuredTours: allAirtable(
      filter: { table: { eq: "Tours" }, data: { featured: { eq: true } } }
      sort: { order: ASC, fields: data___start }
    ) {
      nodes {
        id
        data {
          name
          country
          price
          slug
          days
          images {
            localFiles {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`

const FeaturedTours = () => {
  const data = useStaticQuery(getTours)

  const {
    featuredTours: { nodes: tours },
  } = data

  //console.log(tours)
  return (
    <Wrapper>
      <Title title="featured" subtitle="tours" />
      <div className="center">
        {tours.map(tour => {
          return <Tour tour={tour} key={tour.id} />
        })}
      </div>

      <AniLink fade to="/tours" className="btn-primary">
        all tours
      </AniLink>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  padding: 4rem 0;
  text-align: center;

  .center {
    width: 80vw;
    margin: 3rem auto;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    grid-column-gap: 2rem;
    grid-row-gap: 2rem;
  }
  @media (min-width: 576px) {
    .center {
      grid-template-columns: repeat(auto-fill, minmax(368.66px, 1fr));
    }
  }
  @media (min-width: 1200px) {
    .center {
      width: 100%;
      max-width: 1170px;
    }
  }
`

export default FeaturedTours
