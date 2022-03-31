import styled from "styled-components";
import { useContext, useEffect, useState } from "react";
import axios from "axios";

import UserContext from "./../assets/contexts/UserContext";

function History() {
  const { visibility, setVisibility } = useContext(UserContext);

  const [history, setHistory] = useState([]);
  const URL =
    "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/history/daily";
  const TOKEN = localStorage.getItem("token");
  const config = {
    headers: { Authorization: `Bearer ${TOKEN}` },
  };

  useEffect(() => {
    setVisibility(true);
    const promise = axios.get(URL, config);
    promise.then((response) => {
      console.log(response.data);
      setHistory(response.data);
    });
    promise.catch((err) => {
      console.log(`${err.response.status} - ${err.response.statusText}`);
      alert("Um erro aconteceu, tente novamente");
    });
  }, []);

  return (
    <Main>
      <h1>Histórico</h1>
      <p>Em breve você poderá ver o histórico dos seus hábitos aqui!</p>
    </Main>
  );
}

const Main = styled.main`
  h1 {
    margin-bottom: 17px;
  }
`;

export default History;
