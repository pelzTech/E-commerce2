import { Container, Row, Col } from "react-bootstrap";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import paypalImage from "../assets/images/paypal2.jpg";
import bitcoinImage from "../assets/images/bitcoin.jpg";
import bankCardImage from "../assets/images/bankcard.jpg";
import "./Payment.css"; 

const Payment = () => {
  const [paymentMethod, setPaymentMethod] = useState("");
  const [showForm, setShowForm] = useState(false);
  const navigate = useNavigate();

  const handlePaymentSubmit = () => {
    alert("Payment has been processed!");
    navigate("/"); 
  };

  const handleOptionClick = (method) => {
    setPaymentMethod(method);
    setShowForm(true); 
  };

  return (
    <section className="payment-page">
      <Container>
        <Row className="justify-content-center">
          <Col md={8}>
            <div className="payment-container">
              <h2>Payment Options</h2>
              <p>Select your preferred payment method:</p>
              <div className="payment-options">
                <div
                  className="payment-option"
                  onClick={() => handleOptionClick("PayPal")}
                >
                  <img src={paypalImage} alt="PayPal" />
                  <p>PayPal</p>
                </div>
                <div
                  className="payment-option"
                  onClick={() => handleOptionClick("Bitcoin")}
                >
                  <img src={bitcoinImage} alt="Bitcoin" />
                  <p>Bitcoin</p>
                </div>
                <div
                  className="payment-option"
                  onClick={() => handleOptionClick("Bank")}
                >
                  <img src={bankCardImage} alt="Bank Card" />
                  <p>Bank Card</p>
                </div>
              </div>
              {showForm && (
                <div className="payment-form">
                  <h3>{paymentMethod} Payment</h3>
                  <form onSubmit={handlePaymentSubmit}>
                    {paymentMethod === "PayPal" && (
                      <>
                        <label>Email:</label>
                        <input
                          type="email"
                          placeholder="Enter your PayPal email"
                          required
                        />
                      </>
                    )}
                    {paymentMethod === "Bitcoin" && (
                      <>
                        <label>Bitcoin Wallet Address:</label>
                        <input
                          type="text"
                          placeholder="Enter your Bitcoin wallet address"
                          required
                        />
                      </>
                    )}
                    {paymentMethod === "Bank" && (
                      <>
                        <label>Card Number:</label>
                        <input
                          type="text"
                          placeholder="Enter your card number"
                          required
                        />
                        <label>Expiration Date:</label>
                        <input
                          type="text"
                          placeholder="MM/YY"
                          required
                        />
                        <label>CVV:</label>
                        <input
                          type="password"
                          placeholder="Enter CVV"
                          required
                        />
                      </>
                    )}
                    <button type="submit" className="submit-btn">
                      Submit Payment
                    </button>
                  </form>
                </div>
              )}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Payment;
