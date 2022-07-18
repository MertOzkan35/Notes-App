import React from "react";
import Note from "./Note";
import Search from "./Search";
import Add from "./Add";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "./Form";

function Navbar() {
  return (
    <Row
      style={{
        backgroundColor: "#484f4f",
        alignItems: "center",
        display: "flex",
      }}
    >
      <Col>
        <Note />
      </Col>
      <Col>
        <Search />
      </Col>
      <Col>
        <Add />
      </Col>
    </Row>
  );
}

export default Navbar;
