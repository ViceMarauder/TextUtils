import React,{useState} from 'react'

export default function Textform(props) {
    const handleUpClick=()=>{
        setText(text.toUpperCase())
        props.showAlert("Converted to Uppercase","success")
    }
    const handleLowClick=()=>{
        setText(text.toLowerCase())
        props.showAlert("Converted to Lowercase","success")
    }
    const handleClrClick=()=>{
        setText('')
        props.showAlert("Textarea Cleared","success")
    }
    const handleCopy=()=>{
        navigator.clipboard.writeText(text)
        props.showAlert("Copied to Clipboard","success")
    }
    const handleExtraSpaces=()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra Spaces Removed","success")
    }
    const handleOnChange=(event)=>{
        setText(event.target.value)
    }

    const [text,setText] = useState('')
    return (
        <>
        <div className="container" style={{color: props.mode === 'dark'?'white':'#042743'}}>
            <h1 className="mb-4">{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" id="mybox" rows="8" value={text} style={{backgroundColor: props.mode ==='dark'?'#13466e':'white',color: props.mode === 'dark'?'white':'#042743'}} placeholder="Enter your Text Here" onChange={handleOnChange}></textarea>
            </div>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>
                Convert to Uppercase
                </button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLowClick}>
                Convert to Lowercase
                </button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClrClick}>
                Clear Text
                </button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>
                Copy Text
                </button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>
                Remove Extra Spaces
                </button>
        </div>
        <div className="container my-3" style={{color: props.mode === 'dark'?'white':'#042743'}}>
            <h2>Your text Summary</h2>
            <p>{text.split(/\s+/).filter((n)=>{return n !== ''}).length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").filter((n)=>{return n !== ''}).length} Minutes Read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
        </div>
        </>
    )
}
