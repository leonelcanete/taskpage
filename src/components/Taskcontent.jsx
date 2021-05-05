import useLocalStorage from '../hooks/useLocalStorage';
import Addtask from './Addtask'
import Task from './Task';


const Taskcontent = ({search, selected_cat, searchCategories}) => {
    const {tasks, addNewTask, updateTask} = useLocalStorage('task', []);
    return ( 
        <div className="task-content">
            {tasks.filter(task => {
                if(task.title === undefined || search === ''){
                    return task
                } else if(task.title.toLowerCase().includes(search.toLowerCase())){
                    return task
                }
                return null}).map((task, index) => {
                    return <Task key={task.key} title={task.title} state={task.state}
                    categories={task.categories} index={index} updateTask={updateTask} color={task.color} date={task.date}/>
                })};
            {!search && <Addtask addNewTask = {addNewTask}/> };
        </div>
     );
};
 
export default Taskcontent;