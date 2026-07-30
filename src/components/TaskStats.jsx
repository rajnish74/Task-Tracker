export default function TaskStats({ tasks }) {
  const total = tasks.length;
  const completed = tasks.filter((task) => task.completed).length;
  const pending = total - completed;

  return (
    <div className="grid grid-cols-3 gap-4 my-6">
      <div className="bg-blue-100 p-4 rounded text-center text-black">
        <h2 className="text-3xl font-bold">{total}</h2>
        <p className="font-medium">Total</p>
      </div>

      <div className="bg-green-100 p-4 rounded text-center text-black">
        <h2 className="text-3xl font-bold">{completed}</h2>
        <p className="font-medium">Completed</p>
      </div>

      <div className="bg-red-100 p-4 rounded text-center text-black">
        <h2 className="text-3xl font-bold">{pending}</h2>
        <p className="font-medium">Pending</p>
      </div>
    </div>
  );
}
