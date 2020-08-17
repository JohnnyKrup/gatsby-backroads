import React from "react"
import Title from "../StyledTitle"
import styled from "styled-components"

const Contact = () => {
  return (
    <Wrapper>
      <Title title="contact" subtitle="us" />
      <div className="center">
        <form action="https://formspree.io/mnqgyavb" method="POST">
          <div>
            <label htmlFor="name">name:</label>
            <input
              type="text"
              name="name"
              id="name"
              className="formControl"
              placeholder="your name"
            />
          </div>
          <div>
            <label htmlFor="email">email:</label>
            <input
              type="email"
              name="email"
              id="email"
              className="formControl"
              placeholder="your email: i.e.email@email.com"
            />
          </div>
          <div>
            <label htmlFor="message">message:</label>
            <textarea
              name="message"
              id="message"
              rows="10"
              className="formControl"
              placeholder="your message"
            />
          </div>
          <div>
            <input type="submit" value="send" className="submit" />
          </div>
        </form>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  padding: 4rem 0;

  .center {
    width: 80vw;
    margin: 0 auto;
  }
  @media screen and (min-width: 992px) {
    .center {
      width: 50vw;
      margin: 0 auto;
    }
  }
  label {
    text-transform: capitalize;
    display: block;
    margin-bottom: 0.5rem;
  }
  .formControl,
  .submit {
    width: 100%;
    font-size: 1rem;
    margin-bottom: 1rem;
    padding: 0.375rem 0.75rem;
    border: 1px solid var(--darkGrey);
    border-radius: 0.25rem;
  }
  .submit {
    background-color: var(--primaryColor);
    border-color: var(--primaryColor);
    text-transform: uppercase;
    color: var(--mainBlack);
    transition: var(--mainTransition);
    cursor: pointer;
  }
  .submit:hover {
    background: var(--darkGrey);
    color: var(--mainWhite);
    border-color: var(--darkGrey);
  }
`

export default Contact
