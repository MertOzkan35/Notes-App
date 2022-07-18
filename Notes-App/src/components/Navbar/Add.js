import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Add() {
  function alertt() {
    return alert("henüz bu kısmı yapmadım ama istesem yaparım diye umuyorum");
  }
  const style = {
    color: "red",
    border: "1px solid #e4e4e4",
    borderRadius: 3,
    boxShadow: 24,
    fontWeight: "bold",
  };
  return (
    <Container
      style={{
        display: "flex",
      }}
    >
      <button onClick={alertt} style={{ ...style }}>
        Search
      </button>
    </Container>
  );
}

export default Add;
