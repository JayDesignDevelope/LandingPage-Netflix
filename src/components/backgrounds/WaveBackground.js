import React from "react";
import styled from "styled-components";

export default function WaveBackground(){
    return <Wrapper>
        <Background/>
        <Wavefirst src="/images/waves/wave1upper.svg" style={{top:"304px"}}/>
        <Wavefirst src="/images/waves/middlecurve.svg" style={{top:"430px"}}/>
        <Wavefirst src="/images/waves/lowercurve.svg" style={{top:"46px"}}/>
        <Wave src="/images/waves/bottommost curve.svg" style={{top:"576px"}}/>
        {/* <Wavefirst src="/images/waves/wave4.png" style={{top:"776px"}}/> */}

    </Wrapper>
}
const Wrapper=styled.div`
position: relative;


`
const Wave=styled.img`
position: absolute;
z-index: -1;

  @media (min-width: 1440px) {
    width: 100%;
  }
`

const Wavefirst=styled.img`
position: absolute;
mix-blend-mode: overlay;
z-index: -1;
`


const Background=styled.div`
background: linear-gradient(180deg, #381C1E 0.65%, #E50914 77.68%);
position: absolute;
width:100%;
height: 800px;
z-index: -1;
`
