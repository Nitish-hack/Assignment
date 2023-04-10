import React from "react";
import styled from "styled-components";
const CardContainer = styled.div`
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  text-align: start;
  width: 20vw;
  max-width: 230px;
min-width:150px;
  padding: 20px;
  background-color: white;
  display: flex;
  flex-direction: column;
  margin-right: 10px;
 
    margin-top:10px;
  @media only screen and (max-width:828px){
    width:200px;
  }
  
  @media only screen and (max-width:439px){
    padding: 10px 5px;
    margin-right:5px;
    width:170px;
  }

  .title {
    margin-bottom: 12px;
    opacity: 0.8;
    font-size: smaller;
  }
  .valueContainer {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    font-size: 30px;
    font-weight: bold;
    margin-bottom: 8px;
  }
  .percentage {
    color: ${(props) => (props.gain ? "green" : "red")};
    margin-right: 5px;
  }
`;
const StatisticsCard = ({ title, Value, icon, percentage, gain }) => {
  return (
    <CardContainer gain={gain}>
      <span className="title">{title}</span>
      <div className="valueContainer">
        <span>{Value}</span>
        <span style={{marginLeft:"10px" }}>{icon}</span>
      </div>
      <span>
        <span className="percentage">{percentage}</span> [30days]
      </span>
    </CardContainer>
  );
};
export default StatisticsCard;
