import { useContext } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";

import "react-circular-progressbar/dist/styles.css";
import UserContext from "./../assets/contexts/UserContext";

function Menu() {
  const { visibility, progress } = useContext(UserContext);

  return visibility ? (
    <Footer>
      <Link to="/habitos">Hábitos</Link>
      <Link to="/hoje" className="today">
        <CircularProgressbar
          value={progress}
          text={"Hoje"}
          background
          backgroundPadding={6}
          styles={buildStyles({
            backgroundColor: "var(--light-blue)",
            textColor: "#fff",
            pathColor: "#fff",
            trailColor: "transparent",
          })}
        />
      </Link>
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
  background-color: #ffffff;
  z-index: 2;

  a {
    color: var(--dark-blue);
    text-decoration: none;
    font-size: 18px;
    line-height: 22px;
  }

  a.today {
    width: 91px;
    height: 120px;
    margin-bottom: 10px;
  }
`;

export default Menu;
