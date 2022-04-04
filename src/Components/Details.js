import styled from "styled-components";
import { BsFillCheckCircleFill, BsFillXCircleFill } from "react-icons/bs";

function Details({ details }) {
  const { day, habits } = details;

  return (
    <Section>
      <h3>{day}</h3>
      {habits.map((habit, index) => {
        return (
          <div
            className={habit.done ? "conclued" : "notConclued"}
            key={index}
          >
            {habit.done ? <BsFillCheckCircleFill /> : <BsFillXCircleFill />}
            <p>{habit.name}</p>
          </div>
        );
      })}
    </Section>
  );
}

const Section = styled.section`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;

  h3 {
    color: var(--dark-blue);
    font-size: 20px;
  }

  div {
    display: flex;
    align-items: center;
    width: 80%;
    margin-top: 10px;
  }

  div svg {
    margin-right: 15px;
    font-size: 20px;
  }

  div.conclued{
      color: #8cc654;
  }

  div.notConclued{
    color: #ea5766;
  }
`;

export default Details;
