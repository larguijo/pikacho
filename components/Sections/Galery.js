import { Container, Row, Column } from "components/Grid";
import ImgContainer from "components/Images/ImgContainer";

const IMAGES = ["galery1.jpg", "galery2.jpg", "galery3.jpg", "galery4.jpg"];

function Galery() {
  const renderImages = () => {
    return IMAGES.map((i) => (
      <Column xs="100%" md="25%">
        <ImgContainer>
          <img src={`img/galery/${i}`} />
        </ImgContainer>
      </Column>
    ));
  };

  return (
    <Container fluid>
      <Row>
        <Column xs="100%">
          <h2>Galería</h2>
        </Column>
      </Row>
      <Row>{renderImages()}</Row>
    </Container>
  );
}

export default Galery;
