import React from 'react';
import {Link} from 'react-router-dom';
import styled, { keyframes } from 'styled-components';

const WaveBox = styled.div`
    position: absolute;
    width: 80%;
    height: 150px;
    bottom: 10px;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #000;
    box-shadow: 0 5 5 0px #49ffd8;
    overflow: hidden;
`

const Wave = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    background: #49ffd8;
    box-shadow: inset 0 0 50px rgba(0,0,0,.5);
    &:before{
      background: #fff;
      animation: rotation 5s linear infinite;
      border-radius: 40%;
    }
    &:after{
      content: '';
      position: absolute;
      width: 200%;
      height: 150%;
      top:0;
      left: 50%;
      transform: translate(-50%, -75%);
      background: #fff;
      border-radius: 45%;
`

const WaveBody = keyframes`
    to{
        transform: translate(-50%, -75%) rotate(1turn);
`

function Progress() {
    return (
        <div>
            <header>
                <button>
                    <Link to="/">back</Link>
                </button>
            </header>
                <WaveBox>
                    <Wave></Wave>
                </WaveBox>
        </div>
    );
}

export default Progress;