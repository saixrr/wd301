import React,{Suspense} from "react";
const ProjectDetails = React.lazy(() => import("./ProjectDetails"));
import { TasksProvider } from "../../context/task/context";
import ErrorBoundary from "../../components/ErrorBoundary";
import { Outlet } from "react-router-dom";

const ProjectDetailsIndex: React.FC = () => {
    return (
      <TasksProvider>
        <ProjectDetails />
        <ErrorBoundary>
        <Suspense fallback={<div className="suspense-loading">Loading...</div>}>
          <Outlet />
        </Suspense>
      </ErrorBoundary>
      </TasksProvider>
    );
  };
export default ProjectDetailsIndex;
