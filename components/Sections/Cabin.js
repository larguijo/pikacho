import { Container, Row, Column } from "components/Grid";
import Card from "components/Card";
import ImgContainer from "components/Images/ImgContainer";
import Carousel from "../Card/Carousel";
const MAIN_BEDROOM = [
  { src: "/img/bedrooms/11.jpg", alt: "Main Bedroom" },
  { src: "/img/bedrooms/12.jpg", alt: "Main Bedroom 2" },
  { src: "/img/bedrooms/13.jpg", alt: "Main Bedroom 3" },
  { src: "/img/bedrooms/14.jpg", alt: "Main Bedroom 4" },
];

const SECOND_BEDROOM = [
  { src: "/img/bedrooms/21.jpg", alt: "Second Bedroom" },
  { src: "/img/bedrooms/22.jpg", alt: "Second Bedroom 2" },
];

function Cabin() {
  return (
    <Container>
      <Row>
        <Column xs="100%">
          <Row>
            <Column xs="100%">
              <h2>La cabaña</h2>
            </Column>
          </Row>
          <Row>
            <Column xs="100%" md="50%">
              <Carousel images={MAIN_BEDROOM} name="main"></Carousel>
            </Column>
            <Column xs="100%" md="50%">
              <Card>
                <h3>Habitación Principal</h3>
                <p>
                  Amplia y acogedora habitación con una riquísima cama Queen con
                  su set de sabanas y edredón o frazada gruesa (siempre
                  limpias), Smart TV para que puedas ver tu serie o película
                  favorita en Netflix o YouTube, dos mesitas de noche, un
                  sillón, ropero y zapatera. Cuenta con dos ventanales que
                  relajaran tus ojos, cortinas que no permiten el paso de luz
                  para que duermas placenteramente. Incluimos dos toallas
                  limpias y desinfectadas y dos desayunos de cortesía (fines de
                  semana).
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
              <Carousel images={SECOND_BEDROOM} name="secondary"></Carousel>
            </Column>
          </Row>
        </Column>
      </Row>
    </Container>
  );
}

export default Cabin;
