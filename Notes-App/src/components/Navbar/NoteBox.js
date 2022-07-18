import React from "react";
import "../../reset.css";
import { useState, useEffect } from "react";

function NoteBox(props) {
  const [isDone, setIsDone] = useState(true);
  const { title, note, key } = props;
  return (
    <div
      style={{ backgroundColor: isDone ? "#b1cbbb" : "#A4C639" }}
      className="box"
    >
      <h4 className="title"> {title} </h4> <br></br>
      <p className="text">{note}</p>
      <br></br>
      <button
        onClick={() => setIsDone(!isDone)}
        style={{ marginTop: "10px", color: "red" }}
      >
        done
      </button>
    </div>
  );
}

export default NoteBox;
