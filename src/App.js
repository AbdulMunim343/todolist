import './App.scss';
import  { useState } from "react"
import  React  from 'react';
import { AiOutlinePlus } from "react-icons/ai";
import { MdDelete } from "react-icons/md"

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

const deletItems = () => {
  console.log("hello deleted");
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
           <div className="icncon">
              <MdDelete className="icn" onClick={deletItems}/>
              <li>{itemVal}</li>
           </div>
            
            </>
            )
        })}
        </ul>
    </div>
    </>
  );
}

export default App;
