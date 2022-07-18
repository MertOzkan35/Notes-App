import React from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { useState, useEffect } from "react";
import "../../reset.css";
import NoteBox from "./NoteBox";

function Form() {
  const [text, setText] = useState([]);

  const [text2, setText2] = useState([]);

  function titleAdd(value) {
    setText((text) => ({
      ...text,
      title: value,
    }));
  }

  function textAdd(value) {
    setText((text) => ({
      ...text,
      note: value,
    }));
  }

  function Add() {
    setText2([...text2, text]);
    console.log(text);
    setText({ note: "", title: "" });
  }
  console.log(text);
  console.log(text2);
  const style = {
    color: "red",
    border: "1px solid #e4e4e4",
    borderRadius: 3,
    boxShadow: 24,
    fontWeight: "bold",
  };

  return (
    <div>
      <div>
        <form
          style={{
            alignItems: "center",
            justifyContent: "center",
            display: "flex",
            padding: "20px",
          }}
        >
          <TextField
            onChange={(e) => {
              titleAdd(e.target.value);
            }}
            style={{
              width: "200px",
            }}
            label="Note Title"
            variant="standard"
            value={text.title}
            fullWidth
            name="title"
          />
        </form>
      </div>
      <div
        style={{
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
        }}
      >
        <TextField
          onChange={(e) => {
            textAdd(e.target.value);
          }}
          style={{ width: "400px" }}
          label="Enter your note here..."
          variant="standard"
          value={text.note}
          multiline
          sx={{ mt: 2 }}
          name="content"
        />
      </div>
      <div
        style={{
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
          padding: "20px",
        }}
      >
        <button
          onClick={() => {
            Add();
          }}
          style={{ ...style }}
        >
          Add+
        </button>
      </div>
      <div
        style={{
          justifyContent: "space-evenly",
          display: "flex",
          padding: "20px",
        }}
      >
        {text2.map((x, i) => {
          return <NoteBox key={i} title={x.title} note={x.note} />;
        })}
      </div>
      ;
    </div>
  );
}

export default Form;
