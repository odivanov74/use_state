import { useState } from "react";
import Task from "./Task";
import Form from "./Form";
import './TaskList.css';

function TaskList()
{
    let [tasks, setTasks] = useState
    (
        [
            {
                text: "сходить в магазин",
                done:false
            },
            {
                text: "полить цветы",
                done:false
            },
            {
                text: "покормить кота",
                done:false
            },
            {
                text: "сделать домашку",
                done:false
            },
        ]
    )

    let addTask = text =>
    {
        let newTask = [...tasks, {text}];
        setTasks(newTask);
    }

    let doneTask = index => 
    {
       let newTask = [...tasks];
       newTask[index].done = !newTask[index].done;
       setTasks(newTask);
    }

    let deleteTask = index =>
    {
        let newTask = [...tasks];
        newTask.splice(index,1);
        setTasks(newTask);
    }

    return(
        <div className="task-list">
            {
                tasks.map
                (
                    (task,index) => (
                        <Task key={index} task={task} index = {index} doneTask = {doneTask} deleteTask = {deleteTask}/>
                    )
                )
            }
            <Form addTask = {addTask}/>
        </div>
    )


}

export default TaskList;