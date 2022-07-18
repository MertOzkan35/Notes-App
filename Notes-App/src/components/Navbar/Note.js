import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Note() {
  return (
    <Container style={{ paddingLeft: "150px" }}>
      <img src="./logo.png" alt="logo" />
      <h3 style={{ color: "#cfe0e8" }}>Notes...</h3>
    </Container>
  );
}

export default Note;
