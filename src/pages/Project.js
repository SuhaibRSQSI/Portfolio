import React from "react";
import styled from "styled-components";
import { Container } from "../GlobalStyles";
const StyledProject = styled.section`
  background-color: #f9f9f9;
  padding: 15rem 0;
  & h2 {
    color: #2d2e32;
    font-size: 2.6rem;
    text-align: center;
  }
`;
export default function Project() {
  return (
    <StyledProject id="projects">
      <Container>
      <h2>New projects coming soon.. 🤠</h2>
      </Container>
    </StyledProject>
  );
}
