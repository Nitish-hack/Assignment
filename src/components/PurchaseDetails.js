import React from "react";
import styled from "styled-components";
import graph from "../assets/images/wave-haikei.png";
const PurchaseContainer = styled.div`
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
  @media only screen and (max-width:1018px){
    width: 100%;

  }
  .imageContainer {
    img {
      width: 100%;
      /* height: 300px; */
    }
  }
  .title {
    opacity: 0.8;
   
  }
  p {
    opacity: 0.8;
    font-size: 0.9rem;
  }
  .description{
    white-space:nowrap;

  }

`;
const UserData = styled.div`
  display: flex;
  column-gap: 40px;
margin-top:10px;
  .heading {
    margin-top: 0px;
  }

  @media only screen and (max-width:433px){
    column-gap: 20px;
  }
`;
const PurchaseDetails = () => {
  return (
    <PurchaseContainer>
      <span className="title">PURCHASE DETAILS</span>
      <p >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac mi
        euismod, pharetra sapien non, dignissim quam. Donec euismod felis eu.
      </p>
      <UserData>
        <div>
          <p className="description">Status</p>
          <h1 className="heading">362</h1>
        </div>
        <div>
          <p className="description">New users</p>
          <h1 className="heading">187</h1>
        </div>
        <div>
          <p className="description">Chats</p>
          <h1 className="heading">524</h1>
        </div>
        <div>
          <p className="description">Feedbacks</p>
          <h1 className="heading">509</h1>
        </div>
      </UserData>
      <div className="imageContainer">
        <img src={graph} alt="graph" />
      </div>
    </PurchaseContainer>
  );
};
export default PurchaseDetails;
