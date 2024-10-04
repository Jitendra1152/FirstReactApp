import React,{useState} from 'react'

export default function TextForm(props) {
 const handleUpClick = () => {
    //console.log('Uppercase was clicked ' + text);
    let newtext = text.toUpperCase();
    setText(newtext)
    props.showAlert("Converted to Upper Case","success");
 }  
 const handleLoClick = () => {
    //console.log('Uppercase was clicked ' + text);
    let newtext = text.toLowerCase();
    setText(newtext)
    props.showAlert("Converted to Lower Case","success");
 }
 const handlerevClick = () => {
    //console.log('Uppercase was clicked ' + text);
    let newtext = text.split('').reverse().join('');
    setText(newtext)
 }
 const handleOnChange = (event) => {
   // console.log('On Change');
    setText(event.target.value)
 }  
const [text, setText] = useState('Enter Text Here');
//text = 'new text here'; wrong way to change the state
//setText('new text here'); Correct way to change the state
  return (
    <>
    <div className="container" style={{color: props.mode ==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode ==='dark'?'grey':'white',color: props.mode ==='dark'?'white':'black'}} id="myBox" rows="10"></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowecase</button>
        <button className="btn btn-primary mx-2" onClick={handlerevClick}>Reverse the String</button>
    </div>
    <div className="container my-3" style={{color: props.mode ==='dark'?'white':'black'}}>
        <h2>Your text Summery</h2>
        <p>{text.trim().length === 0 ? 0 : text.trim().split(/\s+/).length} words and {text.length} characters</p>
        <p>{ 0.008 * text.split(" ").length} Minutes Read</p>
        <h2>Preview</h2>
        <p>{text.length > 0?text:'Enter something into textbox above to preview here'}</p>
    </div>
    </>
  )
}
