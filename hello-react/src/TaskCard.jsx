/* eslint-disable react/prop-types */
import './TaskCard.css'

const TaskCard = (props) => {
  const dueorcom = props.dueDate ? 'Due on' : 'Completed on';
  const value = props.dueDate || props.completedAtDate;

  return (
    <div className='TaskItem'>
      <h2 className="text-xl font-bold py-4">{props.title}</h2>
      <p className="text-1/2xl">{`${dueorcom}: ${value}`}</p>
      <p className="text-1/2xl">Assignee:{props.assigneeName}</p>
    </div>
  );
}

export default TaskCard;
