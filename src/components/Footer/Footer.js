import { Container, Row, Col } from "react-bootstrap";
import payImage from "../../assets/images/undraw_credit_card_re_blml.svg";
import "./Footer.css";

function Footer() {
  return (
    <footer>
      <Container>
        <Row>
          <Col>
            <h3 className="title">برنامه نویسی</h3>
            <p>
              رایط فعلی تکنولوژی آنچنان که لازم است، و برای شرایط فعرایط فعلی
              تکنولوژی آنچنان که لازم است، و برای شرایط آنچنان که لازم است
            </p>
          </Col>

          <Col style={{ textAlign: "left" }}>
            <img style={{ width: "100px", height: "100px" }} src={payImage} />
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
