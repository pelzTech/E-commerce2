import { Col } from "react-bootstrap";
import "./product-card.css";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { addToCart } from "../../app/features/cart/cartSlice";

const ProductCard = ({ title, productItem }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Navigate to product details
  const handleNavigate = () => {
    navigate(`/shop/${productItem.id}`);
  };

  // Add to cart functionality
  const handleAddToCart = () => {
    dispatch(addToCart({ product: productItem, num: 1 }));
    toast.success(`${productItem.productName} has been added to the cart!`);
  };

  return (
    <Col md={3} sm={6} xs={12} className="product-card-container">
      {/* Discount Badge */}
      {title === "Big Discount" && productItem.discount > 0 && (
        <span className="discount-badge">{productItem.discount}% Off</span>
      )}

      {/* Product Image */}
      <div className="product-image" onClick={handleNavigate}>
        <img
          loading="lazy"
          src={productItem.imgUrl}
          alt={productItem.productName}
          className="img-fluid"
        />
      </div>

      {/* Product Details */}
      <div className="product-details">
        <h3 className="product-name" onClick={handleNavigate}>
          {productItem.productName}
        </h3>

        {/* Product Rating */}
        <div className="product-rating">
          {[...Array(5)].map((_, index) => (
            <i
              key={index}
              className={`fa ${
                index < productItem.avgRating ? "fa-star" : "fa-star-o"
              }`}
            ></i>
          ))}
          <span className="rating-count">({productItem.avgRating})</span>
        </div>

        {/* Product Price and Add to Cart */}
        <div className="product-footer">
          <span className="product-price">${productItem.price}</span>
          <button
            aria-label="Add to Cart"
            type="button"
            className="add-to-cart-btn"
            onClick={handleAddToCart}
          >
            <ion-icon name="cart-outline"></ion-icon>
          </button>
        </div>
      </div>
    </Col>
  );
};

export default ProductCard;
