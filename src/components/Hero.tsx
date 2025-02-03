import {
  TopToBottom,
  BottomToTop,
  LeftToRight,
  RightToLeft,
  BottomLeftCorner,
} from "./motion";
import styled from "styled-components";
import brain from "../assets/brain.png";
import skeleton from "../assets/skeleton.png";
import heart from "../assets/heart.png";

const Wrapper = styled.div`
  min-height: 100vh;
  height: 100%;
`;

const Title = styled.h1`
  font-size: 50px;

  @media (max-width: 767px) {
    font-size: 30px;
  }
`;

const Subtitle = styled.h2`
  font-size: 30px;
  font-weight: 500;

  @media (max-width: 767px) {
    font-size: 20px;
  }
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  text-align: center;
  padding: 140px 10px 40px 10px;
  margin: auto;
  max-width: 820px;
  z-index: 2;
  position: relative;
`;

const Paragraph = styled.h2`
  font-size: 25px;
  font-weight: 300;

  @media (max-width: 767px) {
    font-size: 16px;
  }
`;

const Brain = styled.img`
  position: absolute;
  margin: 60px;
  max-width: 500px;
  transform: rotate(-10deg);
  opacity: 0.4;
  width: 30%;
`;

const Skeleton = styled.img`
  position: absolute;
  margin: 0px;
  max-width: 300px;
  width: 30%;
  transform: rotate(10deg);
  opacity: 0.4;
`;

const Heart = styled.img`
  position: absolute;
  margin: 0px;
  max-width: 260px;
  width: 30%;
  transform: rotate(-20deg);
  opacity: 0.4;
`;

export const Hero = () => {
  return (
    <Wrapper>
      <LeftToRight>
        <Brain src={brain} />
      </LeftToRight>

      <BottomLeftCorner>
        <Heart src={heart} />
      </BottomLeftCorner>
      <TextWrapper>
        <TopToBottom>
          <Title>Myths and Facts about Psychological Disorders</Title>
        </TopToBottom>
        <TopToBottom>
          <Subtitle>by Olga Neely</Subtitle>
        </TopToBottom>

        <BottomToTop>
          <Paragraph>
            Stigma is a form of discrimination that affects people in different
            circumstances. Some people face discrimination because of their
            mental health. Mental health stigma often comes from not
            understanding the topic well enough. This page will focus on myths
            and facts about <b>Schizophrenia</b>.
          </Paragraph>
        </BottomToTop>
      </TextWrapper>

      <RightToLeft>
        <Skeleton src={skeleton} />
      </RightToLeft>
    </Wrapper>
  );
};
