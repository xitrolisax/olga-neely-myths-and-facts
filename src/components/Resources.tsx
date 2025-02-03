import styled from "styled-components";
import { BottomToTop } from "./motion";

const Wrapper = styled.div`
  min-height: 100vh;
  height: 100%;
  padding: 20px;
`;

const ResourcesWrapper = styled.div`
  max-width: 900px;
  width: 90%;
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 16px;

  ul {
    padding: 0px;
    word-break: break-all;
  }

  li {
    margin: 10px 0px;
    font-size: 20px;
  }
`;

const Title = styled.h4`
  font-weight: bold;
  font-size: 40px;
  border-bottom: 1px solid #d0afd6;
  text-align: center;

  @media (max-width: 767px) {
    font-size: 27px;
  }
`;

export const Resources = () => {
  return (
    <Wrapper>
      <BottomToTop>
        <ResourcesWrapper>
          <Title>Sources</Title>
          <ul>
            <li>
              American Psychiatric Association. (2013).{" "}
              <i>
                Diagnostic and Statistical Manual of Mental Disorders (5th ed.)
              </i>
              . Arlington, VA: American Psychiatric Publishing. Appelbaum, P.
              S., Robbins, P. C., & Monahan, J. (2000).{" "}
              <i>
                Violence and delusions: Data from the MacArthur Violence Risk
                Assessment Study
              </i>
              . <i>American Journal of Psychiatry, 157</i>(4), 566-572.
              <a
                href="https://doi.org/10.1176/appi.ajp.157.4.566"
                target="_blank"
              >
                https://doi.org/10.1176/appi.ajp.157.4.566
              </a>
            </li>
            <li>
              Coursera. (n.d.). <i>Schizophrenia</i>. Wesleyan University.
              Retrieved from
              <a href="https://www.coursera.org" target="_blank">
                https://www.coursera.org
              </a>
            </li>
            <li>
              National Institute of Mental Health. (2022). <i>Schizophrenia</i>.
              Retrieved from
              <a href="https://www.nimh.nih.gov" target="_blank">
                https://www.nimh.nih.gov
              </a>
            </li>
            <li>
              Substance Abuse and Mental Health Services Administration
              (SAMHSA). (n.d.). <i>Mental health myths and facts</i>. Retrieved
              from
              <a
                href="https://www.samhsa.gov/mental-health/what-is-mental-health/facts"
                target="_blank"
              >
                https://www.samhsa.gov/mental-health/what-is-mental-health/facts
              </a>
            </li>
            <li>
              Walsh, E., Buchanan, A., & Fahy, T. (2002).{" "}
              <i>Violence and schizophrenia: Examining the evidence</i>.{" "}
              <i>The British Journal of Psychiatry, 180</i>(6), 490-495.
              <a href="https://doi.org/10.1192/bjp.180.6.490" target="_blank">
                https://doi.org/10.1192/bjp.180.6.490
              </a>
            </li>
          </ul>
        </ResourcesWrapper>
      </BottomToTop>
    </Wrapper>
  );
};
