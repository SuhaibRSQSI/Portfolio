import React from "react";
import styled, { keyframes } from "styled-components";
import side_img from "../assets/img_side.jpg";

import working_emoji from "../assets/working-emoji.png";
import { Container } from "../GlobalStyles";

const StyledAbout = styled.section`
  background-color: #fff;
  padding: 15rem 0;
`;
const AboutContent = styled.div`
  align-items: center;
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: center;
`;

const rotate = keyframes`
    100%  {

      transform: rotate(1turn);
    }
  `;

const ImageSide = styled.div`
  position: relative;

  & .work_img {
    bottom: 72px;
    position: absolute;
    right: 133px;
    width: 6rem !important;
    z-index: 10;
  }
  & .img_side {
    border-radius: 1.7rem;
    height: 35rem;
    width: 41rem;
  }
  & span {
    background-color: #fff;
    border-radius: 50%;
    bottom: -33px;
    height: 19rem;
    position: absolute;
    right: 33px;
    width: 19rem;
  }
  & span img {
    -webkit-animation: rotate 9s linear infinite;
    animation: ${rotate} 9s linear infinite;
    width: 19rem;
  }
`;

const TextSide = styled.div`
  padding-right: 1.5rem;

  & h3 {
    color: #147efb;
    font-size: 1.7rem;
    font-weight: 700;
    margin-bottom: 1rem;
    text-transform: uppercase;
  }

  & h4 {
    color: #2d2e32;
    font-family: Poppins, sans-serif;
    font-size: 2.5rem;
    line-height: 1.4;
    margin-bottom: 2rem;
  }

  & p {
    color: #767676;
    font-family: Mulish, sans-serif;
    font-size: 1.7rem;
    font-weight: 500;
    line-height: 1.5;
  }
`;

export default function About() {
  return (
    <StyledAbout id="about">
      <Container>
        <AboutContent>
          <ImageSide>
            <img className="work_img" src={working_emoji} alt="emoji" />
            <img className="img_side" src={side_img} alt="laptop-with-coffee" />
            <span>
              <img
                src="https://www.stefantopalovic.com/static/media/text2.3d5aa6ba2d0632bb4e0572631c3f9dc2.svg"
                alt="mee"
                class="img-side__main-img"
              />
            </span>
          </ImageSide>
          <TextSide>
            <h3>About Me</h3>
            <h4>
              Front-end Developer
              <br />
              based in Chennai, India 📍
            </h4>
            <p>
              Hey, my name is Suhaib, and I'm a Frontend Developer. My passion
              is to create and develop a clean UI/UX for my users.
              <br />
              <br />
              My main stack currently is React/Next.js in combination with
              Tailwind CSS and TypeScript.
            </p>
          </TextSide>
        </AboutContent>
      </Container>
    </StyledAbout>
  );
}
