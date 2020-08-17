import React from "react"
import Layout from "../components/Layout"
import Button from "../examples/Button"
import Header from "../examples/Header"
import RegularHeader from "../examples/RegularHeader"
import { graphql } from "gatsby"
import Images from "../examples/Images"

/**
 * instead of the props property, we can already destructure the props
 * and access the property that is returned by the page query which is data
 *
 * const samples = ({data}) => {
 *
 */
const samples = props => {
  console.log(props)
  return (
    <Layout>
      <div>
        <Button big>button one</Button>
        <Button color="yellow">button two</Button>
        <Button color="#f15025">button three</Button>
        <hr />
      </div>
      <Header />
      <RegularHeader />
      <hr />
      <div>
        <h3>Page Query</h3>
        <p>
          data coming back from the page query does not need to be rendered on
          the page itself, it can be passed into a componenet and rendered
          there.
        </p>
        <h4>author: {props.data.site.siteMetadata.author}</h4>
      </div>

      <Images />
    </Layout>
  )
}

export const query = graphql`
  {
    site {
      siteMetadata {
        author
        description
        title
      }
    }
  }
`

export default samples
