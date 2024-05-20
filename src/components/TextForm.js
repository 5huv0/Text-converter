import React, {useState} from 'react'

export default function TextForm(props) {

    const handleUpCase = ()=>{
        // console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
    }

    const handleLowerCase = ()=>{
        let newText = text.toLowerCase();
        setText(newText)
    }

    const handleClear = ()=>{
        let newText = "";
        setText(newText)
    }

    const handleOnChange = (event)=>{
        // console.log("On Change");
        setText(event.target.value)
    }

    const [text, setText] = useState('');
    return (
        <>
        <div className='container'>
            <h1>{props.heading}</h1>
            <div>
                <textarea className="form-control" value = {text} onChange = {handleOnChange} id="myBox" rows="7"></textarea>
                <div className="buttons">
                    <button type="button" className="btn btn-primary" onClick={handleUpCase}>To UpperCase</button>
                    <button type="button" className="btn btn-secondary" onClick={handleLowerCase}>To Lower Case</button>
                    <button type="button" className="btn btn-secondary" onClick={handleClear}>Clear Text</button>
                </div>
            </div>
        </div>
        <div className='container my-3'>
            <h1>Your text total words and characters</h1>
            <p>{text.split(" ").length} words & {text.length} characters</p>
            <p>{.08 * text.split(" ").length} Minutes To Read It Fully</p>
            <h2>Preview</h2>
            <h4>{text}</h4>
        </div>
        </>
  )
}
