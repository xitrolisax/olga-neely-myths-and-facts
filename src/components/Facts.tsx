import styled from "styled-components";
import { BottomToTop } from "./motion";

type FactData = {
  text: string;
};

const facts: FactData[] = [
  {
    text: "Schizophrenia affects approximately 1% of the population worldwide.",
  },
  {
    text: "Schizophrenia occurs in all cultures, social, and economic groups.",
  },
  {
    text: "The peak onset for men is typically between 15-25 years old, and for women, it is between 25-35 years old.",
  },
  {
    text: "Schizophrenia is often thought to be slightly more prevalent in men than women, particularly in early-onset cases.",
  },
  {
    text: "About 50% of patients with schizophrenia attempt suicide at least once, and approximately 5-10% die by suicide.",
  },
  {
    text: "Schizophrenia is one of the most expensive mental disorders due to direct and indirect costs, contributing to around 0.4% of the gross national product (GNP) in direct costs and 1.6% in indirect costs.",
  },
  {
    text: "Women with schizophrenia are more likely to experience prominent positive symptoms (such as hallucinations or delusions) and generally have better responses to treatment compared to men.",
  },
];

const FactsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  margin: 60px auto 20px auto;
  max-width: 1000px;
  width: 90%;
`;

const Wrapper = styled.div`
  min-height: 80vh;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 40px;
  padding: 60px 20px;
`;

const FactItem = styled.div`
  display: flex;
  flex-direction: column;
`;

const FactTitle = styled.h4`
  font-weight: bold;
  font-size: 40px;
  border-bottom: 1px solid #d0afd6;
  text-align: center;

  @media (max-width: 767px) {
    font-size: 27px;
  }
`;

const FactParagraph = styled.p`
  font-weight: 400;
  font-size: 25px;

  @media (max-width: 767px) {
    font-size: 20px;
  }
`;

const Title = styled.h1`
  font-size: 50px;
  text-align: center;

  @media (max-width: 767px) {
    font-size: 30px;
  }
`;

const Paragraph = styled.h2`
  font-size: 25px;
  font-weight: 300;
  text-align: center;
  display: block;
  max-width: 1000px;
  width: 90%;
  margin: auto;

  @media (max-width: 767px) {
    font-size: 16px;
  }
`;

export const Facts = () => {
  return (
    <Wrapper>
      <BottomToTop>
        <Title>Facts about schizophrenia</Title>
        <br />
        <Paragraph>
          It is important to educate people about mental health and eliminate
          the stigma surrounding this topic in society. Negative beliefs not
          only harm healthy individuals but also reduce the chances of helping
          someone struggling with schizophrenia. Such beliefs lower motivation
          and self-esteem, which can be especially harmful to individuals
          experiencing negative symptoms.
        </Paragraph>

        <FactsWrapper>
          {facts.map(({ text }, i) => (
            <FactItem>
              <FactTitle>Fact {i + 1}</FactTitle>
              <FactParagraph>{text}</FactParagraph>
            </FactItem>
          ))}
        </FactsWrapper>
      </BottomToTop>
    </Wrapper>
  );
};
