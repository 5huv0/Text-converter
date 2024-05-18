import React, {useState} from 'react'

export default function TextForm(props) {

    const handleUpCase = ()=>{
        console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
    }

    const handleOnChange = (event)=>{
        console.log("On Change");
        setText(event.target.value)
    }

    const [text, setText] = useState('Enter text here');
    return (
        <div>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value = {text} onChange = {handleOnChange} id="myBox" rows="7"></textarea>
                <div className="buttons">
                    <button type="button" className="btn btn-primary" onClick={handleUpCase}>To UpperCase</button>
                    <button type="button" className="btn btn-secondary">To Lower Case</     button>
                    <button type="button" className="btn btn-success">Remove extra gap</button>
                </div>
            </div>
        </div>
  )
}
