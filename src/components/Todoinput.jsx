import React from 'react'


const Todoinput = (props) => {
  const {handleaddTodo ,todovalue,settodovalue} = props
  
  return (
    <>
    <div className="heading" >TO-DO-LIST</div>
   <br></br> <header>
      <input value={todovalue} onChange={(e)=>{settodovalue(e.target.value)}} placeholder='Enter todo...'/>
      <button onClick={()=>{
        handleaddTodo(todovalue)
        settodovalue('')
      }} >Add</button>
    </header>
    </>
  )
}

export default Todoinput