import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import styled from "styled-components"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Markdown from "remark-parse"
import html from "remark-html"
import unified from "unified"
import Image from "gatsby-image"

const Blog = ({ data }) => {
  const {
    title,
    published,
    image: { localFiles },
    text,
  } = data.blogPost.blogData

  const img = localFiles[0].childImageSharp.fluid

  return (
    <Layout>
      <Wrapper>
        <div className="center">
          <h1>{title}</h1>
          <h4>published at : {published}</h4>
          <article className="blog">
            <Image fluid={img} className="image images" />
            <div
              className="info"
              dangerouslySetInnerHTML={{
                __html: unified().use(Markdown).use(html).processSync(text),
              }}
            />
            <hr />
          </article>

          <AniLink fade to="/blog" className="btn-primary">
            all posts
          </AniLink>
        </div>
      </Wrapper>
    </Layout>
  )
}

export const query = graphql`
  query getBlogPost($slug: String!) {
    blogPost: airtable(table: { eq: "Posts" }, data: { slug: { eq: $slug } }) {
      id
      blogData: data {
        title
        published(formatString: "MMMM Do YYYY")
        text
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
`

const Wrapper = styled.section`
  padding: 4rem 0;

  hr {
    margin: 2rem 0;
  }

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
  section h2 {
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
  .blog {
    padding-bottom: 2rem;
  }
  .icon {
    color: var(--primaryColor);
    font-size: 1.4rem;
    margin-right: 0.5rem;
  }
  .desc {
    line-height: 2;
  }
  section h4 {
    text-transform: capitalize;
  }
  section h2 {
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

export default Blog
