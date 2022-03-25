import React, { useState } from 'react'
import TodoList from './components/TodoList';


import './App.css';
function App() {

  const[inputList,setInputList]=useState('');
  const[item,setitem]=useState([]);

   const itemInput=(event)=>{
    setInputList(event.target.value);
   }

 const clicked=()=>{
   if(inputList==='')
  {    alert('plz enter the value')
  }
  else
  setitem((olditem)=>{
    return [...olditem,inputList];
    
  })
  setInputList('');
 }

 const delet=(id)=>{
 
 setitem((olditem=>{
   return olditem.filter((arrelmnt,index)=>{
         return index!==id;
   })
 }))
}
  return (
    <>
        <div className="main-div">
          <div className="center-div">
            <h3 className='heading'>Todo list App</h3>
            <input type="text" placeholder='Enter your items' className='item-input' onChange={itemInput} value={inputList} />
            <button className='btn' onClick={clicked}>+</button>
            {/* <ol>
              <li>{inputLists}</li>
            </ol> */}
            {
              item.map((itemval,index)=>{
              return  <TodoList
               text={itemval}
               key={index}
               id={index}
              onSelect={delet}
               />
              })
            }
          </div>
        </div>
    </>
  );
}

export default App;
