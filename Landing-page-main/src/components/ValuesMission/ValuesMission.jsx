import React from "react";
import styled from "styled-components";

function ValuesMission() {
  return (
    <ValuesMissionContainer>
      <div className="column column-mission">
        <h2>Our mission</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et
          iaculis arcu. In hac habitasse platea dictumst. Suspendisse porttitor
          dolor sagittis sem commodo ornare. Sed porttitor vulputate orci,
          consectetur vestibulum metus iaculis id. Ut aliquam dui vitae nunc
          efficitur, et commodo elit malesuada.
        </p>
      </div>
      <div className="column column-values">
        <h2>Our values</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et
          iaculis arcu. In hac habitasse platea dictumst. Suspendisse porttitor
          dolor sagittis sem commodo ornare. Sed porttitor vulputate orci,
          consectetur vestibulum metus iaculis id. Ut aliquam dui vitae nunc
          efficitur, et commodo elit malesuada.
        </p>
      </div>
    </ValuesMissionContainer>
  );
}

export default ValuesMission;
const ValuesMissionContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;

  .column {
    width: 50%;
    height: 100vh;
    padding: 0 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  .column-mission {
    background-color: #e0e0e0;
    color: #241b35;
  }

  .column-values {
    background-color: #241b35;
    color: white;
  }

  @media (max-width: 768px) {
    height: 100vh;
    flex-direction: column;

    .column {
      width: 100%;
      padding: 1rem;
    }
  }
`;
