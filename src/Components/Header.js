import { useContext } from "react";
import styled from "styled-components";

import UserContext from "./../assets/contexts/UserContext";
import trackit from "./../assets/midias/TrackIt.png";

function Header() {
  const { visibility } = useContext(UserContext);
  const image = localStorage.getItem("image");

  return visibility ? (
    <Div>
      <img src={trackit} alt="TrackIt" />
      <img src={image} alt="imagem" />
    </Div>
  ) : (
    <></>
  );
}

const Div = styled.header`
  background-color: var(--dark-blue);
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 18px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 2;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);

  img:first-child {
    width: 97px;
  }

  img:last-child {
    width: 51px;
height: 51px;
border-radius: 98.5px;
  }
`;

export default Header;
