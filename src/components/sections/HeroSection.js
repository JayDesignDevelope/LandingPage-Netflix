import React from "react"
import styled,{ keyframes }from "styled-components"
import MockupAnimation from "../animations/MockupAnimation"
import WaveBackground from "../backgrounds/WaveBackground"
import PurchaseButton from "../buttons/PurchaseButton"
import { themes } from "../styles/ColorStyles"
import { H1, MediumText } from "../styles/TextStyles"
import Introduction from "./Introduction"
import Architecture from "./Architecture"


function HeroSection() {
  return (
    <Wrapper>
        <WaveBackground/>
      <ContentWrapper>
        <TextWrapper>
            <Icon src="/images/logos/netflixnewlogo.png" className="iconLogo" />
            <Title>
            Netflix
          </Title>
          <Description>
          Design an iOS app from scratch for iOS 13, iPadOS and Big Sur.
          </Description>
          <PurchaseButton
            title="Run"
          />
        </TextWrapper>
        <MockupAnimation />
        <Introduction/>
        <Architecture/>

      </ContentWrapper>
    </Wrapper>
  )
}

export default HeroSection

const animation = keyframes`
  0% { opacity: 0; transform: translateY(-10px); filter: blur(10px); }
  100% { opacity: 1; transform: translateY(0px); filter: blur(0px); }
`

const Wrapper = styled.div`

  overflow: hidden;
`




const ContentWrapper = styled.div`
  text-align: center;
  max-width: 1234px;
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
  background: linear-gradient(90deg, #F5F5F5 29.6%, #E85A5E 75.6%);
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
    font-size: 48px;
  }
`

const Description = styled(MediumText)`
/* Body Main */

font-family: 'SF Pro Text';
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 140%;
/* or 28px */

text-align: center;

color: rgba(255, 255, 255, 0.7);

mix-blend-mode: normal;
`


const Icon = styled.img`
  width: 85px;
  height: 85px;
`

