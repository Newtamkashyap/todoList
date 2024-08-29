import logo from './logo.svg';
import './App.css';
import TodoInput from './components/todoInput';
import { useState } from 'react';
import TodoList from './components/todoList';

function App() {

  const[listTodo,setTodoList]=useState([]);
  let addList=(inputText)=>{
    if(inputText!=='')
    setTodoList([...listTodo,inputText]);
    console.log([...listTodo,inputText]);
  }
  const deleteListItem=(key)=>{
    let newListTodo=[...listTodo];
    newListTodo.splice(key,1)
    setTodoList([...newListTodo])
  }

  return (
    <div className='main-container'>
      <div className='center-container'>
        <TodoInput addList={addList}/>
       <h1>Todo</h1>
       <hr/>
       {listTodo.map((listItem,item)=>{
        return(
          <TodoList key={item} index={item} item={listItem} deleteItem={deleteListItem}/>
        )
       })}
      </div>
    </div>
  );
}

export default App;
