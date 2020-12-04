import styled from "styled-components";
import { Container, Row, Column } from "components/Grid";
import ImgContainer from "components/Images/ImgContainer";

const IMAGES = [
  {
    src: "galery1.jpg",
    text:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  },
  {
    src: "galery2.jpg",
    text:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  },
  {
    src: "galery3.jpg",
    text:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  },
  {
    src: "galery4.jpg",
    text:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  },
];

const ImageDescription = styled.div`
  width: auto;
  background-color: rgba(0, 0, 0, 0.5);
  color: #ffffff;
  font-size: 75%;
  position: absolute;
  bottom: 25px;
  padding: 3px;
  margin-left: 5px;
  margin-right: 10px;
`;

function Galery() {
  const renderImages = () => {
    return IMAGES.map(({ src, text }, idx) => (
      <Column key={`galery.${idx}`} xs="100%" md="25%">
        <ImgContainer bordered>
          <img src={`img/galery/${src}`} />
          <ImageDescription>{text}</ImageDescription>
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
