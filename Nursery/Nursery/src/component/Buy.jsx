import React from "react";

function Buy({ name, link }) {
  return (
    <>
      <h1>{name}</h1>
      <img src={link} alt="Bought item" style={{ maxWidth: "100%" }} />
    </>
  );
}

export default Buy;
