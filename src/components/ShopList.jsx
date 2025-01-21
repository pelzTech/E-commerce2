import { Row, Col, Button } from "react-bootstrap";
import { memo, useEffect } from "react";
import ProductCard from "./ProductCard/ProductCard";
import './ShopList.css';

const ShopList = ({ productItems }) => {
  useEffect(() => {}, [productItems]);

  if (productItems.length === 0) {
    return (
      <div className="empty-shoplist">
        <Col className="text-center">
          <h2>No Products Available</h2>
          <p>
            We're sorry, but we couldn't find any products that match your
            selection. Check back later or explore other categories
          </p>
          <Button className="explore-btn">
            Explore Products
          </Button>
        </Col>
      </div>
    );
  }

  return (
    <Row className="justify-content-center">
      {productItems.map((productItem) => (
        <ProductCard
          key={productItem.id}
          title={productItem.productName} 
          productItem={productItem}
        />
      ))}
    </Row>
  );
};

export default memo(ShopList);
