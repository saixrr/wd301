import React from 'react';
import './TaskCard.css';

interface TaskCardProps {
  title: string;
  dueDate?: string;
  completedAtDate?: string;
  assigneeName: string;
}

const TaskCard= ({title,dueDate,completedAtDate,assigneeName}:TaskCardProps) => {
  const dueorcom = dueDate ? 'Due on' : 'Completed on';
  const value = dueDate || completedAtDate;

  return (
    <div className='TaskItem'>
      <h2 className="text-xl font-bold py-4">{title}</h2>
      <p className="text-1/2xl">{`${dueorcom}: ${value}`}</p>
      <p className="text-1/2xl">Assignee: {assigneeName}</p>
    </div>
  );
}

export default TaskCard;
