import React, { useState } from 'react'

function TodoInput(props) {

    const[inputText,setInputText]=useState("");
    const handleEnterPress=(e)=>{
        if(e.keyCode===13){
            props.addList(inputText)
            setInputText('')
        }
    }
  return (
  <div>
      <div className='btn btn-group'>
        
        <input className='border-dark ' type="text" 
        placeholder='Enter your todo'
        value={inputText}
        onChange={e=>{setInputText(e.target.value)}}
        onKeyDown={handleEnterPress}
        />
        <button  className='btn btn-dark' onClick={()=>{
         props.addList(inputText)
         setInputText("")
        }}>+</button>
       
     </div>
  </div>
  )
}

export default TodoInput