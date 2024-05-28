import React, {useState} from 'react'

export default function TextForm(props) {

    const handleUpCase = ()=>{
        let newText = text.toUpperCase();  /* Upper case function */
        setText(newText);
        props.showAlert("Converted to Upper case", "success");
    }

    const handleLowerCase = ()=>{
        let newText = text.toLowerCase();  /* Lower case function */
        setText(newText);
        props.showAlert("Converted to Lower case", "success");
    }

    const handleClear = ()=>{
        let newText = "";    /* Clear function */
        setText(newText)
        props.showAlert("Text have been Cleared!", "success");
    }

    const handleOnChange = (event)=>{
        setText(event.target.value)
    }

    const [text, setText] = useState('');
    return (
        <>
        <div className='container' style={{ color:props.mode==='dark'?'white':'#042743'}}>
            <h1>{props.heading}</h1>
            <div>
                <textarea className="form-control" value = {text} style={{backgroundColor:props.mode==='dark'?'grey':'white', color:props.mode==='dark'?'white':'#042743'}} onChange = {handleOnChange} id="myBox" rows="7"></textarea>
                <div className="buttons">
                    <button type="button" className="btn btn-primary" onClick={handleUpCase}>To UpperCase</button>
                    <button type="button" className="btn btn-secondary" onClick={handleLowerCase}>To Lower Case</button>
                    <button type="button" className="btn btn-secondary" onClick={handleClear}>Clear Text</button>
                </div>
            </div>
        </div>
        <div className='container my-3' style={{ color:props.mode==='dark'?'white':'#042743'}}    >
            <h1>Your text total words and characters</h1>
            <p>{text.split(" ").length} words & {text.length} characters</p> 
            <p>{.08 * text.split(" ").length} Minutes To Read It Fully</p> 
            <h2>Preview</h2>
            <h4>{text}</h4> 
        </div>
        </>
  )
}
