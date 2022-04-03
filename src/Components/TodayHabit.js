import styled from "styled-components";
import { BsCheckSquareFill } from "react-icons/bs";
import axios from "axios";

function TodayHabit({ habit, config, requestTodayHabits }) {
  const { name, done, currentSequence, highestSequence, id } = habit;

  function toggleHabit(type) {
    const CHECK_URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/${type}`;
    const promise = axios.post(CHECK_URL, {}, config);
    promise.then(() => {
      requestTodayHabits();
    });
    promise.catch((err) => {
      console.log(`${err.response.status} - ${err.response.statusText}`);
      alert("Um erro aconteceu, tente novamente");
    });
  }

  return (
    <Section
      color={{
        check: done ? "var(--green)" : "#EBEBEB",
        current: done ? "var(--green)" : "var(--gray)",
        highest:
          done && currentSequence === highestSequence
            ? "var(--green)"
            : "var(--gray)",
      }}
    >
      <h3>{name}</h3>
      <p className="sequence">
        Sequência atual: <span className="current">{currentSequence} dias</span>
      </p>
      <p className="sequence">
        Seu recorde: <span className="highest">{highestSequence} dias</span>
      </p>
      <BsCheckSquareFill
        onClick={() => toggleHabit(done ? "uncheck" : "check")}
      />
    </Section>
  );
}

const Section = styled.section`
  width: 100%;
  height: 94px;
  background-color: #ffffff;
  margin-bottom: 10px;
  padding: 14px;
  position: relative;

  h3 {
    color: var(--gray);
    font-size: 20px;
    line-height: 25px;
    margin-bottom: 7px;
  }

  .sequence {
    font-size: 13px;
    line-height: 16px;
    color: var(--gray);
  }

  .current {
    color: ${(props) => props.color.current};
  }

  .highest {
    color: ${(props) => props.color.highest};
  }

  svg {
    color: ${(props) => props.color.check};
    font-size: 71px;
    position: absolute;
    top: 13px;
    right: 13px;
  }
`;

export default TodayHabit;
