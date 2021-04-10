import './App.css';
import { useEffect, useState } from 'react';
import { db } from './firebase';
import firebase from "firebase"
import TodoList from "./todoList"

function App() {

  const [todos, setTodos] = useState([]);
  const [todoInput, setTodoInput] = useState('');

  useEffect(()=>{
    getTodos();
  }, [])

  function getTodos() {
    db.collection("todos").onSnapshot(function (querySnapshot) {
      setTodos(
        querySnapshot.docs.map((doc)=>({
          id: doc.id,
          todo: doc.data().todo,
          inprogress: doc.data().inprogress
        }))
      )
    })
  }

  function addTodo(event) {
    event.preventDefault();
    
    db.collection("todos").add({
      inprogress: true,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      todo: todoInput
    })

    setTodoInput("")
  }

  return (
    <div className="App">
      <h1 className="header">Todo app</h1>
      <div className="form">
        <form >
          <input id="standard-basic" placeholder="Enter goal here..." label="Add todo" value={todoInput} onChange={(e)=>setTodoInput(e.target.value)}/>
          <button type="submit" onClick={addTodo} className="defaultbtn">Add Goal</button>
        </form>
        <div className="data">
          {todos.map(todo=>(
            <TodoList todo={todo.todo} inprogress={todo.inprogress} id={todo.id} key={todo.id}/>
          ))}
        </div>
        </div>
    </div>
  );
}

export default App;
