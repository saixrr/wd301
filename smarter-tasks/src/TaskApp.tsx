
import  { useEffect } from "react";
import { TaskItem } from "./types";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";
import "./TaskCard.css";
import { useLocalStorage } from "./hooks/useLocalStorage";

// interface TaskAppProp {}
interface TaskAppState {
  tasks: TaskItem[];
}
const TaskApp = () => {
  const [TaskAppState, setTaskAppState] = useLocalStorage<TaskAppState>("tasks", {
    tasks: [],
  });
  useEffect(() => {
    const id = setTimeout(() => {
      console.log(`Saved ${TaskAppState.tasks.length} items to backend...`);
    }, 5000);
    return () => {
      console.log("clear or cancel any existing network call");
      clearTimeout(id);
    };
  },[TaskAppState.tasks]);
  const addTask = (task: TaskItem) => {
    setTaskAppState({ tasks: [...TaskAppState.tasks,task]});
  };
  const deleteTask = (indexToDelete: number) => {
    const updatedTasks = TaskAppState.tasks.filter((_, index) => index !== indexToDelete);
    setTaskAppState({ tasks: updatedTasks });
  };
  return (
    <div className="container py-10 max-w-4xl mx-auto">
        <h1 className="text-3xl mb-2 font-bold text-slate-700">
          Smarter Tasks
        </h1>
        <h1 className="text-lg mb-6 text-slate-600">
          <span className="font-bold">Project: </span>
          Graduation Final Year Project (Revamp college website)
        </h1>
        <div className="grid grid-cols-2 gap-4">
          <div className="border border-slate-200 rounded-xl p-4">
            <h1 className="text-slate-500 text-xl font-bold text-center mb-2">
              Pending
            </h1>
            <TaskForm addTask={addTask}/>
            <ul>
            <TaskList tasks={TaskAppState.tasks} deleteTask={deleteTask}/>
            </ul>
          </div>
        </div>
      </div>
  )
}
export default TaskApp;
