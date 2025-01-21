import React from "react";
import "./style.css";
import { Col, Container, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="footer-row">
          {/* Brand Information */}
          <Col lg={4} md={6} sm={12} className="footer-col">
            <div className="footer-brand">
              <h1 className="footer-logo">SavvyMart</h1>
              <p className="footer-description">
                Your one-stop shop for premium perfumes, human hair, stylish men’s and women’s wear, and top-tier cosmetics. Redefine your style with us!
              </p>
            </div>
          </Col>
          {/* Shop Categories */}
          <Col lg={2} md={6} sm={6} className="footer-col">
            <h2 className="footer-heading">Shop</h2>
            <ul className="footer-links">
              <li>Perfumes</li>
              <li>Human Hair</li>
              <li>Men's Wear</li>
              <li>Women's Wear</li>
              <li>Cosmetics</li>
            </ul>
          </Col>
          {/* Customer Support */}
          <Col lg={3} md={6} sm={6} className="footer-col">
            <h2 className="footer-heading">Customer Support</h2>
            <ul className="footer-links">
              <li>FAQs</li>
              <li>Order Tracking</li>
              <li>Shipping & Delivery</li>
              <li>Returns & Refunds</li>
              <li>Contact Support</li>
            </ul>
          </Col>
          {/* Contact Information */}
          <Col lg={3} md={6} sm={12} className="footer-col">
            <h2 className="footer-heading">Contact Us</h2>
            <ul className="footer-contact">
              <li>
                <ion-icon name="location-outline"></ion-icon>
                40 blend  street , portland, OR
              </li>
              <li>
                <ion-icon name="mail-outline"></ion-icon>
                support@SavvyMart.com
              </li>
              <li>
                <ion-icon name="call-outline"></ion-icon>
                +234 807 530 6443
              </li>
            </ul>
          </Col>
        </Row>
        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p>&copy; 2024 SavvyMart. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
