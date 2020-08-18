import React from "react"
import styled from "styled-components"
import Image from "gatsby-image"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const BlogCard = ({ post }) => {
  const { slug, title, image, published } = post
  return (
    <Wrapper>
      <div className="img-container">
        <Image
          fluid={image.localFiles[0].childImageSharp.fluid}
          className="img"
          alt="single post"
        />
        <AniLink fade className="link" to={`/blog/${slug}`}>
          read more
        </AniLink>
        <h6 className="date">{published}</h6>
        <div className="footer">
          <h4>{title}</h4>
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
    /* background: var(--primaryColor); */
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
  .footer h4 {
    text-transform: capitalize;
    margin-bottom: 0;
  }
  .date {
    position: absolute;
    left: 0;
    top: 65%;
    background: var(--primaryColor);
    padding: 0.3rem 0.5rem;
    border-top-right-radius: 1rem;
    border-bottom-right-radius: 1rem;
  }
`

export default BlogCard
