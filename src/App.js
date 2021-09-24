import logo from "./logo.svg";
import Header from "./MyComponent/Header";
import { Footer } from "./MyComponent/Footer";
import { TODOs } from "./MyComponent/TODOs";
import React, { useState } from "react";

function App() {
  const onDelete = (todo) => {
    console.log("Delete function works", todo);
    //Deleting this wey will not update the DOM, as variable update does not get reflect in the DOM as like in angular
    //let index = todos.indesOf(todo);
    //todos.splice(index, 1);
    //So use Hook useState
    setTodos(todos.filter((tododel)=>{
      return tododel!=todo
    }))
    //filer is a higher method
  };

  const [todos, setTodos] = useState([
    {
      sno: 1,
      title: "A",
      desc: "aa",
    },
    {
      sno: 2,
      title: "B",
      desc: "bb",
    },
  ]);
  return (
    <>
      <Header title="TODOs" />
      <TODOs todos={todos} onDelete={onDelete} />
      <Footer />
    </>
  );
}

export default App;
