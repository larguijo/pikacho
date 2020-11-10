import styled from "styled-components";
import Landing from "./Landing";
import Navigation from "components/Header/Navigation";
import { Container, Row, Column } from "components/Grid";
import Card from "components/Card";

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
      <Container>
        <Row>
          <Column xs="100%">
            <Row>
              <Column xs="100%">
                <h2>conócenos</h2>
              </Column>
            </Row>
            <Row>
              <Column xs="100%" md="50%"></Column>
              <Column xs="100%" md="50%">
                <Card>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </Card>
              </Column>
            </Row>
          </Column>
        </Row>
      </Container>
    </>
  );
}
