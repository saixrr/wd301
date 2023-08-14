import React from "react";
import {TaskItem} from './types'
interface TaskFormProps {
    addTask:(task: TaskItem)=>void
  
}
interface TaskFormState {
    todoTitle:string;
    todoDescription:string;
    todoDueDate:string;
}
class TaskForm extends React.Component<TaskFormProps, TaskFormState> {
  constructor(props: TaskFormProps) {
    super(props);
    this.state={
      todoTitle:"",
      todoDescription:"",
      todoDueDate:"",
    }
  }
  titleChanged: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    console.log(`${event.target.value}`);
    this.setState({ todoTitle: event.target.value });
  };
  DueDateChanged: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    console.log(`${event.target.value}`);
    this.setState({ todoDueDate: event.target.value });
  };
  DescriptionChanged: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    console.log(`${event.target.value}`);
    this.setState({ todoDescription: event.target.value });
  };
  addTask: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    const newTask = {
      todoTitle:this.state.todoTitle,
      todoDueDate:this.state.todoDueDate,
      todoDescription:this.state.todoDescription
    };
    this.props.addTask(newTask);
    this.setState({todoTitle: "",todoDueDate:"",todoDescription:""})
    console.log(`Submitted the form with ${this.state.todoTitle}`);
  };
  render(){
    return (
      <form onSubmit={this.addTask}>
        <input required placeholder="Title" id="todoTitle" type="text" value={this.state.todoTitle} onChange={this.titleChanged}/>
        <input required placeholder="DueDate" id="todoDueDate" type="text" value={this.state.todoDueDate} onChange={this.DueDateChanged}/>
        <input placeholder="Description" id="todoDescription" type="text" value={this.state.todoDescription} onChange={this.DescriptionChanged}/>
        <button id="addTaskButton" type="submit">Add item</button>
      </form>
    )
  }
}
 export default TaskForm;
