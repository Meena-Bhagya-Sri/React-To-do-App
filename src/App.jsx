
import { useState,useEffect } from "react"
import Todoinput from "./components/Todoinput"
import TodoList  from "./components/TodoList"
function App() {

 const [todos,setTodos] =useState([])
 const [todovalue,settodovalue]=useState('');
function persistData(newlist){
  localStorage.setItem('todos',JSON.stringify({todos:newlist}))
}

 function handleaddTodo(newtodo){
  const newtodoList = [...todos,newtodo]
  persistData(newtodoList)
  setTodos(newtodoList)
}
function handledeletetodo(index)
{
 const newtodoList = todos.filter((todo,todoindex)=>{
  return todoindex!== index
 })
 persistData(newtodoList)
 setTodos(newtodoList);
}
 function handleedittodo(index){
 const valuetoedit = todos[index]
 settodovalue(valuetoedit)
 handledeletetodo(index)
 }
 useEffect(()=>{
  if(!localStorage){
    return
  }
  let localtodos = localStorage.getItem('todos')
  if(!localtodos){
   return
  }
  localtodos = JSON.parse(localtodos).todos
  setTodos(localtodos)
 },[])
  return (
    <main>
      <Todoinput todovalue={todovalue} settodovalue={settodovalue} handleaddTodo={handleaddTodo} />
      <TodoList handleedittodo={handleedittodo} handledeletetodo= {handledeletetodo} todos ={todos}/>

    </main>
  )
}

export default App
