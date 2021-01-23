import React from "react";
import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";

const WaveWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  position: relative;
  bottom: 0;
  background: #6bffe6;
  box-shadow: 0 5 5 0px #144137;
  overflow: hidden;
`;

const WaveMove = keyframes`
  0%{
        transform: translate(-50%, -75%) rotate(0deg);
    }
  100%{
        transform: translate(-50%, -75%) rotate(180deg);
  }
`;

const Wave = styled.div`
  content: "";
  position: absolute;
  width: 200vw;
  height: 150vw;
  top: calc(100vh - 85vw);
  left: 50%;
  transform: translate(-50%, -75%);
  background: #fff;
  border-radius: 40%;
  animation: ${WaveMove} 4s linear infinite;
`;

function Progress() {
  return (
    <WaveWrapper>
      <header>
        <button>
          <Link to="/">back</Link>
        </button>
      </header>
      <Wave />
    </WaveWrapper>
  );
}

export default Progress;
