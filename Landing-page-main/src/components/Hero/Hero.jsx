import React from "react";
import styled from "styled-components";
import internetImage from "../../assets/images/internet.svg";

function Hero() {
  return (
    <HeroContainer>
      <h2>WEBXICO</h2>
      <img src={internetImage}></img>
    </HeroContainer>
  );
}

export default Hero;

const HeroContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  position: relative;
  z-index: -2;
  background: rgb(51, 51, 51);
  background: linear-gradient(
    180deg,
    rgba(51, 51, 51, 1) 0%,
    rgba(95, 66, 72, 1) 11%,
    rgba(228, 190, 255, 1) 66%,
    rgba(255, 255, 255, 1) 100%
  );

  h2 {
    font-size: 5rem;
    margin: 0;
    color: white;
  }

  img {
    width: 40%;
  }
`;
