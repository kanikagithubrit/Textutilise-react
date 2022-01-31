import React, {useState} from 'react' //useSTATE Hook ups helps to chnage the state of text

export default function TextForm(props) {
    const handleUpClick = ()=>{
                console.log("uppercase was clicked");
                let newText = text.toUpperCase(); //to chnage all letters to uppercase
                setText(newText);
                props.showAlert("converted to uppercase!" , "success");
    }
    const handleOnChange = (event)=>{   //text area k ander type krne k loye onchange event ko listen krna padega
        console.log("on change");
        setText(event.target.value);
}
const handleLoClick = ()=>{
    let newText1 = text.toLowerCase(); //to chnage all letters to lowercase
    setText(newText1);
    props.showAlert("converted to lowercase!" , "success");
}
const handleClearClick = ()=>{
    let newText2 = ''; //to chnage all letters to lowercase
    setText(newText2);
    props.showAlert("Text cleared!" , "success");
}


    const [text , setText] = useState("Enter text here 2"); //text ek value h jo bydefault enter text herr 2 k eqaul hai or settext ki help se hum ise chnage kr skte
    // text = "new text" //wrong way to change the state
    // setText("new text"); //correct way
    return (
        <>
        <div className='container' style={{color:props.mode==='dark'?'white':'#042743'}}>
            <h1>{props.heading}</h1>
<div className="mb-3">
  <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'#13466e':'white' , color: props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea> 
  </div>  
  <button disabled={text.length==0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>convert to uppercase</button>
  <button disabled={text.length==0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>convert to lowercase</button>
  <button disabled={text.length==0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>clear text</button>
  
        </div>
        <div className="container my-2" style={{color:props.mode==='dark'?'white':'black'}}>
             <h1>Your text summary</h1>
             <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
             <p>{0.08* text.split(" ").filter((element)=>{return element.length!==0}).length} minutes read</p>
             <h2>Preview</h2>
             <p>{text.length>0?text:"enter something to preview here"}</p>
        </div>
         
        </>
        //this filter is just because space lene pr word ka increment na show kre..only elements daalne pr hi ho
        // (/\s+/) is a regular expression which means that split by space and new line
    )
}
