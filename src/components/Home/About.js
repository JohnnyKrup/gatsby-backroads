import React from "react"
import styled from "styled-components"
import Title from "../StyledTitle"
import img from "../../images/defaultBcg.jpeg"

const About = () => {
  return (
    <Wrapper>
      <Title title="about" subtitle="us" />
      <div className="about-center">
        <article className="about-img">
          <div className="img-container shadow">
            <img src={img} alt="about backroads" />
          </div>
        </article>
        <article className="about-info">
          <h4>explore teh difference</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
            dolor a quae.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, quo!
            Debitis, velit?
          </p>
          <button type="button" className="btn-primary">
            read more
          </button>
        </article>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  padding: 4rem 0;

  .about-center {
    width: 80vw;
    margin: 0 auto;
  }

  .about-img {
    margin: 3rem 0;
  }
  .about-info {
    margin-top: 3rem;
  }
  .about-img {
    position: relative;
  }

  img {
    width: 100%;
    display: block;
    box-shadow: var(--lightShadow);
  }
  .shadow {
    box-shadow: var(--lightShadow);
  }
  h4 {
    font-size: 1.9rem;
    text-transform: uppercase;
  }

  @media (min-width: 768px) {
    .about-center {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-column-gap: 3rem;
      align-items: center;
      margin-top: 3rem;
    }

    .about-img,
    .about-info {
      margin: 0;
    }
    img {
      max-height: 500px;
    }
    .img-container {
      max-height: 500px;
    }
    p {
      width: 80%;
    }
  }
  @media (min-width: 992px) {
    .img-container::before {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      border: 3px solid var(--primaryColor);
      box-sizing: border-box;
      top: -16px;
      left: -16px;
      z-index: -1;
    }
  }

  @media (min-width: 1200px) {
    .about-center {
      width: 95vw;
      max-width: 1170px;
    }
  }
`

export default About
