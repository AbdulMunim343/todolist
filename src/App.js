import './App.scss';
import  { useState } from "react"
import  React  from 'react';
import { AiOutlinePlus } from "react-icons/ai";

const App = () =>{
 const [inp, setinp] = useState("");
 const [items, setitems] = useState([]);

const handelInp = (e) =>{
  setinp(e.target.value);
}

const addList = () =>{
  setitems((olditems)=>{
    return [...olditems,inp];
  })
  setinp("");
}

  return (
    <>
    <div className="mainCon">
   <div className="hd"><h1>TO DO List</h1></div>

   <div className="actCon">
   <input type="text" onChange={handelInp} value={inp}  placeholder="Add Value" className="inp"/>
   <button onClick={addList}>
      <AiOutlinePlus />
   </button>
   </div>
        <ul>
        {items.map((itemVal) => {
            return(
            <>
            <li>{itemVal}</li>
            </>
              )
        })}
        </ul>
    </div>
    </>
  );
}

export default App;
