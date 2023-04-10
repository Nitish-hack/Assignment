import React from "react";
import styled from "styled-components";
import { BiDownload, BiAddToQueue } from "react-icons/bi";
import { CiMemoPad, CiCalendar, CiUser } from "react-icons/ci";
import StatisticsCard from "./StatisticsCard";
import SalesDetails from "./SalesDetails";
import PurchaseDetails from "./PurchaseDetails";

const OuterContainer = styled.div`
  display: flex;
  font-family: "Rubik", sans-serif;
  flex-direction: column;
  padding: 20px 30px;
  

  @media only screen and (max-width:480px){
    padding: 10px 10px;

  }
`;
const StatisticsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap:wrap;

  @media only screen and (max-width:1272px){
    row-gap:20px;
  }
`;
const HeadingContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  button {
    /* margin-left: auto; */
    margin-right:10px;
    white-space: nowrap;
    font-size: 15px;
    font-weight: bold;
    color: white;
    display: flex;
    flex-direction: row;
    align-items: center;
    column-gap: 5px;
    padding: 12px 20px;
    border-radius: 30px;
    background-color: #03a9f4;
    border: none;

    .reporticon {
      font-size: 18px;
    }
  }
`;

const ContentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  flex-wrap:wrap;
 
`;

const Statistics = () => {
  return (
    <OuterContainer>
      <HeadingContainer>
        <h3>RoyalUI Dashboard</h3>
        <button>
          <CiMemoPad className="reporticon" /> <span>Report</span>
        </button>
      </HeadingContainer>
      <StatisticsContainer>
        <StatisticsCard
          title="SALES"
          Value="34040"
          icon={<CiCalendar />}
          percentage="3.14%"
          gain={false}
        />
        <StatisticsCard
          title="REVENUE"
          Value="47033"
          icon={<CiUser />}
          percentage="3.14%"
          gain={false}
        />
        <StatisticsCard
          title="DOWNLOADS"
          Value="40016"
          icon={<BiDownload />}
          percentage="3.14%"
          gain={true}
        />
        <StatisticsCard
          title="RETURNS"
          Value="61344"
          icon={<BiAddToQueue />}
          percentage="3.14%"
          gain={true}
        />
      </StatisticsContainer>

      <ContentContainer>
        <SalesDetails />
        <PurchaseDetails />
      </ContentContainer>
    </OuterContainer>
  );
};
export default Statistics;
