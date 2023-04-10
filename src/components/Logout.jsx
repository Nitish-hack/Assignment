import React from "react";
import { useNavigate } from "react-router-dom";
import { BiLogIn } from "react-icons/bi";
import styled from "styled-components";
export default function Logout() {
  const navigate = useNavigate();
  const handleClick = async () => {
      localStorage.clear();
      navigate("/login");
  };
  return (
    <Button onClick={handleClick}>
      <BiLogIn />
    </Button>
  );
}

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  border-radius: 0.5rem;
  background-color: #9a86f3;
  border: none;
  font-size:2rem;
  cursor: pointer;
  position:fixed;
  bottom:10px;
  right:10px;  
  z-index:1000;
`;
