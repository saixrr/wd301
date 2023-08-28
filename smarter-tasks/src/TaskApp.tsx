import { useEffect } from "react";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";
import "./TaskCard.css";
import { useLocalStorage } from "./hooks/useLocalStorage";
import { TaskItem } from "./types";

interface TaskAppState {
  tasks: TaskItem[];
}

const TaskApp = () => {
  const [taskAppState, setTaskAppState] = useLocalStorage<TaskAppState>(
    "tasks",
    {
      tasks: [],
    }
  );

  useEffect(() => {
    const id = setTimeout(() => {
      console.log(`Saved ${taskAppState.tasks.length} items to backend...`);
    }, 5000);

    return () => {
      console.log("clear or cancel any existing network call");
      clearTimeout(id);
    };
  }, [taskAppState.tasks]);

  const addTask = (task: TaskItem) => {
    if (!task.todoTitle || !task.todoDueDate) {
      return;
    }

    setTaskAppState({ tasks: [...taskAppState.tasks, task] });
  };

  const deleteTask = (indexToDelete: number) => {
    const updatedTasks = taskAppState.tasks.filter(
      (_, idx) => idx !== indexToDelete
    );
    setTaskAppState({ tasks: updatedTasks });
  };

  return (
    <div className="container py-10 max-w-4xl mx-auto">
      <h1 className="text-3xl mb-2 font-bold text-slate-700">Smarter Tasks</h1>
      <h1 className="text-lg mb-6 text-slate-600">
        <span className="font-bold">Project: </span>
        Graduation Final Year Project (Revamp college website)
      </h1>
      <div className="grid grid-cols-2 gap-4">
        <div className="border border-slate-200 rounded-xl p-4">
          <h1 className="text-slate-500 text-xl font-bold text-center mb-2">
            Pending
          </h1>
          <TaskForm addTask={addTask} />
          <ul>
            <TaskList
              tasks={taskAppState.tasks}
              onDelete={(index)=>deleteTask(index)}
            />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TaskApp;
