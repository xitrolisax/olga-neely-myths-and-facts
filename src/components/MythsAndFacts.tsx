import styled from "styled-components";
import { Fragment, useState } from "react";
import { BottomToTop } from "./motion";

const SectionWrapper = styled.div`
  min-height: 70vh;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 40px;
  padding: 60px 20px;
`;
const Wrapper = styled.div`
  background-color: #fff;
  box-shadow: 0px 0px 10px #794f727d;
  border-radius: 20px;
  width: 90%;
  max-width: 1300px;
  padding: 20px;
  margin: auto;
  z-index: 2;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const AccordionHeader = styled.div<{ isOpen: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 15px;
  font-weight: bold;
  font-size: 1.2rem;
  cursor: pointer;
  background-color: ${({ isOpen }) => (isOpen ? "#f0e8f5" : "#e9e0eb")};
  border-radius: 10px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #d3c6df;
  }
`;

const AccordionContent = styled.div`
  padding: 10px 15px;
  font-size: 1rem;
  color: #333;
  display: none;

  &.open {
    display: block;
  }
`;

const Title = styled.h1`
  font-size: 35px;
  text-align: center;

  @media (max-width: 767px) {
    font-size: 25px;
  }
`;

const Paragraph = styled.h2`
  font-size: 20px;
  font-weight: 300;
  text-align: center;

  @media (max-width: 767px) {
    font-size: 16px;
  }
`;

interface AccordionData {
  myth: string;
  fact: string;
}

const data: AccordionData[] = [
  {
    myth: "Myth: Children don't experience mental health issues.",
    fact: "Specifically for schizophrenia, the usual age of onset is 15-25 for males and 25-35 for females. In some cases, schizophrenia can present even earlier, depending on the environment and the severity of symptoms.",
  },
  {
    myth: "Myth: People with schizophrenia are violent.",
    fact: "Not all people with schizophrenia are violent. In fact, rates of violence among individuals with schizophrenia are only modestly elevated compared to those in the general population, and they account for only a small portion of overall violence (Walsh et al., 2002). Even people with depression are responsible for more killings than those with schizophrenia (Appelbaum et al., 2000). In fact, individuals with schizophrenia are more likely to be victims of violence.",
  },
  {
    myth: "Myth: People with schizophrenia cannot tolerate the stress of holding down a job.",
    fact: "There are many people with different degrees of severity in their disorder. There are also many cases where schizophrenia can be managed. Of course, a person with schizophrenia should be well monitored by a psychiatrist and a psychologist, but they can still have a job. With good stress management, they can be just as productive.",
  },
  {
    myth: 'Myth: Mental health issues are a result of personality weakness or character flaws, and people can "snap out of it" if they try hard enough.',
    fact: "Schizophrenia is largely influenced by genetic factors and biological anomalies in the brain, including abnormalities in neurotransmitter metabolism. Structural and functional MRI (sMRI and fMRI) scans can often reveal differences in brain structure and function associated with schizophrenia. For example, individuals with schizophrenia tend to have enlarged ventricles and reduced volume in the temporal and frontal cortex. Additionally, dopamine plays a significant role in the disorder, as antipsychotic medications often work by blocking D2 receptors within the limbic system, which helps reduce positive symptoms. Conversely, a lack of dopamine activity in the prefrontal cortex is associated with negative symptoms.",
  },
  {
    myth: "Myth: Therapy and self-help are a waste of time. Why bother when you can just take a pill?",
    fact: "Prescribed medications help manage the positive, negative, and disorganized symptoms of schizophrenia, but they do not significantly improve the social skills necessary for integration into society. Therapy is essential for individuals with schizophrenia, as it enhances their ability to interact with others productively through situation modeling and feedback.",
  },
  {
    myth: "Myth: It is impossible to prevent a mental health condition.",
    fact: "Even if you are predisposed to schizophrenia, it does not mean the disorder will necessarily develop. Certain triggers, such as drug use, stress, and a destructive environment, can contribute to its onset.",
  },
];

export const MythsAndFacts = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <SectionWrapper>
      <BottomToTop>
        <Title>Myths about schizophrenia</Title>
        <br />
        <Paragraph>Click on collapsible panels below to learn more</Paragraph>
      </BottomToTop>
      <BottomToTop>
        <Wrapper>
          {data.map((item, index) => {
            const isOpened = openIndex === index;
            return (
              <Fragment key={index}>
                <AccordionHeader
                  isOpen={isOpened}
                  onClick={() => toggleAccordion(index)}
                >
                  {item.myth} <span>{isOpened ? "-" : "+"}</span>
                </AccordionHeader>
                <AccordionContent className={isOpened ? "open" : ""}>
                  {item.fact}
                </AccordionContent>
              </Fragment>
            );
          })}
        </Wrapper>
      </BottomToTop>
    </SectionWrapper>
  );
};
