import styled from "styled-components";

export const Button = styled.button`
  margin: 25px auto 0 auto;
  cursor: pointer;
  padding: var(--btn-padding);
  font-family: var(--secondary-font);
  font-size: var(--btn-text);
  color: var(--text-color);
  background: #fff;
  border: 1px solid rgba(96, 96, 96, 0.6);
  text-decoration: none;
  display: flex;
  align-items: center;
  width: fit-content;
  text-transform: capitalize;
  outline: none;
  transition: all 400ms;
`;
