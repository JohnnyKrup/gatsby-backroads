import styled from "styled-components"

const color = "blue"

/**
 * Arrow functions
 * destructuring would be possible as well: check https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Functions/Pfeilfunktionen
 * color: ${({ color }) => color};
 */
const Button = styled.button`
  /* color: red; */
  color: ${props => props.color};
  background: ${color};
  /* font-size: 1rem; */
  font-size: ${props => (props.big ? "2rem" : "1rem")};
  padding: 1rem;
  margin: 1rem;
`

export default Button
