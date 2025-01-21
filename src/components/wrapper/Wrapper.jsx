import React from "react";
import "./style.css";
import { Col, Container, Row } from "react-bootstrap";
import { serviceData } from "../../utils/products";

const Wrapper = () => {
  return (
    <section className="wrapper background">
      <Container>
        <h2 className="section-title text-center">Why Shop With Us?</h2>
        <p className="section-subtitle text-center">
         Uncover Why We’re Your Perfect Fashion Partner
        </p>
        <Row className="justify-content-center">
          {serviceData.map((service, index) => (
            <Col
              md={4}
              sm={6}
              xs={12}
              key={index}
              className="service-card"
              style={{
                backgroundColor: service.bg,
                borderRadius: "10px",
                margin: "10px 0",
                padding: "20px",
                textAlign: "center",
              }}
            >
              <div className="service-icon" style={{ fontSize: "40px", marginBottom: "15px" }}>
                {service.icon}
              </div>
              <h4 className="service-title" style={{ fontWeight: "bold", marginBottom: "10px" }}>
                {service.title}
              </h4>
              <p className="service-description" style={{ color: "#600f37" }}>
                {service.subtitle}
              </p>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Wrapper;
