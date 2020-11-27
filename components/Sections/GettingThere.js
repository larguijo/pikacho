import { Container, Row, Column } from "components/Grid";
import MapContainer from "components/Geo/MapContainer";
import ReactPlayer from "react-player/lazy";

function GettingThere() {
  return (
    <Container>
      <Row>
        <Column xs="100%">
          <h2>Cómo llegar</h2>
        </Column>
      </Row>
      <Row>
        <Column xs="100%" md="50%">
          <MapContainer />
        </Column>
        <Column xs="100%" md="50%">
          <p>
            Pikacho View Guest House esta ubicado en el Canton El Progreso, El
            Boqueron (Volcan de San Salvador), en buen salvadoreno pasaras casi
            todos los restaurantes camino al Boqueron , el acceso es una calle
            que esta entre Las Brumas y el Cafe del Volcan, viniendo de Tecla a
            mano izquierda, al girar veras el porton negro del restaurante El
            Berraco, sigue de largo manteniendote a tu derecha , sube y llegaras
            a una curva cerrada de tierra, toma impulso si tu vehiculo no es 4x4
            y sube hasta un plansito donde veras el rotulo del Guest House.
          </p>
          <p>
            <strong>
              Si no te animas a subir, no te preocupes, tenemos un acuerdo con
              los amigos del Berraco y podras dejar tu carro ahi, nosotros vamos
              por ti.
            </strong>
          </p>
        </Column>
        <Column xs="100%">
          <ReactPlayer
            style={{ margin: "auto", minHeight: "400px" }}
            width="100%"
            url="https://www.youtube.com/watch?v=Z_8qVUJEspw"
            controls
          />
        </Column>
      </Row>
    </Container>
  );
}

export default GettingThere;
