import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Search() {
  return (
    <Container>
      <input
        style={{
          p: "3px 7px 2px 13px",
          borderRadius: "40px",
          height: "45px",
          width: "450px",
          boxShadow: "none",
          opacity: "0.5",
          "&:focus-within": {
            opacity: "1",
            boxShadow: "0 0 0 1px #ddd",
          },
        }}
        placeholder="Search Note..."
      />
    </Container>
  );
}

export default Search;
