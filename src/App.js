import { Button, TextField } from '@mui/material';
import { useState, useEffect } from 'react';
import { db } from "./firebase_config"
import './App.css';
import firebase from "firebase/compat/app"
import TodoListItem from './Todo';

function App() {
  const [todos, setTodos] = useState([]);
  const [todoInput, setTodoInput] = useState("");

  useEffect(() => {
    getTodos();
  }, []);

  function getTodos() {
    db.collection("todo").onSnapshot(function(querySnapshot){
      setTodos(
        querySnapshot.docs.map((doc) => ({
        id: doc.id,
        todo: doc.data().todo,
        inprogress: doc.data().inprogress,
        }))
      );
    });
  }

  function addTodo(e) {
    e.preventDefault();
    console.log("You are trying to add a todo");
    db.collection("todo").add({
      inprogress: true, 
      timestamp: firebase.firestore.FieldValue.serverTimestamp(), 
      todo: todoInput
    });

    setTodoInput("")
  }

  return (
    <div 
      className="App" >
        <div 
      style={{ 
        display: "flex", 
        justifyContent: "center", 
        flexDirection: "column" 
      }}
    >
      <h1> Deivee todo app</h1>
      <form>
        <TextField 
          id="standard-basic" 
          label="Create a todo" 
          style={{maxWidth: "300px", width: "90vw" }} value = {todoInput} 

          
          onChange={(e) => {
            setTodoInput(e.target.value);
            console.log(e.target.value);
          }}
          />
          <Button type = "submit" variant="contained" onClick={addTodo} style={{display: "None"}}>
            Default
          </Button>
      </form>

      {
      todos.map((todo) => (
        <TodoListItem todo={todo.todo} inprogress={todo.inprogress}  id={todo.id}></TodoListItem>
      ))};
      </div>
  </div>
  );
}

export default App;
