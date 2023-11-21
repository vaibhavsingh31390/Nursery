import React, { useEffect, useState } from "react";
import { Card, Row, Col, Button } from "react-bootstrap";
import styled from "styled-components";
import axios from "axios";

const StyledCard = styled(Card)`
  margin-bottom: 20px;
  background-color: #dde6ed;
  color: #27374d;
`;

function Shop() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://perenual.com/api/species-list?key=sk-GDR1655ccb67a54e83056&indoor=1&page=10"
        );
        setProducts(response.data.data); // Assuming the response contains the products array
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <Row>
      {products.map((product) => (
        <Col key={product.id} sm={6} md={4} lg={3}>
          <StyledCard>
            <Card.Img variant="top" src={product.default_image.medium_url} />
            <Card.Body>
              <Card.Title>{product.common_name}</Card.Title>
              <Card.Text>
                Scientific Name: {product.scientific_name.join(", ")}
              </Card.Text>
              <CustomButton className="w-100" variant="primary">
                Buy
              </CustomButton>
            </Card.Body>
          </StyledCard>
        </Col>
      ))}
    </Row>
  );
}

const CustomButton = styled(Button)`
  background-color: #27374d;
  color: #dde6ed;
  outline: none;
  border: none;
  outline: none;
  box-shadow: none;
  border: 2px solid #27374d;
  &:hover {
    border: 2px solid #27374d;
    background-color: #fff;
    color: #27374d;
  }
`;

export default Shop;
