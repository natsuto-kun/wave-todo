import React from "react";
import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";

const WaveWrapper = styled.div`
  min-height: 100vh;
  min-width: 100vh;
  position: relative;
`;

const WaveMove = keyframes`
  0%{
        transform: translate(-50%, -75%) rotate(0deg);
    }
  100%{
        transform: translate(-50%, -75%) rotate(180deg);
  }
`;

const WaveBox = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  bottom: 0;
  transform: translate(-50%, -50%);
  background: #6bffe6;
  box-shadow: 0 5 5 0px #144137;
  overflow: hidden;
`;

const Wave = styled.div`
  content: "";
  position: absolute;
  width: 200%;
  height: 150%;
  top: 0;
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
      <WaveBox>
        <Wave />
      </WaveBox>
    </WaveWrapper>
  );
}

export default Progress;
