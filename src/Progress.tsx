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
  background-image: linear-gradient(to top, #5ee7df 0%, #b490ca 100%);
  box-shadow: 0 5 5 0px #144137;
  overflow: hidden;
`;

const Pop = styled.p`
  z-index: 2;
  color: #3e7ea3;
  font-size: 40px;
  font-weight: 5px;
  position: absolute;
  bottom: 5%;
  left: 3%;
`;

const BackButton = styled.button`
  font-size: 20px;
  z-index: 2;
  border: 2px solid #fff6f6;
  border-radius: 3em 0.5em 2em 0.5em/0.4em 2em 0.5em 3em;
  color: #fff9f9;
  text-decoration: none;
  text-align: center;
  position: absolute;
  bottom: 3%;
  left: 3%;
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
  position: relative;
  width: 200vw;
  height: 150vw;
  top: calc(100vh - 150vw);
  left: 50%;
  transform: translate(-50%, -75%);
  background: #fff;
  border-radius: 43%;
  animation: ${WaveMove} 4s linear infinite;
`;

const WaveFirst = styled(Wave)`
  content: "";
  position: relative;
  width: 200vw;
  height: 180vw;
  top: calc(100vh - 50vw);
  left: 50%;
  transform: translate(-50%, -75%);
  background: #fff;
  border-radius: 43%;
  animation: ${WaveMove} 4s linear infinite;
`;

const WaveSecond = styled(Wave)`
  content: "";
  position: relative;
  width: 200vw;
  height: 180vw;
  top: calc(100vh - 65vw);
  left: 50%;
  transform: translate(-50%, -75%);
  background: #fff;
  border-radius: 40%;
  animation: ${WaveMove} 4s linear infinite;
`;

const WaveThird = styled(Wave)`
  content: "";
  position: relative;
  width: 200vw;
  height: 180vw;
  top: calc(100vh - 70vw);
  left: 50%;
  transform: translate(-50%, -75%);
  background: #fff;
  border-radius: 40%;
  animation: ${WaveMove} 4s linear infinite;
`;

const WaveForth = styled(Wave)`
  content: "";
  position: relative;
  width: 200vw;
  height: 150vw;
  top: calc(100vh - 90vw);
  left: 50%;
  transform: translate(-50%, -75%);
  background: #fff;
  border-radius: 40%;
  animation: ${WaveMove} 4s linear infinite;
`;

const WaveFive = styled(Wave)`
  position: relative;
  width: 200vw;
  height: 170vw;
  top: calc(100vh - 100vw);
  left: 50%;
  transform: translate(-50%, -75%);
  background: #fff;
  border-radius: 40%;
  animation: ${WaveMove} 4s linear infinite;
`;

function Progress({ choseCount }: Props) {
  const Waves = [
    <WaveFirst />,
    <WaveSecond />,
    <WaveThird />,
    <WaveForth />,
    <WaveFive />,
  ];

  const { count } = useContext(countContext);
  return (
    <WaveWrapper>
      <Pop>完了タスク:{count}</Pop>
      <BackButton>
        <Link to="/">back</Link>
      </BackButton>
      {count === 0 ? (
        <WaveFirst />
      ) : count === 1 ? (
        <WaveSecond />
      ) : count === 2 ? (
        <WaveThird />
      ) : count === 3 ? (
        <WaveForth />
      ) : count === 4 ? (
        <WaveFive />
      ) : (
        <Wave />
      )}
    </WaveWrapper>
  );
}

export default Progress;
