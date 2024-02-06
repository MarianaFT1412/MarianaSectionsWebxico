import React from "react";
import styled from "styled-components";

function AboutUs() {
  return (
    <AboutUsContainer>
      <div className="column column-title">
        <h2>About us</h2>
      </div>
      <div className="column column-text">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et
          iaculis arcu. In hac habitasse platea dictumst. Suspendisse porttitor
          dolor sagittis sem commodo ornare. Sed porttitor vulputate orci,
          consectetur vestibulum metus iaculis id.{" "}
        </p>
      </div>
    </AboutUsContainer>
  );
}

export default AboutUs;

const AboutUsContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;

  .column {
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .column-title {
    width: 35%;
  }

  .column-text {
    width: 65%;
  }

  h2 {
    font-size: 2rem;
  }

  p {
    padding: 0 15px 0 0;
  }

  /* Tablet breakpoint */
  @media (max-width: 768px) {
    flex-direction: column;

    .column {
      width: 100%;
    }

    p {
      padding: 0 15px;
    }
  }
`;
