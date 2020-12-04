import { Container, Row, Column } from "components/Grid";
import ImgContainer from "components/Images/ImgContainer";

function Pet() {
  return (
    <Container>
      <Row>
        <Column xs="100%">
          <h2>Pet friendly</h2>
          <h3>Conoce a nuestros huéspedes permantes</h3>
        </Column>
      </Row>
      <Row>
        <Column xs="100%" md={1 / 3}>
          <ImgContainer bordered>
            <img src="img/pet-friendly1.jpg" alt="Mascota" />
          </ImgContainer>
        </Column>
        <Column xs="100%" md={1 / 3}>
          <ImgContainer bordered>
            <img src="img/pet-friendly2.jpg" alt="Mascota" />
          </ImgContainer>
        </Column>
        <Column xs="100%" md={1 / 3}>
          <ImgContainer bordered>
            <img src="img/pet-friendly3.jpg" alt="Mascota" />
          </ImgContainer>
        </Column>
      </Row>
    </Container>
  );
}

export default Pet;
