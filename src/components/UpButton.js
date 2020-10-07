import React from "react";
import styled from "styled-components";
import { HiArrowCircleUp } from "react-icons/hi";

const Button = styled.button`
  position: fixed;
  right: 20px;
  bottom: 20px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: none;
  font-size: 60px;
  color: #bac8ff;
  background-color: #fff;
  transition: box-shadow 150ms ease-in-out;
  & .icon {
    position: absolute;
    top: -10px;
    left: -10px;
  }
  &:hover {
    box-shadow: 0 5px 10px -2px rgba(50, 50, 93, 0.9);
  }
`;

function UpButton() {

    const onClick = () => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    }

    return (
        <Button onClick={onClick} >
            <HiArrowCircleUp className="icon" />
        </Button>
    );
}

export default UpButton;