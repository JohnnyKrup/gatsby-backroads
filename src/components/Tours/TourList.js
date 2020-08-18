import React, { Component } from "react"
import styled from "styled-components"
import Tour from "./Tour"
import Title from "../StyledTitle"

/**
 * Why are we using a class based component here?
 * In case we might want to filter the data, it is easier to do
 * the same setup would work if went the way Tours.js is setup,
 * by requesting the desired list from graphql
 */
export default class TourList extends Component {
  state = { tours: [], sortedTours: [] }

  componentDidMount() {
    console.log(this.props)
    this.setState({
      tours: this.props.tours.nodes,
      sortedTours: this.props.tours.nodes,
    })
  }

  render() {
    return (
      <Wrapper>
        <Title title="our" subtitle="tours" />
        <div className="center">
          {this.state.sortedTours.map(item => {
            return <Tour tour={item} key={item.id} />
          })}
        </div>
      </Wrapper>
    )
  }
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
  @media screen and (min-width: 576px) {
    .center {
      grid-template-columns: repeat(auto-fill, minmax(368.66px, 1fr));
    }
  }
  @media screen and (min-width: 1200px) {
    .center {
      width: 100%;
      max-width: 1170px;
    }
  }
`
