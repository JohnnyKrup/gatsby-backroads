import React from "react"
import styled from "styled-components"

const StyledTitle = ({ title, subtitle }) => {
  return (
    <TitleWrapper>
      <h4>
        <span className="title">{title}</span>
        <span>{subtitle}</span>
      </h4>
    </TitleWrapper>
  )
}

/**
 * alternative way to export a styled component:
 * export default styled(StyledTitle)
 *
 * therefore we need to add className as an additional parameter in the component on top:
 * const StyledTitle = ({ title, subtitle, className }) => {
 *
 * <TitleWrapper> cannot be used anymore as parent Tag, we need to rewrite this to:
 * <div className={className}
 */
const TitleWrapper = styled.div`
  text-transform: uppercase;
  font-size: 2.3rem;
  margin-bottom: 2rem;
  h4 {
    text-align: center;
    letter-spacing: 7px;
    color: var(--primaryColor);
  }
  .title {
    color: var(--mainBlack);
  }
  span {
    display: block;
  }
  @media (min-width: 576px) {
    span {
      display: inline-block;
      margin: 0 0.35rem;
    }
  }
`

export default StyledTitle
