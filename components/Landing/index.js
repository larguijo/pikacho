import styled from "styled-components";
import Landing from "./Landing";
import Navigation from "components/Header/Navigation";
import { Container } from "components/Grid";
import AboutUs from "components/Sections/AboutUs";
import Cabin from "components/Sections/Cabin";
import Galery from "components/Sections/Galery";

const Title = styled.div`
  position: absolute;
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
        <AboutUs />
      </section>
      <section id="cabin" style={{ backgroundColor: "#f3f3f3" }}>
        <Cabin />
      </section>
      <section id="galery">
        <Galery />
      </section>
    </>
  );
}
