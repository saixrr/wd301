// import React from "react";
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
          item={task} // Pass the task object as 'item' prop
          removeTask={() => props.onDelete(idx)} // Rename 'onDelete' to 'removeTask'
        />
      ))}
    </div>
  );
};

export default TaskList;
