export default function TaskCard({ task, onToggleTask, onDeleteTask }) {
  const priorityColor = {
    High: "bg-red-600",
    Medium: "bg-yellow-500",
    Low: "bg-green-600",
  };

  return (
    <div className="border rounded-lg p-4 shadow-sm mb-4">
      <h2 className="text-xl font-semibold">{task.title}</h2>

      <p className="text-gray-600 mt-2">{task.description}</p>

      <div className="mt-3">
        <span
          className={`text-white text-sm px-3 py-1 rounded ${priorityColor[task.priority]}`}
        >
          {task.priority}
        </span>
      </div>

      <p className="mt-3">
        Status:
        <span
          className={`ml-2 font-semibold ${
            task.completed ? "text-green-500" : "text-red-500"
          }`}
        >
          {task.completed ? "Completed" : "Pending"}
        </span>
      </p>

      <div className="flex gap-3 mt-4">
        <button
          onClick={() => onToggleTask(task.id)}
          className="bg-green-600 text-white px-4 py-2 rounded"
        >
          {task.completed ? "Mark Pending" : "Mark Completed"}
        </button>

        <button
          onClick={() => onDeleteTask(task.id)}
          className="bg-red-600 text-white px-4 py-2 rounded"
        >
          Delete
        </button>
      </div>
    </div>
  );
}
