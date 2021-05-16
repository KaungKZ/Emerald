import styled from "styled-components";

export const Section_Title = styled.div`
  font-family: var(--secondary-font);
  width: ${props => (props.fullWidth ? "100%" : "80%")};
  margin: 0 auto var(--item-margin) auto;
  display: flex;
  align-items: center;

  &.showcase-title {
    margin: 0 auto;
  }

  @media (max-width: 480px) {
    width: ${props => (props.fullWidth ? "100%" : "85%")};

    &.b-d-f-t {
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
    }
  }
`;

export const Section_Title_Text = styled.h1`
  border-radius: 9px 9px 0 0;
  background: var(--primary-light);
  padding: 10px 20px;
  font-size: var(--section-title-font-size);
  font-weight: 700;
  color: var(--light-text-color);
  text-decoration: underline;
  text-transform: capitalize;

  @media (max-width: 480px) {
    padding: 7px 18px;
  }

  @media (max-width: 330px) {
    padding: 7px 10px;
  }
`;
