import Task from "./Task";
import { TaskItem } from "./types";

interface Props {
  tasks: TaskItem[];
  deleteTask: (indexToDelete: number) => void;
}

const TaskList = (props: Props) => {
  return props.tasks.map((task, idx) => (
    <li key={idx} className="TaskItem shadow-md border border-slate-100">
      <Task
        todoTitle={task.todoTitle}
        todoDueDate={task.todoDueDate}
        todoDescription={task.todoDescription}
      />
      <button
        className="deleteTaskButton"
        onClick={() => props.deleteTask(idx)}
      >
        Delete
      </button>
    </li>
  ));
};

export default TaskList;
