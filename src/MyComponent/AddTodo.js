import React, { useState } from "react";

export default function AddTodo(props) {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const submit = (e) => {
    e.preventDefault();//This helps in reloading the page in caseof clicking of submitting button
    if(!title){
        alert("Title can't be left blank")
    }
    else if(!desc){
        alert("Desciption can't be left blank")
    }
    else{
         props.addTodo(title,desc);
    }
    setTitle("")
    setDesc("")
  };
  const mystyle={
      minHeight:"60vh"
  }
  return (
    <div className="container my-3" style={mystyle}>
      <h3 className="text-center">Add a Todo</h3>
      <form onSubmit={submit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label> 
            {/* //on change below helps in in the changeof state as without on change you will not be able to type in the box, as set title sets 'title'value to to current typed value  */}
          <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}} className="form-control" id="exampleInputEmail1" />
        </div>
        <div className="mb-3">
          <label htmlFor="desc" className="form-label">
            Description
          </label>
          <input type="text" value={desc} onChange={(e)=>{setDesc(e.target.value)}} className="form-control" id="desc" />
        </div>

        <button type="submit" className="btn btn-success btn-sm">
          Add Todo
        </button>
      </form>
    </div>
  );
}
