import React, { useState } from "react"
import { FaAngleDown } from "react-icons/fa"
import styled from "styled-components"

const Day = ({ day, info }) => {
  const [showInfo, setShowInfo] = useState(false)
  const toggleInfo = () => {
    setShowInfo(showInfo => !showInfo)
  }

  return (
    <Wrapper>
      <h4 className="day-h4">
        {day}
        <button className="btn" onClick={toggleInfo}>
          <FaAngleDown />
        </button>
      </h4>
      {showInfo && <p className="day-p">{info}</p>}
    </Wrapper>
  )
}

const Wrapper = styled.article`
  margin: 2rem 0;

  .day-h4 {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .btn {
    background: transparent;
    border: none;
    cursor: pointer;
    outline: none;
  }
  .btn svg {
    font-size: 1.5rem;
    color: var(--primaryColor);
  }
  .day-p {
    line-height: 2;
    transition: var(--mainTransition);
  }
  @media (min-width: 992px) {
    .day-h4 {
      width: 400px;
    }
  }
`

export default Day
