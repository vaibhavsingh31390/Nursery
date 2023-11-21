/* eslint-disable no-unused-vars */
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";
function Footer() {
  return (
    <>
      <FooterContainer className="footer mt-auto py-2">
        <Container>
          <Row>
            <Col>
              <p className="text-center m-0">
                © {new Date().getFullYear()} Made with ❤️ your own{" "}
                <strong>Nursery</strong>
              </p>
            </Col>
          </Row>
        </Container>
      </FooterContainer>
    </>
  );
}

const FooterContainer = styled.div`
  background-color: #27374d;
  color: #dde6ed;
`;

export default Footer;
