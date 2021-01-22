import React from "react";
import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";

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
  width: 800px;
  height: 800px;
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
    <div>
      <header>
        <button>
          <Link to="/">back</Link>
        </button>
      </header>
      <WaveBox>
        <Wave />
      </WaveBox>
    </div>
  );
}

export default Progress;
