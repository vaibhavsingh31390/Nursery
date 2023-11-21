import React, { useEffect, useState } from "react";
import { Card, Row, Col, Button, Modal } from "react-bootstrap";
import styled from "styled-components";
import axios from "axios";
import Buy from "../component/Buy";
import { useNavigate } from "react-router-dom";

const StyledCard = styled(Card)`
  margin-bottom: 20px;
  background-color: #dde6ed;
  color: #27374d;
`;

const ScrollableRow = styled(Row)`
  max-height: 84vh; /* Adjust the height as needed */
  overflow-y: auto;
  scrollbar-width: thin;
  scrollbar-color: #a9a9a9 #f4f4f4; /* Adjust colors as needed */

  &::-webkit-scrollbar {
    width: 8px; /* Adjust width as needed */
  }

  &::-webkit-scrollbar-track {
    background: #f4f4f4; /* Adjust track color */
  }

  &::-webkit-scrollbar-thumb {
    background-color: #a9a9a9; /* Adjust thumb color */
    border-radius: 10px; /* Adjust border radius */
    border: 2px solid #f4f4f4; /* Adjust border color */
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: #888; /* Adjust hover color */
  }
`;

function Shop() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showBuyModal, setShowBuyModal] = useState(false);
  const images = [
    "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&h=562&w=1000",
    "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&h=562&w=1000",
    "https://images.unsplash.com/photo-1601985705806-5b9a71f6004f?auto=format&fit=crop&h=562&w=1000",
    "https://images.unsplash.com/photo-1470058869958-2a77ade41c02?auto=format&fit=crop&h=562&w=1000",
    "https://images.unsplash.com/photo-1601985705806-5b9a71f6004f?auto=format&fit=crop&h=562&w=1000",
    "https://images.unsplash.com/photo-1470058869958-2a77ade41c02?auto=format&fit=crop&h=562&w=1000",
    "https://images.unsplash.com/photo-1516528387618-afa90b13e000?auto=format&fit=crop&h=562&w=1000",
    "https://images.unsplash.com/photo-1477554193778-9562c28588c0?auto=format&fit=crop&h=562&w=1000",
    "https://images.unsplash.com/photo-1506634064465-7dab4de896ed?auto=format&fit=crop&h=562&w=1000",
    "https://images.unsplash.com/photo-1446071103084-c257b5f70672?auto=format&fit=crop&h=562&w=1000",
    "https://images.unsplash.com/photo-1535850579364-952ef600d22e?auto=format&fit=crop&h=562&w=1000",
    "https://images.unsplash.com/photo-1531875456634-3f5418280d20?auto=format&fit=crop&h=562&w=1000",
    "https://images.unsplash.com/photo-1491147334573-44cbb4602074?auto=format&fit=crop&h=562&w=1000",
    "https://images.unsplash.com/photo-1543459176-4426b37223ba?auto=format&fit=crop&h=562&w=1000",
    "https://images.unsplash.com/photo-1503149779833-1de50ebe5f8a?auto=format&fit=crop&h=562&w=1000",
  ];

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

  const handleBuy = (product) => {
    setSelectedProduct(product);
    setShowBuyModal(true);
  };

  const handleClose = () => {
    setShowBuyModal(false);
  };

  return (
    <div className="scroll">
      <ScrollableRow>
        {products.map((product) => (
          <Col key={product.id} sm={6} md={4} lg={3}>
            <StyledCard>
              <Card.Img
                className="img-fluid"
                variant="top"
                src={images[Math.floor(Math.random() * 14) + 1]}
              />
              <Card.Body>
                <Card.Title>{product.common_name}</Card.Title>
                <Card.Text>
                  Scientific Name: {product.scientific_name.join(", ")}
                </Card.Text>
                <CustomButton
                  className="w-100"
                  variant="primary"
                  onClick={() =>
                    handleBuy(
                      product,
                      images[Math.floor(Math.random() * 14) + 1]
                    )
                  }
                >
                  Buy
                </CustomButton>
              </Card.Body>
            </StyledCard>
          </Col>
        ))}
      </ScrollableRow>
      <Modal show={showBuyModal} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Thank You For Buying</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedProduct && (
            <Buy
              name={selectedProduct.common_name}
              link={images[Math.floor(Math.random() * 14) + 1]}
            />
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
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
