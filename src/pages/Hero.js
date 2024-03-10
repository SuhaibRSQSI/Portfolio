import React from "react";
import styled, { keyframes } from "styled-components";
import profilePhoto from "../assets/01.jpg";
import profilePhoto2 from "../assets/02.jpg";

import { githubIcon, githubURL, linkedInIcon, linkedInURL } from "../Constants";
import { Container } from "../GlobalStyles";

const morph = keyframes`
 0%{
    border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
}
50% {
    border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%;
}
100% {
    border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
}
`;

const StyledHero = styled.section`
  background-color: #f9f9f9;
  display: flex;
  flex-direction: column;
  height: 100vh;
  position: relative;
  width: 100%;
`;

const HeroContent = styled.div`
  align-items: center;
  display: flex;
  gap: 10rem;
  height: 65rem;
  justify-content: center;
  position: relative;
`;

const HeroMain = styled.div`
  align-items: center;
  display: flex;
  gap: 10rem;
  justify-content: center;
  position: relative;
`;

const HeroText = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 50rem;
  position: relative;

  & h1 {
    color: #2d2e32;
    font-size: 5.5rem;
    line-height: 1.2;
    margin-bottom: 2rem;
    margin-top: 2rem;
  }
  & img {
    height: 6rem;
    position: absolute;
    right: 13rem;
    top: 8.7rem;
    width: 6rem;
  }
  & p {
    color: #555;
    font-family: Mulish, sans-serif;
    font-size: 1.8rem;
    font-weight: 500;
    line-height: 1.6;
  }

  & span {
    cursor: pointer;
    display: flex;
    gap: 1.3rem;
    margin: 2.5rem 0;
  }
  & span a {
    transition: all 0.2s;
  }
  & span a {
    color: #2d2e32;
    font-size: 3rem;
  }
`;

const HeroImg = styled.img`
  -webkit-animation: morph 8s ease-in-out infinite;
  animation: ${morph} 8s ease-in-out infinite;
  background-image: url("https://www.stefantopalovic.com/static/media/pfp_webp.f334283842f7b24cafd1.webp");
  background-position: 50%;
  background-repeat: no-repeat;
  background-size: cover;
  border: 3px solid #2d2e32;
  border-radius: 60% 40% 30% 70%/60% 30% 70% 40%;
  height: 35rem;
  position: relative;
  transition: all 1s ease-in-out;
  width: 35rem;
`;

const Skills = styled.div`
  align-items: center;
  bottom: 0;
  color: #767676;
  display: flex;
  font-size: 1.7rem;
  left: 0;
  position: absolute;

  & p {
    border-right: 2px solid rgba(45, 46, 50, 0.5);
    color: #2d2e32;
    font-family: Mulish, sans-serif;
    font-weight: 600;
    margin-right: 7rem;
    padding-right: 2rem;
  }
  & ul {
    display: flex;
    flex-wrap: wrap;
    gap: 3rem;
    list-style: none;
  }

  & ul li {
    display: flex;
    flex-wrap: wrap;
    gap: 3rem;
    list-style: none;
  }
`;

export default function Hero() {
  return (
    <StyledHero id="hero">
      <Container>
      <HeroContent>
        <HeroMain>
          <HeroText>
            <h1>Front-End React Developer</h1>
            <img
              src="https://www.stefantopalovic.com/static/media/waving.1bae5fcfb51082b5c2b4.png"
              alt="waving_hand"
            />
            <p>
              Hi, I'm Mohamed Suhaib. A passionate Front-end React Developer
              based in Chennai, India. 📍
            </p>
            <span>
              <a
                aria-label="linkedin"
                rel="noreferrer"
                target="_blank"
                href={linkedInURL}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="tabler-icon tabler-icon-brand-linkedin"
                >
                  <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
                  <path d="M8 11l0 5"></path>
                  <path d="M8 8l0 .01"></path>
                  <path d="M12 16l0 -5"></path>
                  <path d="M16 16v-3a2 2 0 0 0 -4 0"></path>
                </svg>
              </a>
              <a
                aria-label="github"
                rel="noreferrer"
                target="_blank"
                href={githubURL}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="tabler-icon tabler-icon-brand-github"
                >
                  <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
                </svg>
              </a>
            </span>
          </HeroText>
          <HeroImg src={profilePhoto  }></HeroImg>
        </HeroMain>
        <Skills>
          <p>Tech Stack</p>
          <ul>
            <li>
              <img
                src="https://skillicons.dev/icons?i=html,css"
                alt="skill-icon"
              />
            </li>
            <li>
              <img
                src="https://skillicons.dev/icons?i=js,ts"
                alt="skill-icon"
              />
            </li>
            <li>
              <img
                src="https://skillicons.dev/icons?i=react,next"
                alt="skill-icon"
              />
            </li>
            <li>
              <img
                src="https://skillicons.dev/icons?i=tailwind,scss"
                alt="skill-icon"
              />
            </li>
          </ul>
        </Skills>
      </HeroContent>
      </Container>
    </StyledHero>
  );
}
