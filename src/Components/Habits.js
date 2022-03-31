import { useContext, useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

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

  useEffect(() => {
    setVisibility(true);
    const promise = axios.get(URL, config);
    promise.then((response) => {
      console.log(response.data);
      setHabits(response.data);
      console.log(habits);
    });
    promise.catch((err) => {
      console.log(`${err.response.status} - ${err.response.statusText}`);
      alert("Um erro aconteceu, tente novamente");
    });

    // const test = [
    //   {
    //     id: 1,
    //     name: "Nome do hábito",
    //     days: [1, 3, 5]
    //   },
    //   {
    //     id: 2,
    //     name: "Nome do hábito 2",
    //     days: [1, 3, 4, 6]
    //   }
    // ];

    // setHabits(test);
  }, []);

  function createHabit(habit) {
    console.log(habit);
    const promise = axios.post(URL, habit, config);
    promise.then((response) => {
      console.log(response.data);
      setHabits([...habits, response.data]);
      setCreate(false);
      setLoading(false)
    })
  }

  return habits[0] === "empty" ? (
    <></>
  ) : (
    <Main>
      <div>
        <h1>Meus Hábitos</h1>
        <div className="button" onClick={() => setCreate(true)}>
          <ion-icon name="add-sharp"></ion-icon>
        </div>
      </div>
      <NewHabit create={create} setCreate={setCreate} createHabit={createHabit} loading={loading} setLoading={setLoading} />
      {habits.length === 0 ? (
        <p>
          Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para
          começar a trackear!
        </p>
      ) : (
        habits.map(({ name, days }) => {
          return <Habit name={name} days={days} />;
        })
      )}
    </Main>
  );
}

const Main = styled.main`
  & > div {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
  }
  .button {
    width: 40px;
    height: 35px;
    background-color: var(--light-blue);
    border-radius: 5px;
    position: relative;
  }

  .button ion-icon {
    color: #ffffff;
    font-size: 29px;
    position: absolute;
    top: 4px;
    left: 5px;
  }
`;

export default Habits;
