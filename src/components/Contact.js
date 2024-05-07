import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";

export const Contact = () => {
  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <img src={contactImg} alt="Contact Me" />
          </Col>
          <Col size={12} md={6}>
            <div className="form">
              <h2>Get in Touch</h2>
              <iframe
                src="https://fm.addxt.com/form/?vf=1FAIpQLSft0J9-nHvSr4lNHOxtwj167IVdHibaE89ysc363W2gAV0vJw"
                title="Contact Form"
              >
                Loading...
              </iframe>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
