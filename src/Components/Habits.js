import { useContext, useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { BsFillPlusSquareFill } from "react-icons/bs";

import UserContext from "./../assets/contexts/UserContext";
import Habit from "./Habit";
import NewHabit from "./NewHabit";

function Habits() {
  const TOKEN = localStorage.getItem("token");
  const URL =
    "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits";

  const [habits, setHabits] = useState(["empty"]);
  const [create, setCreate] = useState(false);
  const [loading, setLoading] = useState(false);
  const { setVisibility, weekdays } = useContext(UserContext);
  const config = {
    headers: { Authorization: `Bearer ${TOKEN}` },
  };

  function requestHabits() {
    const promise = axios.get(URL, config);
    promise.then((response) => {
      setHabits(response.data);
    });
    promise.catch((err) => {
      console.log(`${err.response.status} - ${err.response.statusText}`);
      alert("Um erro aconteceu, tente novamente");
    });
  }

  useEffect(() => {
    setVisibility(true);
    requestHabits();
  }, []);

  function createHabit(habit) {
    console.log(habit);
    const promise = axios.post(URL, habit, config);
    promise.then((response) => {
      console.log(response.data);
      setHabits([...habits, response.data]);
      setCreate(false);
      setLoading(false);
    });
    promise.catch((err) => {
      console.log(`${err.response.status} - ${err.response.statusText}`);
      alert("Um erro aconteceu, tente novamente");
      setLoading(false);
    });
  }

  function deleteHabit(id) {
    const URLDelete = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}`
    const promise = axios.delete(URLDelete, config);
    promise.then(() => {
      requestHabits();
    });
    promise.catch((err) => {
      console.log(`${err.response.status} - ${err.response.statusText}`);
      alert("Um erro aconteceu, tente novamente");
    });
  }

  return habits[0] === "empty" ? (
    <></>
  ) : (
    <Main>
      <div>
        <h1>Meus Hábitos</h1>
        <BsFillPlusSquareFill onClick={() => setCreate(true)} />
      </div>
      <NewHabit
        create={create}
        setCreate={setCreate}
        createHabit={createHabit}
        loading={loading}
        setLoading={setLoading}
      />
      {habits.length === 0 ? (
        <p>
          Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para
          começar a trackear!
        </p>
      ) : (
        habits.map((habit, index) => {
          return (
            <Habit habit={habit} key={index} deleteHabit={deleteHabit} />
          );
        })
      )}
    </Main>
  );
}

const Main = styled.main`
  & > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
  }

  svg {
    font-size: 35px;
    color: var(--light-blue);
  }
`;

export default Habits;
