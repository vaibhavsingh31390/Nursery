import React from "react";
import { Card } from "react-bootstrap";
import image from "..//assets/home.jpg";
function Home() {
  return (
    <>
      <h1
        className="text-left"
        style={{ fontStyle: "italic", textTransform: "uppercase" }}
      >
        Discover the green haven.
      </h1>
      <img
        src={image}
        alt="Nursery Image"
        className="img-fluid"
        style={{ height: "84vh" }}
      />
    </>
  );
}

export default Home;
