import styled from "styled-components";
import Landing from "./Landing";
import Navigation from "components/Header/Navigation";
import { Container } from "components/Grid";
import AboutUs from "components/Sections/AboutUs";
import Cabin from "components/Sections/Cabin";

const Title = styled.div`
  position: absolute;
  width: 1140px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export default function LandingPage() {
  return (
    <>
      <header>
        <Navigation />
      </header>
      <Title>
        <h1>
          PIKACHO VIEW <br /> GUEST HOUSE
        </h1>
      </Title>
      <Landing />
      <section id="aboutUs">
        <Container>
          <AboutUs />
        </Container>
      </section>
      <section id="cabin" style={{ backgroundColor: "#f3f3f3" }}>
        <Container>
          <Cabin />
        </Container>
      </section>
    </>
  );
}
