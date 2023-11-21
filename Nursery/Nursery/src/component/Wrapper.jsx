import React, { useState, useEffect, createContext, useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Header";
import Footer from "./Footer";
import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";

// Create a context
const SetLoggedInContext = createContext();

const Wrapper = (props) => {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const jwt = localStorage.getItem("jwt");
    if (jwt) {
      setLoggedIn(true);
    }
  }, []);

  return (
    <SetLoggedInContext.Provider value={setLoggedIn}>
      <div className="d-flex flex-column vh-100">
        <Header loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
        <Container className="flex-grow-1">
          <Row>
            <CustomRow md={12} className="mt-3">
              {props.children}
            </CustomRow>
          </Row>
        </Container>
        <Footer />
      </div>
    </SetLoggedInContext.Provider>
  );
};

const CustomRow = styled(Col)`
  max-height: 84vh;
  overflow: hidden;
`;

// A custom hook to access the setLoggedIn function from context
export const useSetLoggedIn = () => {
  return useContext(SetLoggedInContext);
};

export default Wrapper;
