import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { addToCart } from "../../app/features/cart/cartSlice";
import "./product-details.css";

const ProductDetails = ({ selectedProduct }) => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (e) => {
    const value = parseInt(e.target.value, 10);
    if (value > 0) {
      setQuantity(value);
    } else {
      toast.error("Quantity must be at least 1.");
    }
  };

  const handleAddToCart = () => {
    if (quantity <= 0) {
      toast.error("Please select a valid quantity.");
      return;
    }
    dispatch(addToCart({ product: selectedProduct, num: quantity }));
    toast.success(`${selectedProduct?.productName} added to cart!`);
  };

  return (
    <section className="product-details-page">
      <Container>
        <Row className="justify-content-center align-items-center">
          <Col md={6} className="product-image">
            <img
              loading="lazy"
              src={selectedProduct?.imgUrl}
              alt={selectedProduct?.productName}
              className="img-fluid"
            />
          </Col>

          <Col md={6} className="product-info">
            <h2 className="product-name">{selectedProduct?.productName}</h2>
            <div className="product-rating">
              <div className="stars">
                {[...Array(5)].map((_, index) => (
                  <i
                    key={index}
                    className={`fa ${
                      index < selectedProduct?.avgRating ? "fa-star" : "fa-star-o"
                    }`}
                  ></i>
                ))}
              </div>
              <span className="ratings-count">
                {selectedProduct?.avgRating || 0} ratings
              </span>
            </div>

            <div className="product-meta">
              <span className="product-price">${selectedProduct?.price}</span>
              <span className="product-category">
                Category: {selectedProduct?.category}
              </span>
            </div>

            <p className="product-description">{selectedProduct?.shortDesc}</p>

            <div className="quantity-selector">
              <label htmlFor="quantity" className="quantity-label">
                Quantity:
              </label>
              <input
                id="quantity"
                className="qty-input"
                type="number"
                min="1"
                value={quantity}
                onChange={handleQuantityChange}
              />
            </div>
            <button
              type="button"
              className="add-to-cart-btn"
              onClick={handleAddToCart}
            >
              Add to Cart
            </button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ProductDetails;
