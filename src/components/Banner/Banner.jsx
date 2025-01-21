import { Col, Container, Row } from "react-bootstrap";
import productBg from "../../Images/table.jpg";
import "./banner.css";
const Banner = ({title}) => {
    return ( 
        <div className="image-container">
            <img src={productBg} alt="Product-bg" />
            <div className="overlay">
                <Container>
                    <Row>
                        <Col> 
                        <p>Discover our exclusive range of products</p>   
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default Banner;