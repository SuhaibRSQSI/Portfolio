import React from "react";
import styled from "styled-components";
import { githubIcon, linkedInIcon } from "../Constants";
import { Container } from "../GlobalStyles";

const StyledFooter = styled.footer`
  background-color: #2d2e32;
  padding: 5rem 0;
  width: 100%;
  align-items: center;
  & div {
    display: flex;
    justify-content: space-between;
  }
`;
const Icon = styled.div`
  align-items: center;
  display: flex;
  gap: 2rem;
  justify-content: center;
  margin-top: 1rem;
`;
const FooterText = styled.h3`
  color: #fff;
  font-size: 1.7rem;
`;
const IconText = styled.a`
  color: #fff;
  font-size: 2.3rem;
`;
export default function Footer() {
  return (
    <StyledFooter>
      <Container>
        <FooterText>Copyright © 2024. All rights are reserved</FooterText>
        <Icon>
          <IconText
            aria-label="linkedin"
            target="_blank"
            rel="noreferrer"
            href=""
            alt="linkedinIcon"
          >
            {" "}
            {linkedInIcon}{" "}
          </IconText>
          <IconText
            aria-label="github"
            target="_blank"
            rel="noreferrer"
            href=""
            alt="githubIcon"
          >
            {" "}
            {githubIcon}{" "}
          </IconText>
        </Icon>
      </Container>
    </StyledFooter>
  );
}
