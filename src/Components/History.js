import styled from "styled-components";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import Calendar from "react-calendar";
import dayjs from "dayjs";

import UserContext from "./../assets/contexts/UserContext";
import 'react-calendar/dist/Calendar.css';
import 'dayjs/locale/pt-br';

function History() {
  const { setVisibility } = useContext(UserContext);

  const [history, setHistory] = useState([]);
  const [date, setDate] = useState(new Date());
  const [daysTracked, setDaysTracked] = useState({
    conclued: [],
    notConclued: []
  })
 
  const URL =
    "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/history/daily";
  const USER = JSON.parse(localStorage.getItem("user"));
  const TOKEN = USER.token;
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

  useEffect(()=>{
    history.forEach(date => {
      let conclued = true;
      date.habits.forEach(habit => {
        conclued = conclued && habit.done
      })
      if (conclued) {
        daysTracked.conclued.push(date.day)
      } else{
        daysTracked.notConclued.push(date.day)
      }
    })
    setDaysTracked({...daysTracked});
  }, [history])

  function formatDate(date){
    date=dayjs(date).format("DD/MM/YYYY");
    if(date!==dayjs().format("DD/MM/YYYY")){
      if (daysTracked.conclued.includes(date)){
        return "green"
      } else if(daysTracked.notConclued.includes(date)){
        return "red"
      }
    }
  }

  return (
    <Main>
      <h1>Histórico</h1>
      {Object.keys(history).length < 1 ? 
      <p>Em breve você poderá ver o histórico dos seus hábitos aqui!</p> : 
      <StyledCalendar 
        value={date}
        onChange={setDate}
        calendarType = "US"
        formatDay={(locate, date) => dayjs(date).format('DD')}
        onClickDay={(date)=>console.log(dayjs(date).locale("pt-br").format("DD/MM/YYYY"))}
        tileClassName={({date}) => {
          if(formatDate(date)=== "red"){
            return "red"
          } else if(formatDate(date) === "green"){
            return "green"
          }
        }}
      />
      }
    </Main>
  );
}

const Main = styled.main`
  h1 {
    margin-bottom: 17px;
  }
`;

const StyledCalendar = styled(Calendar)`
  width: 100%;
  border: none;
  border-radius: 10px;

  .red >*{
    background-color: #EA5766;
    padding: 9px;
    border-radius: 50%
  }

  .green >*{
    background-color: #8CC654;
    padding: 9px;
    border-radius: 50%
  }
`;


export default History;
