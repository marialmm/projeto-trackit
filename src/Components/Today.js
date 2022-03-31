import styled from "styled-components";
import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import UserContext from "./../assets/contexts/UserContext";
import TodayHabit from "./TodayHabit";

function Today() {
  const TOKEN = localStorage.getItem("token");
  const URL =
    "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today";

  const config = {
    headers: { Authorization: `Bearer ${TOKEN}` },
  };

  const { setVisibility, progress, setProgress } = useContext(UserContext);
  const [today, setToday] = useState(["empty"]);
  const navigate = useNavigate();

  useEffect(() => {
    setVisibility(true);
    const promise = axios.get(URL, config);
    promise.then((response) => {
      console.log(response.data);
      setToday(response.data);
    });
    promise.catch((err) => {
      console.log(`${err.response.status} - ${err.response.statusText}`);
      alert("Um erro aconteceu, tente novamente");
      navigate("/");
    });
  }, []);

  return (today[0] === "empty" ? (
    <></>
  ) : (
  <Main color_p={progress === 0 ? "#BABABA" : "var(--green)"}>
    <h1>Dia de hoje</h1>
    <p>{progress === 0 ? "Nenhum hábito concluído ainda" : `${progress}% dos hábitos concluídos`}</p>
    {today.length>0 ? 
    today.map((habit) => {
      console.log(habit);
      return(
        <TodayHabit habit={habit} key={habit.id} />) 
      
  }) :
    <></>
  }
  </Main>)
  )
}

const Main = styled.main`

  p{
    color: ${props => props.color_p};
  }
`;

export default Today;
