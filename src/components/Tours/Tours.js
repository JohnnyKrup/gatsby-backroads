import React from "react"
import TourList from "./TourList"
import { useStaticQuery, graphql } from "gatsby"

const getTours = graphql`
  query {
    allTours: allAirtable(
      filter: { table: { eq: "Tours" } }
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

const Tours = () => {
  const { allTours } = useStaticQuery(getTours)

  return <TourList tours={allTours} />
}

export default Tours
