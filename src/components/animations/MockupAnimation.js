import React from "react"
import styled from "styled-components"

export default function MockupAnimation() {
  return (
    <Wrapper>
      <div className="mockup1" />
      <div className="mockup2" />
      <div className="mockup3" />
      <div className="mockup31" />
      <div className="mockup4" />
      <div className="mockup5" />
      <div className="mockup6" />
      <div className="mockup61" />

    </Wrapper>
  )
}

const Wrapper = styled.div`
  /* overflow:auto ; */
 
  
  position: relative;
  perspective: 5000;

  div {

    transform: rotateY(-20deg) rotateX(20deg);
    transform-origin: bottom left;
  }
  * {
    transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1);
  }

  :hover div {
    transform: rotateY(0deg) rotateX(0deg);
    &.mockup1 {
      transition-delay: 0.1s;
      transform: translate(-30px, -30px);
    }
    &.mockup2 {
      transition-delay: 0.2s;
      transform: translate(0, -30px);
    }
    &.mockup3 {
      transition-delay: 0.2s;
      transform: translate(20px, -30px);
    }
    &.mockup31 {
      transition-delay: 0.2s;
      transform: translate(35px, -30px);
    }
    &.mockup4 {
      transition-delay: 0.1s;
      transform: translate(-30px, -20px);
    }
    &.mockup5 {
      transition-delay: 0.2s;
      transform: translate(0, -20px);
    }
    &.mockup6 {
      transition-delay: 0.1s;
      transform: translate(20px, -20px);
    }
    &.mockup61 {
      transition-delay: 0.1s;
      transform: translate(35px, -20px);
    }
    :hover {
      filter: brightness(150%) saturate(120%);
    }
  }
  

  .mockup1 {
    position: absolute;
    width: 300px;
    height: 267px;
    left: 0px;
    top: 0px;
    background: url("/images/logos/mock1netflix.svg"), rgba(39, 20, 62, 0.3);
    box-shadow: inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(20px);
    /* Note: backdrop-filter has minimal browser support */

    border-radius: 8px;
  }
  .mockup2 {
    position: absolute;
    width: 300px;
    height: 267px;
    left: 284px;
    top: 0px;

    background: url("/images/logos/mock2netflix.svg"), rgba(39, 20, 62, 0.3);
    box-shadow: inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(20px);
    /* Note: backdrop-filter has minimal browser support */

    border-radius: 8px;
  }
  .mockup3 {
      overflow:hidden ;

    position: absolute;
    width: 300px;
    height: 267px;
    left: 578px;
    top: 0px;

    background: url("/images/logos/mock3netflix.svg"), rgba(23, 12, 61, 0.5);
    box-shadow: inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(20px);
    border-radius: 8px; 
  }
  .mockup31 {
    overflow:hidden ;

    position: absolute;
    width: 300px;
    height: 267px;
    left: 878px;
    top: 0px;

    background: url("/images/logos/mock41netflix.svg"), rgba(23, 12, 61, 0.5);
    box-shadow: inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(20px);
    border-radius: 8px; 
  }
  .mockup4 {
    overflow:hidden ;

    position: absolute;
    width: 300px;
    height: 267px;
    left: 0px;
    top: 262px;

    background: url("/images/logos/mockup4netflix.svg"), rgba(39, 20, 62, 0.3);
    box-shadow: inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(20px);
    border-radius: 8px;
  }
  .mockup5 {
    overflow:hidden ;

    position: absolute;
    width: 300px;
    height: 267px;
    left:284px;
    top: 262px;


    background: url("/images/logos/mock31netflix.svg"), rgba(39, 20, 62, 0.3);
    box-shadow: inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(20px);
    border-radius: 8px;
  }
  .mockup6 {
    overflow:hidden ;

    position: absolute;
    width: 300px;
    height: 267px;
    left: 578px;
    top: 262px;

    background: url("/images/logos/mock7netflix.svg"), rgba(39, 20, 62, 0.2);
    box-shadow: inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(20px);
    /* Note: backdrop-filter has minimal browser support */

    border-radius: 8px;
  }
  .mockup61 {
    overflow:hidden ;

    position: absolute;
    width: 300px;
    height: 267px;
    left: 878px;
    top: 262px;

    background: url("/images/logos/mock8netflix.svg"), rgba(39, 20, 62, 0.2);
    box-shadow: inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(20px);
    /* Note: backdrop-filter has minimal browser support */

    border-radius: 8px;
  }
`
