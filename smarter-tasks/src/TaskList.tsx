import Task from "./Task";
import { TaskItem } from "./types";

interface Props {
  tasks: TaskItem[];
  onDelete: (indexToDelete: number) => void;
}

const TaskList = (props: Props) => {
  return (
    <div>
      {props.tasks.map((task, idx) => (
        <Task
          key={idx}
          todoTitle={task.todoTitle}
          todoDueDate={task.todoDueDate}
          todoDescription={task.todoDescription}
          onDelete={() => props.onDelete(idx)}
        />
      ))}
    </div>
  );
};

export default TaskList;
