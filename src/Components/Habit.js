import styled from "styled-components";
import { useContext } from "react";
import { BsTrash } from "react-icons/bs";

import UserContext from "./../assets/contexts/UserContext";

function Habit({ habit, deleteHabit }) {
  const { weekdays } = useContext(UserContext);

  const {name, id, days} = habit 
  
  return (
    <Section>
      <p>{name}</p>
      <BsTrash className="trash" onClick={()=>{
        if (window.confirm('Tem certeza que deseja apagar o hábito?')) deleteHabit(id)}}
         />
      <div>
        {weekdays.map((day) => {
          return (
            <Div
              key={day.id}
              color={
                days.includes(day.id)
                  ? { color: "#CFCFCF", border: "#CFCFCF", font: "#FFFFFF" }
                  : { color: "#FFFFFF", border: "#D4D4D4", font: "#DBDBDB" }
              }
            >
              {day.name}
            </Div>
          );
        })}
      </div>
    </Section>
  );
}

const Section = styled.section`
  margin-bottom: 10px;
  height: 91px;
  background-color: #ffffff;
  border-radius: 5px;
  padding: 15px;
  position: relative;

  & > div {
    display: flex;
    width: 234px;
    justify-content: space-between;
    margin-top: 8px;
  }

  svg.trash {
    position: absolute;
    color: var(--gray);
    font-size: 20px;
    right: 10px;
    top: 11px;
  }
`;

const Div = styled.div`
    background-color: ${props => props.color.color};
    border: 1px solid ${props => props.color.border};
    color: ${props => props.color.font};
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
`;

export default Habit;
