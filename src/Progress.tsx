import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { countContext } from "./contexts/countContext";

interface Props {
  choseCount: number;
}

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

const WaveFirst = styled(Wave)`
  content: "";
  position: absolute;
  width: 200vw;
  height: 150vw;
  top: calc(100vh - 100vw);
  left: 50%;
  transform: translate(-50%, -75%);
  background: #fff;
  border-radius: 40%;
  animation: ${WaveMove} 4s linear infinite;
`;

const WaveSecond = styled(Wave)`
  content: "";
  position: absolute;
  width: 200vw;
  height: 150vw;
  top: calc(100vh - 120vw);
  left: 50%;
  transform: translate(-50%, -75%);
  background: #fff;
  border-radius: 40%;
  animation: ${WaveMove} 4s linear infinite;
`;

const WaveThird = styled(Wave)`
  content: "";
  position: absolute;
  width: 200vw;
  height: 150vw;
  top: calc(100vh - 100vw);
  left: 50%;
  transform: translate(-50%, -75%);
  background: #fff;
  border-radius: 40%;
  animation: ${WaveMove} 4s linear infinite;
`;

const WaveForth = styled(Wave)`
  content: "";
  position: absolute;
  width: 200vw;
  height: 150vw;
  top: calc(100vh - 100vw);
  left: 50%;
  transform: translate(-50%, -75%);
  background: #fff;
  border-radius: 40%;
  animation: ${WaveMove} 4s linear infinite;
`;

const WaveFive = styled(Wave)`
  top: 0px;
`;

function Progress({ choseCount }: Props) {
  const Waves = [
    <WaveFirst />,
    <WaveSecond />,
    <WaveThird />,
    <WaveForth />,
    <WaveFive />,
  ];

  const WaveIf = (choseCount: number) => Waves[choseCount];

  const { count } = useContext(countContext);
  return (
    <WaveWrapper>
      <header>
        <p>{count}</p>
        <button>
          <Link to="/">back</Link>
        </button>
      </header>
      <WaveThird />
      {choseCount === 0 ? (
        <WaveFirst />
      ) : choseCount === 1 ? (
        <WaveSecond />
      ) : choseCount === 2 ? (
        <WaveThird />
      ) : choseCount === 3 ? (
        <WaveForth />
      ) : (
        <WaveFive />
      )}
    </WaveWrapper>
  );
}

export default Progress;
