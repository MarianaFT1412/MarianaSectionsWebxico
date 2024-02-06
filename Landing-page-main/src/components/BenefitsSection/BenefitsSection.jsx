import React from "react";
import styled from "styled-components";

function BenefitsSection() {
  return (
    <BenefitsSectionContainer>
      <h2>Transforma tu Carrera con un Portafolio Dinámico</h2>
      <p>
        Las personas necesitan un portafolio dinámico porque es una herramienta
        poderosa para mostrar su trabajo, habilidades y logros de una manera
        interactiva y atractiva.
      </p>
      <div className="cards-container">
        <div className="card">
          <span></span>
          <h3>Impresionar</h3>
          <p>Impresionar a clientes y empleadores potenciales</p>
        </div>
        <div className="card">
          <span></span>
          <h3>Mostrar</h3>
          <p>Mostrar proyectos en detalle</p>
        </div>
        <div className="card">
          <span></span>
          <h3>Actualizar</h3>
          <p>IActualizacion constante</p>
        </div>
        <div className="card">
          <span></span>
          <h3>Alcanzar</h3>
          <p>Alcanzar una audiencia global</p>
        </div>
        <div className="card">
          <span></span>
          <h3>Mejorar</h3>
          <p>Mejorar la presentación personal</p>
        </div>
        <div className="card">
          <span></span>
          <h3>Interactuar</h3>
          <p>Mayor interacción y engagement</p>
        </div>
      </div>
    </BenefitsSectionContainer>
  );
}

export default BenefitsSection;

const BenefitsSectionContainer = styled.div`
  height: auto;
  background-color: #e9e4ed;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    color: #241b35;
    margin: 3rem 0 0 0;
    font-size: xx-large;
    text-align: center;
  }

  p {
    width: 75%;
    color: #4d425f;
    text-align: center;
    font-size: large;
  }

  .cards-container {
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-wrap: wrap;
  }

  .card {
    width: 25rem;
    height: 16rem;
    margin: 1rem 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-style: solid;
    border-color: #4d425f;
    border-width: thin;
    background-color: #fff;
    border-radius: 15px;
    box-shadow: 7px 8px 34px -10px rgba(0, 0, 0, 0.68);
    -webkit-box-shadow: 7px 8px 34px -10px rgba(0, 0, 0, 0.68);
    -moz-box-shadow: 7px 8px 34px -10px rgba(0, 0, 0, 0.68);
  }

  .card span {
    width: 50px;
    height: 50px;
    background-color: pink;
    border-radius: 100%;
  }

  .card h3 {
    font-size: x-large;
    color: #241b35;
  }

  .card p {
    color: #4d425f;
  }
`;
