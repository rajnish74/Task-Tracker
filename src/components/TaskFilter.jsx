export default function TaskFilter({ filter, setFilter }) {
  return (
    <div className="flex gap-3 mb-6">
      <button
        onClick={() => setFilter("all")}
        className={`px-4 py-2 rounded font-medium transition ${
          filter === "all"
            ? "bg-blue-600 text-white"
            : "bg-gray-300 text-black hover:bg-gray-400"
        }`}
      >
        All
      </button>

      <button
        onClick={() => setFilter("completed")}
        className={`px-4 py-2 rounded font-medium transition ${
          filter === "completed"
            ? "bg-green-600 text-white"
            : "bg-gray-300 text-black hover:bg-gray-400"
        }`}
      >
        Completed
      </button>

      <button
        onClick={() => setFilter("pending")}
        className={`px-4 py-2 rounded font-medium transition ${
          filter === "pending"
            ? "bg-red-600 text-white"
            : "bg-gray-300 text-black hover:bg-gray-400"
        }`}
      >
        Pending
      </button>
    </div>
  );
}
