import { useContext } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import UserContext from "./../assets/contexts/UserContext";

function Menu() {
  const { visibility } = useContext(UserContext);

  return visibility ? (
    <Footer>
      <Link to="/habitos">Hábitos</Link>
      <Link to="/hoje">Hoje</Link>
      <Link to="historico">Histórico</Link>
    </Footer>
  ) : (
    <></>
  );
}

const Footer = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: #FFFFFF;
  z-index: 2;

  a {
    color: var(--dark-blue);
    text-decoration: none;
    font-size: 18px;
    line-height: 22px;
  }
`;

export default Menu;
