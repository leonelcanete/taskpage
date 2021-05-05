import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faEllipsisV } from '@fortawesome/free-solid-svg-icons'
import React from "react";

import "react-datepicker/dist/react-datepicker.css";
import Urgencies from './Urgencies';
import Categories from './Categories';
import DateTime from './DateTime';



const Task = ({title, index, categories, state, updateTask, color, date}) => {

    return (
        <div style={{borderTopColor: color}}className='task'>
            <section className='urgency-and-dot'>
                <div className='urgencies'>
                    <Urgencies index= {index} updateTask= {updateTask} state={state} color={color}/>
                </div>
                <div className='dots'>
                    <FontAwesomeIcon icon={faEllipsisV} className='fa-3x'/>
                </div>
            </section>
            <section className='categories'>
                <h4>Categorias:</h4>
                <Categories updateTask={updateTask} index={index} categories={categories}color={color}/>
            </section>
            <section className='title-and-commentary'>
                <textarea onChange={ e => updateTask(e, index, "title")} className='task-title'
                 type="text" maxLength="62" spellCheck='false' placeholder='Tarea'
                  data-index={index} value={title}/>
            </section>
            <section className='date-time-picker'>
                <DateTime index={index} time={date} updateTask={updateTask}/>
            </section>
        </div>

    );
}
 
export default Task;