import TodoName from "./components/TodoName";
import AddTodo from "./components/AddTodo";

// import AddItems2 from "./components/AddItems2";
import './App.css';
import AddItems from "./components/AddItems";
import TodoItems from "./components/TodoItems";
import WelcomeMessage from "./components/WelcomeMessage";
import { useState } from "react";


function App() {// object todoitems
  
  const [todoItems, setTodoItems] = useState([]);
  const handleNewItems = (itemName,itemDueDate)=>{


    const newTodoItems = [...todoItems, {name: itemName , dueDate: itemDueDate}];
    setTodoItems(newTodoItems);
  }
  const handleDeleteItem = (todoItemName)=>{
    const newTodoItems = todoItems.filter((item)=>item.name !== todoItemName);
    setTodoItems(newTodoItems);
  }


  return (
    <center className="todo-container">
     <TodoName/>
      <AddTodo onNewItems ={handleNewItems} />
      {todoItems.length ===0 && <WelcomeMessage> </WelcomeMessage>}
     <TodoItems todoItems={todoItems} onDeleteClick = {handleDeleteItem}> </TodoItems>
     
    </center>
  );
}
export default App;
