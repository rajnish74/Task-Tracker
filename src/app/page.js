import Header from "@/component/Header";
import TaskList from "@/component/TaskList";
import tasks from "@/data/task";


export default function Home() {
  return (
    <main className="max-w-3xl mx-auto p-6">

      <Header />

      <TaskList tasks={tasks} />

    </main>
  );
}