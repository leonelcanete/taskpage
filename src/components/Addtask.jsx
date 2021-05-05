import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'
const Addtask = ({addNewTask}) => {

    return ( 
        <div className="add-task" onClick={addNewTask}><FontAwesomeIcon icon={faPlusCircle}
         className='fa-6x fa-shadow'/>
         </div>
     );
}
 
export default Addtask;