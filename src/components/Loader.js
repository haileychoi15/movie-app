import React from "react";
import styled from "styled-components";
import { CgSpinner } from "react-icons/cg";

const LoadingBlock = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const LoadingCircle = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
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
        <LoadingBlock>
            <LoadingCircle>
                <CgSpinner />
            </LoadingCircle>
        </LoadingBlock>
    );
}

export default Loader;