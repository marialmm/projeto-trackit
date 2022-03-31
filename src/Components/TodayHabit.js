import styled from "styled-components";
import { useState, useContext } from "react";
import { BsCheckSquareFill } from "react-icons/bs";

import UserContext from "./../assets/contexts/UserContext";

function TodayHabit({ habit }) {
  const { name, done, currentSequence, highestSequence } = habit;

  return (
    <Section>
      <h3>{name}</h3>
      <p>Sequência atual: {currentSequence} dias</p>
      <p>Seu recorde: {highestSequence} dias</p>
      <BsCheckSquareFill />
    </Section>
  );
}

const Section = styled.section`
  width: 100%;
  height: 94px;
  background-color: #ffffff;
  margin-bottom: 10px;
  padding: 14px;
  position: relative;

  h3 {
    color: var(--gray);
    font-size: 20px;
    line-height: 25px;
    margin-bottom: 7px;
  }

  p {
    font-size: 13px;
    line-height: 16px;
    color: #666666;
  }

  svg{
    color: #EBEBEB;
    font-size: 71px;
    position: absolute;
    top: 13px;
    right: 13px;
  }
`;

export default TodayHabit;
