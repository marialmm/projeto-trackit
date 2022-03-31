import styled from "styled-components";
import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import UserContext from "./../assets/contexts/UserContext";

function Today() {
  const TOKEN = localStorage.getItem("token");
  const URL =
    "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today";

  const config = {
    headers: { Authorization: `Bearer ${TOKEN}` },
  };
  const { setVisibility } = useContext(UserContext);
  const [today, setToday] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setVisibility(true);
    const promise = axios.get(URL, config);
    promise.then((response) => {
      console.log(response.data);
    });
    promise.catch((err) => {
      console.log(`${err.response.status} - ${err.response.statusText}`);
      alert("Um erro aconteceu, tente novamente");
      navigate("/");
    });
  }, []);

  return <Main>hoje</Main>;
}

const Main = styled.main`
`;

export default Today;
