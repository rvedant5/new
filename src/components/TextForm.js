import React, {useState} from "react";


export default function TextForm(props) {
  const handleUPClick = ()=>{
    setText("You have clicked on Upper Case")
  }
  const handleOnChange = (event)=>{
    setText(event.target.value);
  }
  const [text,setText]=useState('Enter text here'); 
  return (
      <div>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="5"></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUPClick}>Upper Case</button>
      </div>
  );
}                 
