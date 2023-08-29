import Task from "./Task";
import { TaskItem } from "./types";

interface Props {
  tasks: TaskItem[];
  onDelete: (indexToDelete: number) => void;
}

const TaskList = (props: Props) => {
  const deleteTask=(index:number)=>{
    props.onDelete(index);
  }
  return (
    <ul>
      {props.tasks.map((task, idx) => (
        <li key={idx} className="shadow-md border border-slate-100">
          <Task
            todoTitle={task.todoTitle}
            todoDueDate={task.todoDueDate}
            todoDescription={task.todoDescription}
            onDelete={()=>deleteTask(idx)}
          />
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
