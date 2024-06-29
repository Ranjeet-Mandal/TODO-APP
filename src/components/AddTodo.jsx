import { useState } from "react";
import { MdAddBox } from "react-icons/md";

function AddTodo({onNewItems}){
  const [todoName, setTodoName] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleNameChange = (event)=>{
    setTodoName(event.target.value);
  }
  const handleDateChange = (event)=>{
    setDueDate(event.target.value);
  }

  const handleAddButtonClicked = ()=>{
    onNewItems(todoName, dueDate);
    setTodoName("");
    setDueDate("");
  }

    return <div className="container text-center">
    <div className="row">
      <div className="col-6">
        <input value={todoName} type="text" placeholder="Enter Todo Here" onChange={handleNameChange} />
      </div>
      <div className="col-4">
        <input value={dueDate} type="date" onChange={handleDateChange} />

      </div>
      <div className="col-2">
         <button type="button" className="btn btn-success rj-btn"
         onClick = { handleAddButtonClicked} ><MdAddBox /></button>
      </div>
    </div>
    </div>
}
export default AddTodo;