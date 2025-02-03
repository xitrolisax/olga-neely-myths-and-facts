import styled from "styled-components";
import "./App.css";
import { Facts, Hero, MythsAndFacts, Resources } from "./components";

const Wrapper = styled.div`
  background: linear-gradient(135deg, #faf3e5 0%, #f6eaf7 50%, #f5f1ff 100%);
  min-height: 100vh;
  height: 100%;
  padding-bottom: 40px;
`;

function App() {
  return (
    <Wrapper>
      <Hero />
      <MythsAndFacts />
      <Facts />
      <Resources />
    </Wrapper>
  );
}

export default App;
