import React from "react";
import styled from "styled-components";
import { TiArrowUpThick } from "react-icons/ti";

const Button = styled.button`
  position: fixed;
  right: 30px;
  bottom: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: none;
  font-size: 60px;
  color: #343434;
  background-color: #fff;
  box-shadow: 0 5px 10px -2px rgba(50, 50, 93, 0.6);
  transition: box-shadow 150ms ease-in-out;
  & .icon {
    width: 40px;
    height: 40px;
  }
  &:hover {
    box-shadow: 0 8px 12px -3px rgba(50, 50, 93, 0.8);
  }
`;

function UpButton() {

    const onClick = () => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    }

    return (
        <Button onClick={onClick} >
            <TiArrowUpThick className="icon" />
        </Button>
    );
}

export default UpButton;