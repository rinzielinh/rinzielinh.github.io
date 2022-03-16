import { Container, Row, Col } from "react-bootstrap";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col sm={12} lg={3}>
            <ul className="footer-group">
              <div className="footer-logo">
                <img
                  src="https://w10.hdonline.eu/wp-content/themes/assets/images/logo.png"
                  alt=""
                />
              </div>
            </ul>
          </Col>
          <Col sm={6} lg={3}>
            <ul className="footer-group">CONTACT</ul>
            <ul>
              <li className="footer-bullet">+1123456789</li>
              <li className="footer-bullet">HDOTECHSUPPORT.COM</li>
              <li className="footer-bullet">82 RUE ROYALE, PARIS</li>
            </ul>
          </Col>

          <Col sm={6} lg={3}>
            <ul className="footer-group">LIVE HOURS</ul>
            <ul>
              <li className="footer-bullet">WEEKDAYS: 10AM – 9PM</li>
              <li className="footer-bullet">SATURDAY: 10AM – 6PM</li>
              <li className="footer-bullet">SUNDAY ALL DAY</li>
            </ul>
          </Col>

          <Col sm={6} lg={3}>
            <ul className="footer-group">FIND US</ul>
            <ul>
              <li>
                <FacebookIcon></FacebookIcon>
                <InstagramIcon></InstagramIcon>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
      <div className="footer-bottom-wrap">
        <div className="footer-bottom-title">
          © 2021 Rinzie code, All Rights Reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
