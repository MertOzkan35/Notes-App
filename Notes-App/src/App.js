import React from "react";
import Navbar from "./components/Navbar/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./reset.css";
import Form from "./components/Navbar/Form";
function App() {
  return (
    <div>
      <Navbar />
      <Form />
    </div>
  );
}

export default App;
