// import TodoItemes from "./TodoItems";
import AddItems from './AddItems'; // Import the AddItems component



const todoItems = ({todoItems, onDeleteClick})=>{
    return <>
    <div className="item-container">
        {todoItems.map((item)=>(
                <AddItems key={item.name} todoName ={item.name} todoDate={item.dueDate} onDeleteClick = {onDeleteClick} > </AddItems>
        ))};
 
  </div>
    </>
}
export default todoItems;
