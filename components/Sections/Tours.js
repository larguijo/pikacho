import { Container, Row, Column } from "components/Grid";
import { tours } from "js/constants";
import ImgContainer from "components/Images/ImgContainer";

function Tours() {
  const renderTours = () => {
    return tours.map(({ name, image, description }) => (
      <Column xs="100%" md="33.3%">
        <div
          style={{
            position: "relative",
            backgroundColor: "#eeeeee",
            margin: "5px",
          }}
        >
          <h3
            style={{
              position: "absolute",
              top: "5px",
              left: "5px",
              zIndex: "10",
              marginLeft: "10px",
              marginRight: "12px",
              padding: "2px",
              backgroundColor: "rgb(255,255,255, 0.7)",
            }}
          >
            {name}
          </h3>
          <ImgContainer>
            <img src={`img/${image}`} alt={name} />
          </ImgContainer>
          <p style={{ padding: "0px 5px 10px 5px" }}>{description}</p>
        </div>
      </Column>
    ));
  };
  return (
    <Container>
      <Row>
        <Column xs="100%">
          <h2>Tours</h2>
        </Column>
      </Row>
      <Row>{renderTours()}</Row>
    </Container>
  );
}

export default Tours;
