import { Col, Container, Row } from "react-bootstrap";
import FilterSelect from "../components/FilterSelect";
import SearchBar from "../components/SeachBar/SearchBar";
import { Fragment, useState } from "react";
import { products } from "../utils/products";
import ShopList from "../components/ShopList";
import Banner from "../components/Banner/Banner";
import useWindowScrollToTop from "../hooks/useWindowScrollToTop";
import './Shop.css';

const Shop = () => {
  const [filterList, setFilterList] = useState(
    products.filter((item) => item.category === "sofa")
  );
  useWindowScrollToTop();

  return (
    <Fragment>
      <Banner title="Products" />
      <section className="filter-bar">
        <Container className="filter-bar-container">
          <Row className="align-items-center justify-content-between">
            <Col md={2} sm={3} className="mb-3 mb-md-0">
              <SearchBar setFilterList={setFilterList} />
            </Col>

            <Col md={3} className="text-md-end mt-3 mt-md-0">
              <FilterSelect setFilterList={setFilterList} />
            </Col>
          </Row>
        </Container>
        <Container>
          <ShopList productItems={filterList} />
        </Container>
      </section>
    </Fragment>
  );
};

export default Shop;
