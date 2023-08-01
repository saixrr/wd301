import TaskCard from "./TaskCard";

function App() {
  const containerStyle = {
    border: "2px solid #ccc",
    borderRadius: "10px",
    padding: "10px",
  };

  return (
    <div className="mx-40 my-5">
      <h1 className="text-3xl font-bold mb-6">Smarter Tasks</h1>
      <p className="text-xl">Project: Graduation Final Year Project (Revamp College Website)</p>
      <div className="flex space-x-4 mt-6">
        <div className="w-1/2" style={containerStyle}>
          <h1 className="text-2xl font-bold mb-6 text-center">Pending</h1>
          <div className="space-y-8">
            <TaskCard title="Build The website with static content" dueDate="10th April" assigneeName="Rohit S" />
            <TaskCard title="Add a blog" dueDate="22nd March" assigneeName="Rohit M" />
          </div>
          <button className="w-full bg-gray-400 rounded-lg py-2 mt-6">+ New Task</button>
        </div>
        <div className="w-1/2" style={containerStyle}>
          <h1 className="text-2xl font-bold mb-6 text-center">Done</h1>
          <div className="space-y-4">
            <TaskCard title="Design the Mockup" completedAtDate="10th April" assigneeName="Rohit M" />
            <TaskCard title="Get the Approval from principal" completedAtDate="20th April" assigneeName="Ajay S" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
