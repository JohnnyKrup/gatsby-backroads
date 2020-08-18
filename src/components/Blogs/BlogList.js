import React from "react"
import BlogCard from "./BlogCard"
import Title from "../StyledTitle"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

const getPosts = graphql`
  query {
    allAirtable(
      filter: { table: { eq: "Posts" } }
      sort: { order: DESC, fields: data___published }
    ) {
      nodes {
        id
        data {
          title
          slug
          published(formatString: "MMMM Do YYYY")
          image {
            localFiles {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    }
  }
`

const BlogList = () => {
  const {
    allAirtable: { nodes: posts },
  } = useStaticQuery(getPosts)
  //console.log(posts)

  return (
    <Wrapper>
      <Title title="our" subtitle="blog" />
      <div className="center">
        {posts.map(post => {
          return <BlogCard key={post.id} post={post.data} />
        })}
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  padding: 4rem 0;

  .center {
    width: 80vw;
    margin: 3rem auto;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    grid-column-gap: 2rem;
    grid-row-gap: 2rem;
  }
  .links {
    width: 80vw;
    margin: 0 auto 5rem auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .link {
    text-transform: uppercase;
    letter-spacing: var(--mainSpacing);
    background: var(--primaryColor);
    color: var(--mainWhite);
    border: 2px solid var(--primaryColor);
    padding: 0.25rem 0.5rem;
    border-radius: 0.5rem;
    display: inline-block;
    transition: var(--mainTransition);
    cursor: pointer;
  }
  .link:hover {
    background: transparent;
    color: var(--primaryColor);
  }
  .active {
    background: var(--mainWhite);
    color: var(--primaryColor);
  }

  @media (min-width: 576px) {
    .center {
      grid-template-columns: repeat(auto-fill, minmax(368.66px, 1fr));
    }
    .links {
      width: 60vw;
    }
  }
  @media (min-width: 1200px) {
    .center {
      width: 100%;
      max-width: 1170px;
    }
  }
`

export default BlogList
