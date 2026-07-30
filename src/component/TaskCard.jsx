export default function TaskCard({ task }) {
  return (
    <div className="border rounded-lg p-4 shadow-sm">
      <h2 className="text-xl font-semibold">{task.title}</h2>
      <p className="text-gray-600 mt-2">{task.description}</p>
      <p className="mt-3">
        Status :{task.completed ? " Completed" : " Pending"}
      </p>

      <p>Priority : {task.priority}</p>
    </div>
  );
}
