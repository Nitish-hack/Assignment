import React, { useEffect } from "react";
import styled from "styled-components";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import Statistics from "./Statistics";
import { useNavigate } from "react-router-dom";
import Logout from "./Logout";

const HomeBox= styled.div`
  margin: 10px; 
  margin-top: 15px;
box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
@media only screen and (max-width: 625px) {
margin : 0;
padding:0;

}
`

const HomeContainer = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #dddce1;


  @media only screen and (max-width:678px){
  
    flex-direction: column;
  }
`;

const Home = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)) {
      navigate("/login");
    }
  }, []);

  return (
    <>
    <HomeBox>
    <Navbar />
    <HomeContainer>
      <Sidebar />

      <Statistics />
    </HomeContainer>
    </HomeBox>
    <Logout />
    </>
  );
};
export default Home;
