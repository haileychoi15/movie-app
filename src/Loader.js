import React from "react";
import styled from "styled-components";
import { CgSpinner } from "react-icons/cg";

const LoadingCircle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  color: #000;
  font-size: 60px;
  animation-name: loading;
  animation-duration: 500ms;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
  
  @keyframes loading {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

function Loader() {
    return (
        <LoadingCircle>
            <CgSpinner />
        </LoadingCircle>
    );
}

export default Loader;