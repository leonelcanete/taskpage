import {useState} from 'react';
import {v4 as uuidv4} from 'uuid'

const useLocalStorage = (key, initialValue) => {
    const [tasks, setTask] = useState(() => {
        const savedTasks = JSON.parse(localStorage.getItem(key))
        if (savedTasks) return savedTasks
        return initialValue
    });

    const [storage, setStorage] = useState(JSON.parse(localStorage.getItem(key)));

    function addNewTask(){
        const newTask = [...tasks, {
            key:uuidv4(),
            state: 'Estado',
            categories: {
                default:'Elige uno',
                icon: 'bars'
            },
            color: '#0466c8',
            title: '',
            date: 'Elige una fecha',
        }]
        localStorage.setItem(key, JSON.stringify(newTask))
        setTask(newTask)
    }
    
    function updateTask(e, index, property, value, category, secondValue){
        const updatedTasks = [...tasks]
        const updateTask = updatedTasks[index]
        if(category){
           const taskProperty = updateTask[property]
           taskProperty['default'] = value
           taskProperty['icon'] = secondValue
        } else if(e){
            e.target.value ? updateTask[property] = e.target.value : updateTask[property] = value
        } else{
            updateTask[property] = value
        }
        setTask(updatedTasks)
        localStorage.setItem(key, JSON.stringify(tasks))
    }

    function addUsername(e){
        localStorage.setItem('name', JSON.stringify(e.target.value))
        setStorage(e.target.value)
    }


    return {
        tasks,
        addNewTask,
        updateTask,
        storage,
        addUsername,
    }
};
 
export default useLocalStorage;