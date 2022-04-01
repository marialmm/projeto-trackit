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

  function updateProgress(today){
    if(today.length > 0 && today[0] !== "empty"){
      console.log(today);
      const total = today.length;
      let done = 0;
      today.forEach((habit) =>{
        if(habit.done === true){
          done ++;
        }
      });
      const currentProgress = (done/total) * 100;
      setProgress(currentProgress);
      console.log(currentProgress);
    }
    
  }

  function requestTodayHabits(){
    const promise = axios.get(URL, config);
    promise.then((response) => {
      setToday(response.data);
      updateProgress(response.data);
    });
    promise.catch((err) => {
      console.log(`${err.response.status} - ${err.response.statusText}`);
      alert("Um erro aconteceu, tente novamente");
      navigate("/");
    });
  }

  useEffect(() => {
    setVisibility(true);
    requestTodayHabits();

  }, []);

  return (today[0] === "empty" ? (
    <></>
  ) : (
  <Main color_p={progress === 0 ? "#BABABA" : "var(--green)"}>
    <h1>Dia de hoje</h1>
    <p>{progress === 0 ? "Nenhum hábito concluído ainda" : `${progress.toFixed(0)}% dos hábitos concluídos`}</p>
    <div>
      {today.length>0 ? 
      today.map((habit) => {
        return(
          <TodayHabit habit={habit} key={habit.id} config={config} requestTodayHabits={requestTodayHabits} />) 
        
    }) :
      <></>
    }
    </div>
  </Main>)
  )
}

const Main = styled.main`

  p{
    color: ${props => props.color_p};
  }

  div{
    margin-top: 29px;
  }
`;

export default Today;
