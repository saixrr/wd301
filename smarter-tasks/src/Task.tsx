// import React from 'react';
import "./TaskCard.css";
// import { TaskItem } from './types';
interface TaskProp {
  idx:string
  todoTitle: string;
  todoDescription:string;
  todoDueDate:string;
  onDelete:(id:string)=>void;
}

const Task=(props:TaskProp)=>{
  return (
      <div className="TaskItem shadow-md border border-slate-100">
        <h2 className="text-base font-bold my-1">Title:{props.todoTitle}</h2>
        <p className="text-sm text-slate-500">
          Due Date:{props.todoDueDate}
        </p>
        <p className="text-sm text-slate-500">
          Description:{props.todoDescription} 
        </p>
        <button
          className="deleteTaskButton"
          onClick={() => props.onDelete(props.idx)}>
          Delete
        </button>
      </div>
    );
};
  
export default Task;
