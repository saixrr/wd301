import { useEffect } from 'react';
import { fetchProjects } from "../../context/projects/actions"; // Import fetchProjects

import { useProjectsDispatch } from "../../context/projects/context";
import ProjectListItems from './ProjectListItems';

const ProjectList: React.FC = () => {
  const dispatchProjects = useProjectsDispatch();
  
  useEffect(() => {
    fetchProjects(dispatchProjects); // Use fetchProjects directly
  }, []);

  return (
    <div className="grid gap-4 grid-cols-4 mt-5">
      <ProjectListItems />
    </div>
  );
};

export default ProjectList;
