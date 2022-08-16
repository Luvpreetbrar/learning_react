import React from "react";
import { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const upperCaseClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Coverted to Uppercase!", "primary")
  };

  const lowerCaseClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Coverted to Lowercase!", "primary")
  };

  const onTyping = (event) => {
    setText(event.target.value);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="my-3">
            <h4>{props.headingText}</h4>
            <textarea
              className="form-control"
              rows={7}
              placeholder="Type here..."
              value={text}
              onChange={onTyping}
              style={{
                backgroundColor: props.mode === "dark" ? "#444" : "#fff",
                color: props.mode === "dark" ? "#fff" : "#000",
              }}
            />
            <p className="mt-2 mb-0">
              Total {text.split(" ").length} words and {text.length} Characters.
            </p>
            <p className="mt-2 mb-0">
              {0.008 * text.split(" ").length} Minutes to read
            </p>
          </div>
          <div>
            <button className="btn btn-primary me-2" onClick={upperCaseClick}>
              To Uppercase
            </button>
            <button className="btn btn-primary me-2" onClick={lowerCaseClick}>
              To Lowercase
            </button>
          </div>
        </div>
        <div className="col-md-12 mt-3">
          {text.length > 0 ? (
            <>
              <h4>Preview</h4>
              <p>{text}</p>
            </>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}
