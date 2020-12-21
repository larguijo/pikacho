import { Container, Row, Column } from "components/Grid";
import Card from "components/Card";
import ImgContainer from "components/Images/ImgContainer";

function AboutUs() {
  return (
    <Container id="aboutUS">
      <Row>
        <Column xs="100%">
          <Row>
            <Column xs="100%">
              <h2>conócenos</h2>
            </Column>
          </Row>
          <Row>
            <Column xs="100%" lg="40%">
              <ImgContainer>
                <img src="/img/Carousel3.jpg" alt="Cabin" />
              </ImgContainer>
            </Column>
            <Column xs="100%" lg="60%">
              <Card>
                <p>
                  Hace 5 años decidimos abandonar la ciudad para vivir en una
                  cabaña de madera en el volcán: Fue la mejor decisión, sin
                  lugar a dudas! Este rústico y maravilloso lugar está rodeado
                  de arboles (pinos, cipreses, aguacates, duraznos, frambuesas y
                  mas). Nuestra cabaña, en medio de un pequeño bosque y un
                  agradable clima, te brinda la paz y tranquilidad, que buscas
                  entre el ajetreo del dia a dia; la vista al cerro “El Picacho”
                  es espectacular, especialmente al llegar el ocaso; la visita
                  de diferentes especies de animales también da mucha vida y
                  brillo al lugar.
                </p>
                <p>
                  Todo lo anterior que he resumido en pocas líneas me hizo
                  pensar lo agradable que sería en poder compartir este pequeño
                  y acogedor lugar con otras personas, es así, que desde este
                  momento les extiendo la invitación para que también puedan
                  venir relajarse (sobre todo, alejarse del bullicio y
                  contaminación de la ciudad!) y olvidarse un poco de la rutina
                  y conectarse con la naturaleza y consigo mismos.
                </p>
                <p>
                  Así nace “Pikacho View Guest House”, nuestra pequeña casa de
                  huéspedes en el Volcán de San Salvador (“El Boqueron").
                  Contamos inicialmente con los siguientes espacios: una cabaña
                  con dos habitaciones espaciosas y acogedoras, área de
                  servicio, área de fogata y asados, espacio para acampar,
                  hamacas, y otras comodidades como: agua caliente, internet y
                  más.
                </p>
              </Card>
            </Column>
          </Row>
          <Row>
            <Column xs="100%">
              <div style={{ backgroundColor: "#8bc34a" }}>
                <blockquote>
                  Venite y conoce “Pikacho View Guest House”, un retiro en
                  armonía con la naturaleza, a tan solo 15 minutos de Ciudad
                  Merliot, La Libertad. <br />
                  Te veo allá arriba, este lugar es para vos y va con mucho
                  cariño!
                  <cite>
                    <img src="img/host.jpg" alt="The owners" />
                    <div>Edward Blanco / Jessica Cornejo</div>
                  </cite>
                </blockquote>
              </div>
            </Column>
          </Row>
        </Column>
      </Row>
    </Container>
  );
}

export default AboutUs;
