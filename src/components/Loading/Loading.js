import React from 'react';
import styled, { keyframes } from 'styled-components';

import css from "./Loading.module.css";

const commonStyle = {
    margin: 'auto',
    position: 'relative',
    left: 'calc(50vw - 200px)',
    right: 0,
    top: '50vh',
    bottom: 0
};

const sizeItem = {
    small: '10px',
    default: '12px',
    large: '24px'
}

const sizeContainer = {
    small: '24px',
    default: '30px',
    large: '36px'
}


const rollOne = keyframes`
  0%,
  20% {
    transform: rotate(0deg);
    opacity: 1;
  }
  50% {
    transform: rotate(180deg);
    opacity: 1;
  }
  60%,
  70% {
    transform: rotate(180deg);
    opacity: 0;
  }
  100% {
    transform: rotate(180deg);
    opacity: 0;
  }
`;

const rollTwo = keyframes`
  0%,
  50% {
    transform: rotate(0deg) translateX(0);
    opacity: 0;
  }
  51% {
    transform: rotate(0deg) translateX(0);
    opacity: 1;
  }
  70% {
    transform: rotate(0deg) translateX(-100%);
    opacity: 1;
  }
  90% {
    transform: rotate(180deg) translateX(-100%);
    opacity: 1;
  }
  100% {
    transform: rotate(180deg) translateX(-100%);
    opacity: 1;
  }
`;

const moveLeft = keyframes`
  0%,
  51% {
    transform: translateX(0);
  }
  70% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(-100%);
  }
`


const LoadContainer = styled.div`
  width: ${props => sizeContainer[props.size] || sizeContainer['default']};
  height: ${props => sizeContainer[props.size] || sizeContainer['default']};
  position: relative;
  /* overflow: hidden; */
`;

const RollBoxOne = styled.div`
  width: ${props => sizeItem[props.size] || sizeItem[props.size]};
  height: ${props => sizeItem[props.size] || sizeItem[props.size]};
  background-color: ${props => props.color || '#00adb5'};
  animation: ${rollOne} ${props => props.speed || 3}s ease infinite;
  position: absolute;
  left: 0;
  bottom: 0;
  transform-origin: right top;
`

const RollBoxTwo = styled.div`
  width: ${props => sizeItem[props.size] || sizeItem[props.size]};
  height: ${props => sizeItem[props.size] || sizeItem[props.size]};
  background-color: ${props => props.color || '#00adb5'};
  animation: ${rollTwo} ${props => props.speed || 3}s ease infinite;
  position: absolute;
  left: ${props => sizeItem[props.size] || sizeItem[props.size]};
  bottom: ${props => sizeItem[props.size] || sizeItem[props.size]};
  transform-origin: left bottom;
`

const RollBoxMove = styled.div`
  width: ${props => sizeItem[props.size] || sizeItem[props.size]};
  height: ${props => sizeItem[props.size] || sizeItem[props.size]};
  background-color: ${props => props.color || '#00adb5'};
  animation: ${moveLeft} ${props => props.speed || 3}s ease infinite;
  position: absolute;
  left: ${props => sizeItem[props.size] || sizeItem[props.size]};
  bottom: 0;
`

const Loading = ({ style = commonStyle, color = "gray", speed, size = 'large' }) => {
    return (
        <div >
            <LoadContainer style={style} size={size} className={css.loading}>
                <RollBoxOne size={size} color={color} speed={speed} />
                <RollBoxTwo size={size} color={color} speed={speed} />
                <RollBoxMove size={size} color={color} speed={speed} />
            </LoadContainer>
        </div>
    );
};

export { Loading }
