import { Fragment } from "react";
import Wrapper from "../components/wrapper/Wrapper";
import Section from "../components/Section";
import { products, discoutProducts } from "../utils/products";
import SliderComponent from '../components/Slider'; 
import useWindowScrollToTop from "../hooks/useWindowScrollToTop";
import './Home.css';

const Home = () => {
  const newArrivalData = products.filter(
    (item) => item.category === "mobile" || item.category === "wireless"
  );
  const bestSales = products.filter((item) => item.category === "sofa");
  useWindowScrollToTop();

  return (
    <Fragment>
      <SliderComponent />
      <Wrapper />
      <Section
        title={<span className="flash-sale-title">Flash Sales</span>}  // Use a span for custom styling
        bgColor="#f6f9fc"
        productItems={discoutProducts}
      />
      <Section
        title=""
        bgColor="white"
        productItems={newArrivalData}
      />
      <Section title="" bgColor="#f6f9fc" productItems={bestSales} />
    </Fragment>
  );
};

export default Home;
