import styled from "styled-components";
import { Row, Column } from "components/Grid";
import Card from "components/Card";
import { VerticalAlignCenter } from "@styled-icons/material";

const ImgContainer = styled.div`
  padding: 20px 5px;

  img {
    max-width: 100%;
    width: auto;
    height: auto;
    display: block;
    margin: auto;
    padding: 10px;
  }
`;

function Cabin() {
  return (
    <Row>
      <Column xs="100%">
        <Row>
          <Column xs="100%">
            <h2>La cabaña</h2>
          </Column>
        </Row>
        <Row>
          <Column xs="100%" md="50%">
            <ImgContainer>
              <img src="/img/main-bedroom.jpg" alt="Main Bedroom" />
            </ImgContainer>
          </Column>
          <Column xs="100%" md="50%">
            <Card>
              <h3>Habitación Principal</h3>
              <p>
                Amplia y acogedora habitación con una riquísima cama Queen con
                su set de sabanas y edredón o frazada gruesa (siempre limpias),
                Smart TV para que puedas ver tu serie o película favorita en
                Netflix o YouTube, dos mesitas de noche, un sillón, ropero y
                zapatera. Cuenta con dos ventanales que relajaran tus ojos,
                cortinas que no permiten el paso de luz para que duermas
                placenteramente. Incluimos dos toallas limpias y desinfectadas y
                dos desayunos de cortesía (fines de semana).
              </p>
            </Card>
          </Column>
        </Row>
        <Row>
          <Column xs="100%" md="50%">
            <Card>
              <h3>Habitación 2</h3>
              <p>
                Cuenta con un camarote a dos niveles, un sofá cama, mesa de
                juegos con sus respectivos banquitos, ropero con zapatera,
                sábanas siempre limpias con sus frazadas y juegos de mesa para
                tu diversión.
              </p>
            </Card>
          </Column>
          <Column xs="100%" md="50%">
            <ImgContainer>
              <img src="/img/second-bedroom.jpg" alt="Main Bedroom" />
            </ImgContainer>
          </Column>
        </Row>
      </Column>
    </Row>
  );
}

export default Cabin;