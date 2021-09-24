import Header from "./MyComponent/Header";
import { Footer } from "./MyComponent/Footer";
import { TODOs } from "./MyComponent/TODOs";
import React, { useState, useEffect } from "react";
import AddTodo from "./MyComponent/AddTodo";
import About from "./MyComponent/About"
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App() {
  let initTodo = [];
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const onDelete = (todo) => {
    console.log("Delete function works", todo);
    //Deleting this wey will not update the DOM, as variable update does not get reflect in the DOM as like in angular
    //let index = todos.indesOf(todo);
    //todos.splice(index, 1);
    //So use Hook useState
    setTodos(
      todos.filter((tododel) => {
        return tododel !== todo;
      })
    );
    localStorage.setItem("todos", JSON.stringify(todos));
    //filer is a higher method
  };

  const [todos, setTodos] = useState(
    initTodo
    //   [
    //   {
    //     title:"",
    //     desc:"",
    //     sno:""
    //   }
    // ]
  );

  const AddmyTodo = (title, desc) => {
    let sno = todos.length === 0 ? 0 : todos[todos.length - 1].sno + 1;

    const mytodo = {
      title: title,
      desc: desc,
      sno: sno,
    };
    //  setTodos([...todos,mytodo])
    let a = [...todos, mytodo];
    setTodos(a);
  };
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <>
    <Router>
      <Header title="TODOs" />
      <Switch>
          <Route exact path="/" render={()=>{
            return ( <>
            <AddTodo addTodo={AddmyTodo} />
            <TODOs todos={todos} onDelete={onDelete} />
            </>)
          }}>
            
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          
        </Switch>

      

      <Footer />
    </Router>
    </>
  );
}

export default App;
