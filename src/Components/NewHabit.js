import styled from "styled-components";
import { useState, useContext } from "react";
import { ThreeDots } from "react-loader-spinner";

import UserContext from "./../assets/contexts/UserContext";

function NewHabit({ create, setCreate, loading, setLoading, createHabit }) {
  const [newHabit, setNewHabit] = useState({
    name: "",
    days: [],
  });

  const { weekdays } = useContext(UserContext);

  function selectDay(id) {
    const updatedDay = newHabit.days.includes(id)
      ? newHabit.days.filter((day) => day !== id)
      : [...newHabit.days, id];
    setNewHabit({ ...newHabit, days: updatedDay });
  }

  function cancelNewHabit(e) {
    e.preventDefault();
    resetInputData();
    setCreate(false);
  }

  function resetInputData() {
    setNewHabit({
      name: "",
      days: [],
    });
  }

  function submitData(e) {
    e.preventDefault(e);
    if (newHabit.days.length > 0) {
      setNewHabit({ ...newHabit });
      createHabit(newHabit);
      setLoading(true);
      resetInputData();
    } else {
      alert("Selecione pelo menos um dia da semana");
    }
  }

  return create ? (
    <Section>
      <form onSubmit={(e) => submitData(e)}>
        <input
          type="text"
          placeholder="nome do hábito"
          value={newHabit.name}
          onChange={(e) => setNewHabit({ ...newHabit, name: e.target.value })}
          required
          disabled={loading}
        />
        <div className="days">
          {weekdays.map((day) => {
            return (
              <Day
                key={day.id}
                color={
                  newHabit.days.includes(day.id)
                    ? { color: "#CFCFCF", border: "#CFCFCF", font: "#FFFFFF" }
                    : { color: "#FFFFFF", border: "#D4D4D4", font: "#DBDBDB" }
                }
                onClick={() => {
                  if (!loading) selectDay(day.id);
                }}
              >
                {day.name}
              </Day>
            );
          })}
        </div>
        <div className="buttons">
          <button className="cancel" onClick={(e) => cancelNewHabit(e)}>
            Cancelar
          </button>
          <button className="save" type="submit" disabled={loading}>
            {loading ? <ThreeDots color="#FFFFFF" width={40} /> : "Salvar"}
          </button>
        </div>
      </form>
    </Section>
  ) : (
    <></>
  );
}

const Section = styled.section`
  width: 100%;
  background-color: #ffffff;
  padding: 18px;
  margin-bottom: 29px;

  .days {
    display: flex;
    justify-content: space-between;
    width: 234px;
    margin-bottom: 29px;
  }

  input {
    width: 100%;
  }

  .buttons {
    display: flex;
    justify-content: flex-end;
    width: 100%;
  }

  .cancel {
    border: none;
    background-color: #ffffff;
    color: var(--light-blue);
    font-size: 16px;
    padding: 0px;
    margin-right: 23px;
  }

  .save {
    border: none;
    background-color: var(--light-blue);
    color: #ffffff;
    width: 84px;
    height: 35px;
    border-radius: 5px;
    font-size: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Day = styled.div`
  background-color: ${(props) => props.color.color};
  border: 1px solid ${(props) => props.color.border};
  color: ${(props) => props.color.font};
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
`;

export default NewHabit;
