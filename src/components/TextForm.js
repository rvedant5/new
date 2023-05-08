import React, {useState} from "react";


export default function TextForm(props) {
  const handleUPClick = ()=>{
    let newText=text.toUpperCase();
    setText(newText)
  }
  const handleLowClick = ()=>{
    let newText=text.toLowerCase();
    setText(newText)
  }
  const handleOnChange = (event)=>{
    setText(event.target.value);
  }
  const [text,setText]=useState(); 
  return (
    <>
      <div className="container" >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="5"></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUPClick}>Upper Case</button>
        <button className="btn btn-primary mx-1" onClick={handleLowClick}>Lower Case</button>

      </div>
      <div className="container summary">
        <h1>Text Summary: </h1>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <h2>Preview:</h2>
        <p>{text}</p>
      </div>
    </>
      
  );
}                 
