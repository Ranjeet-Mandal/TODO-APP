// import AddItems from "./AddItems";
import { MdDelete } from "react-icons/md";

function AddItems({todoName, todoDate, onDeleteClick}){
    
    return  <div className="container text-center">
       
    <div className="row">
      <div className="col-6 left">
       {todoName}
      </div>
      <div className="col-4">
      {todoDate}
      </div>
      <div className="col-2">
         <button type="button" className="btn btn-danger rj-btn"
         onClick={()=> onDeleteClick(todoName)}
         ><MdDelete /></button>
      </div>
    </div>
    </div>
}
export default AddItems;