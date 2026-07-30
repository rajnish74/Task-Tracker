export default function TaskSearch({ search, setSearch }) {
  return (
    <div className="mb-6">
      <input
        type="text"
        placeholder="Search tasks..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full border rounded p-3"
      />
    </div>
  );
}
