import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import styled from "styled-components"
import BlogCard from "../components/Blogs/BlogCard"
import Title from "../components/StyledTitle"

const Blog = props => {
  const { data } = props
  const { currentPage, numPages } = props.pageContext
  console.log(props.pageContext)

  const isFirst = currentPage === 1
  const isLast = currentPage === numPages

  const nextPage = `/blogs/${currentPage + 1}`
  const prevPage =
    currentPage - 1 === 1 ? "/blogs" : `/blogs/${currentPage - 1}`

  return (
    <Layout>
      <Wrapper>
        <Title title="latest" subtitle="posts" />
        <div className="center">
          {data.posts.nodes &&
            data.posts.nodes.map(post => {
              return <BlogCard key={post.id} post={post.postData} />
            })}
        </div>
        <section className="links">
          {!isFirst && (
            <AniLink fade to={prevPage} className="link">
              prev
            </AniLink>
          )}

          {
            /**
             * Array.from() creates an array from the parameter value
             * in our case we have 3 pages, so it creates an array with 3 items
             */
            Array.from({ length: numPages }, (_, i) => {
              return (
                <AniLink
                  fade
                  to={`/blogs/${i === 0 ? "" : i + 1}`}
                  className={i + 1 === currentPage ? "link active" : "link"}
                  key={i + 1}
                >
                  {i + 1}
                </AniLink>
              )
            })
          }
          {!isLast && (
            <AniLink fade to={nextPage} className="link">
              next
            </AniLink>
          )}
        </section>
      </Wrapper>
    </Layout>
  )
}

export const query = graphql`
  query getPostsForPagination($skip: Int!, $limit: Int!) {
    posts: allAirtable(
      filter: { table: { eq: "Posts" } }
      sort: { fields: data___published, order: DESC }
      limit: $limit
      skip: $skip
    ) {
      nodes {
        id
        postData: data {
          slug
          title
          published(formatString: "MMMM Do, YYYY")
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

export default Blog
