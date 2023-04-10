import React from "react";
import styled from "styled-components";
import graph from "../assets/images/graph.png";
import { AiOutlineDown } from "react-icons/ai";
const SalesContainer = styled.div`
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  background-color: white;
  width: 45%;
  text-align: start;
  padding: 20px;
margin-right:10px;
  @media only screen and (max-width:1096px){
    width: 100%;

  }
  .imageContainer {
    img {
      width: 100%;
      /* height: 300px; */
    }
  }
  .filters {
    display: flex;
    flex-direction: row;
    padding-right: 20px;
    align-items: center;
    & :nth-child(1) {
      flex: 1;
      text-align: center;
      opacity: 0.8;
      justify-self: flex-end;
      #down {
        margin-left: 8px;
        margin-bottom: -3px;
      }
    }
    & :nth-child(2) {
      margin-left: auto;
      color: #03a9f4;
    }
  }
  .title {
    opacity: 0.8;
  }
  p {
    opacity: 0.8;
    font-size: 0.9rem;
  }
`;
const SalesDetails = () => {
  return (
    <SalesContainer>
      <span className="title">SALES DETAILS</span>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac mi
        euismod, pharetra sapien non, dignissim quam. Donec euismod felis eu.
      </p>
      <div className="imageContainer">
        <img src={graph} alt="graph" />
      </div>
      <div className="filters">
        <span>
          Today
          <AiOutlineDown id="down" />
        </span>
        <span>View All</span>
      </div>
    </SalesContainer>
  );
};
export default SalesDetails;
