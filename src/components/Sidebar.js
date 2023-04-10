import React from "react";
import styled from "styled-components";
import {
  FaHome,
  FaUikit,
  FaWpforms,
  FaChartPie,
  FaStar,
  FaRegUser,
  FaFile,
  FaTable
} from "react-icons/fa";

const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
 
  height: 100%;
  padding-top: 10px;
  @media only screen and (max-width:678px){
    width:100%;
   overflow:scroll;
    flex-direction: row;
    padding-bottom:20px;
  }
   
`;
const ContainerItem = styled.div`
white-space:nowrap;
  display: flex;
  flex-direction: row;
  column-gap: 15px;
  ${'' /* width: 90%; */}

  padding: 10px 15px;
  margin-top: 10px;
  border: none;
  background-color: inherit;
  font-family: "Rubik", sans-serif;
  opacity: 0.6;

  border-radius: 6px;
  font-weight: bold;
  text-align: start;
  cursor: pointer;
  :hover {
    background-color: #f7f5ff;
    color: #03a9f4;
  }
`;

export default function Sidebar() {
  return (
    <SidebarContainer>
      <ContainerItem>
        <FaHome className="icons" />
        Dashboard
      </ContainerItem>
      <ContainerItem>
        <FaUikit className="icons" />
        UI Elements
      </ContainerItem>
      <ContainerItem>
        <FaWpforms className="icons" />
        Form elements
      </ContainerItem>
      <ContainerItem>
        <FaChartPie className="icons" />
        Charts
      </ContainerItem>
      <ContainerItem>
        <FaTable className="icons" />
        Tables
      </ContainerItem>
      <ContainerItem>
        <FaStar className="icons" />
        Icons
      </ContainerItem>
      <ContainerItem>
        <FaRegUser className="icons" />
        User Pages
      </ContainerItem>
      <ContainerItem>
        <FaFile className="icons" />
        Documentation
      </ContainerItem>
    </SidebarContainer>
  );
}
