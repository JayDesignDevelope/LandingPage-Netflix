import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import { Caption2, MediumText, SmallText } from "../styles/TextStyles"

export default function PurchaseButton(props) {
  const { title, subtitle } = props
  return (
      <Wrapper>
        <IconWrapper>
          <Icon src="/images/icons/play.svg" className="icon" />
        </IconWrapper>
        
        <TextWrapper>
          <Title>{title}</Title>
        </TextWrapper>
      </Wrapper>
  )
}

const Wrapper = styled.div`
width: 100px;
height: 40px;
background: linear-gradient(180deg, #FFFFFF 0%, #D9DFFF 100%);
border: 0.0px solid rgba(255, 255, 255, 0.5);
box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1), 0px 20px 40px rgba(23, 0, 102, 0.2);
backdrop-filter: blur(15px);
/* Note: backdrop-filter has minimal browser support */

border-radius: 60px;
  display: grid;
  grid-template-columns: auto auto;
  align-items: center;
  gap: 12px;

  *,
  & {
    transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1);
  }

  :hover {
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1),
      0px 30px 60px rgba(23, 0, 102, 0.5),
      inset 0px 0px 0px 0.5px rgba(32%, 11%, 11%,0.5);
    transform: translateY(-13px);

    .icon {
      transform: scale(1.2);
    }
  }
`

const TextWrapper = styled.div`
  display: grid;
  gap: 2px;
`

const Title = styled(MediumText)`
  color: black;
  font-weight: bold;
  text-align: left;
  margin: 0 10px 0 0;
`

const Subtitle = styled(SmallText)`
  color: black;
  opacity: 0.7;

`

const Icon = styled.img`
  width: 25px;
  height: 25px;
`



const IconWrapper = styled.div`
  width: 30px;
  height: 30px;
  background: linear-gradient(200.44deg, #82161C 13.57%, #E50A15 98.38%);
  border-radius: 50%;
  display: grid;
  justify-content: center;
  align-content: center;
  justify-self: center;
  position: relative;

  ${Wrapper}:hover & {
    filter: hue-rotate(10deg) brightness(150%) saturate(120%);
  }
`
