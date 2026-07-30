export default function TaskCard({ task, onToggleTask, onDeleteTask }) {
  return (
    <div className="border rounded-lg p-4 shadow-sm mb-4">
      <h2 className="text-xl font-semibold">{task.title}</h2>

      <p className="text-gray-600 mt-2">{task.description}</p>

      <p className="mt-2">
        Status:
        <span
          className={`ml-2 font-semibold ${
            task.completed ? "text-green-600" : "text-red-600"
          }`}
        >
          {task.completed ? "Completed" : "Pending"}
        </span>
      </p>

      <p className="mt-1">Priority: {task.priority}</p>

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
