import React, { useState } from "react";
import styled, { css } from "styled-components";
import { devices } from "../GlobalStyles";

const StyledHeader = styled.nav`
  align-items: center;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.09);
  display: flex;
  font-size: 1.7rem;
  height: auto;
  justify-content: space-between;
  left: 0;
  padding: 32px 40px 32px 50px;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 200;

  & .logo {
    color: #2d2e32;
    cursor: pointer;
      }
  & ul {
    display: flex;
    gap: 2rem;
    list-style: none;
  }
  & ul a {
    color: #2d2e32;
    font-weight: 600;
    text-decoration: none;
    transition: all 0.23s;
  }

  & svg {
    cursor: pointer;
    display: none;
    font-size: 2.3rem;
  }

  @media only screen and (${devices.md}) {
    & svg {
      display: flex;
    }
    & ul a {
      display: none;
    }
  }
`;
const MobileNav = styled.div`
  align-items: center;
  background-color: #fff;
  display: flex;
  height: 100vh;
  justify-content: center;
  left: 0;
  position: fixed;
  text-align: center;
  top: 0;
  transition: all 0.3s ease-in-out;
  width: 100%;
  z-index: 300;

  & span {
    cursor: pointer;
    font-size: 3.3rem;
    position: absolute;
    right: 4rem;
    top: 2rem;
  }
  & span:hover {
    color: #147efb;
    transition: all 0.3s;
  }
  & ul {
    display: flex;
    flex-direction: column;
    font-size: 2.3rem;
    gap: 4rem;
    list-style: none;
  }
  & ul a {
    display: flex;
  }
  ${(props) => 
    props.toggle === true &&
      css`
        left: 0 !important;
      `
  }

  ${(props) => 
    props.toggle === false &&
      css`
        left: -100% !important;
      `
  }
`;
export default function Header() {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <StyledHeader>
      <h3 className="logo">Suhaib.dev</h3>
      <ul>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
        <li>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="mobile-menu"
            onClick={() => setToggleMenu(!toggleMenu)}
          >
            <path d="M4 6l16 0"></path>
            <path d="M4 12l16 0"></path>
            <path d="M4 18l16 0"></path>
          </svg>
        </li>
      </ul>
      {toggleMenu && (
        <MobileNav toggle = {toggleMenu}>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              class="tabler-icon tabler-icon-x"
              onClick={() => setToggleMenu(!toggleMenu)}
            >
              <path d="M18 6l-12 12"></path>
              <path d="M6 6l12 12"></path>
            </svg>
          </span>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </MobileNav>
      )}
    </StyledHeader>
  );
}
