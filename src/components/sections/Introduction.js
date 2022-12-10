import React from "react"
import styled,{ keyframes }from "styled-components"
import WaveBackground from "../backgrounds/WaveBackground"
import PurchaseButton from "../buttons/PurchaseButton"
import { themes } from "../styles/ColorStyles"
import { H1, MediumText } from "../styles/TextStyles"


function Introduction() {
  return (
    <Wrapper>
      <ContentWrapper>
        <TextWrapper> 
            <Title>
            Introduction
          </Title>
          <Description>
          Netflizzx is the world’s leading subscription service for watching TV episodes and movies
          <br></br>
          <br></br>
          <br></br>

          SwiftUI is hands-down the best way for designers to take a first step into code. Thanks to its live Preview, you can iterate quickly and create powerful user interfaces with a few lines of code that works for all of Apple's platforms. Take your static design to the next level and build real apps with the simplicity of a prototyping tool.

We're using Sketch to design the interface and Shape for the illustrations. All design and source files are provided so that you can upgrade your UI skills while following the lessons.
          </Description>
          <Card src="/images/cards/Cover.png"/>


        </TextWrapper>
        <BigCard>
            <InsiderCard>
            <TitleCard src="/images/cards/card2.svg"/>
            </InsiderCard>
            <TextWrapper>
              <MediumTextInsideCard>
                 This course
            </MediumTextInsideCard>
            <MediumTextParaCard>
          

                 This course is unlike anxxy other. We care about design and want to make sure that you get better at it in the process. It was written for designers and developers who are passionate about collaborating and building real apps for iOS and macOS. While it's not one codebase for all apps, you learn once and can apply the techniques
            </MediumTextParaCard>

            </TextWrapper>
            
        </BigCard>

      </ContentWrapper>
      
    </Wrapper>
  )
}

export default Introduction

const animation = keyframes`
  0% { opacity: 0; transform: translateY(-10px); filter: blur(10px); }
  100% { opacity: 1; transform: translateY(0px); filter: blur(0px); }
`

const Wrapper = styled.div`
margin-top:4rem;
  /* overflow: hidden; */
`


const ContentWrapper = styled.div`
text-align: center;
max-width: 100%;
  margin: 0 auto;
  padding: 200px 30px;
  display: grid;
  grid-template-columns: 360px auto;

  @media (max-width: 450px) {
    grid-template-columns: auto;
    gap: 60px;
    padding: 150px 20px 250px;
  }
`


const TextWrapper = styled.div`
justify-items: center;
  max-width: 360px;
  display: grid;
  gap: 30px;

  > * {
    opacity: 0;
    animation: ${animation} 1s forwards;

    :nth-child(1) {
      animation-delay: 0s;
    }
    :nth-child(2) {
      animation-delay: 0.2s;
    }
    :nth-child(3) {
      animation-delay: 0.4s;
    }
  }
`

const Title = styled(H1)`
  color: ${themes.dark.text1};
  background: #C80006;
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
background-clip: text;
text-fill-color: transparent;

mix-blend-mode: normal;

  span {
    background: linear-gradient(180deg, #ffd7ff 0%, #ffb6ff 100%);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
  }

  @media (max-width: 450px) {
    overflow-wrap: break-word;
  word-wrap: break-word;
  hyphens: auto;
  white-space: normal; //this is the one that gets you all the time
  margin-top: 18rem;
    font-size: 38px;
  }
`

const Description = styled(MediumText)`
width: 712px;
height: 451px;
color: black;
/* Body Intro */

font-family: 'SF Pro Display';
font-style: normal;
font-weight: 500;
font-size: 24px;
line-height: 130%;
/* or 31px */

text-align:left;
color: #000000;

mix-blend-mode: normal;
@media (max-width: 450px) {

  overflow-wrap: break-word;
  word-wrap: break-word;
  hyphens: auto;
  white-space: normal; //this is the one that gets you all the time
font-size: 18px;
}
`

const BigCard = styled.div`
box-sizing: border-box;

position: absolute;
width: 1284px;
height: 668px;
left: 114px;
top: 1225px;

background: rgba(15, 14, 71, 0.3);
border: 0.5px solid rgba(255, 255, 255, 0.2);
box-shadow: 0px 50px 100px rgba(0, 0, 0, 0.25);
backdrop-filter: blur(20px);
/* Note: backdrop-filter has minimal browser support */
margin-top:6rem;

border-radius: 20px;

`
const InsiderCard=styled.div`
position: relative;
width: 1242px;
height: 628px;
left: 20px;
top: 20px;

background: rgba(0, 0, 0, 0.2);
border-radius: 10px;
`
const TitleCard=styled.img`
position: relative;
width: 354px;
height: 263px;
margin: 1rem 0 0 1rem;
float:left;
`

const Card = styled.img`
position: absolute;
width: 406.67px;
height: 244px;
left: 939px;
top: 842px;

filter: drop-shadow(0px 30px 60px rgba(0, 0, 0, 0.2));

`

const MediumTextInsideCard=styled(H1)`
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0 0 0 1rem;
gap: 30px;

position: absolute;
width: 937px;
height: 307px;
left: calc(50% - 937px/2 - 131.5px);
top: 322px;
`

const MediumTextParaCard=styled(H1)`
width: 937px;
height: 217px;
padding-left: 4rem;
font-family: 'SF Pro Display';
font-style: normal;
font-weight: 500;
font-size: 24px;
line-height: 130%;
/* or 31px */
bottom: 222px;
color: #000000;
padding: 0 0 0 4rem;
text-align: left;
mix-blend-mode: normal;

/* Inside auto layout */
position: relative;
flex: none;
order: 1;
align-self: stretch;
flex-grow: 1;


  @media (max-width: 768px) {
    top: 30px;
  }
  @media (max-width: 450px) {
display: flex;
flex-direction: column;
align-items: center;
padding: 0px;
gap: 20px;

width: 335px;
height: 329px;


/* Inside auto layout */

flex: none;
order: 1;
flex-grow: 0;
  }


`