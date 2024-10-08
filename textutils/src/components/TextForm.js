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
        <h1 className='myb-2'>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode ==='dark'?'#13466e':'white',color: props.mode ==='dark'?'white':'black'}} id="myBox" rows="10"></textarea>
        </div>
        <button disabled ={ text.length === 0} className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
        <button  disabled ={ text.length === 0} className="btn btn-primary mx-2 my-1" onClick={handleLoClick}>Convert to Lowecase</button>
        <button  disabled ={ text.length === 0} className="btn btn-primary mx-2 my-1" onClick={handlerevClick}>Reverse the String</button>
    </div>
    <div className="container my-3" style={{color: props.mode ==='dark'?'white':'black'}}>
        <h2>Your text Summery</h2>
        <p>{text.split(" ").filter((element) => { return element.length!==0 }).length} words and {text.length} characters</p>
        <p>{ 0.008 * text.split(" ").filter((element) => { return element.length!==0 }).length} Minutes Read</p>
        <h2>Preview</h2>
        <p>{text.length > 0?text:'Nothing to preview!'}</p>
    </div>
    </>
  )
}
