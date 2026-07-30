"use client";

import { useState } from "react";
import Header from "../components/Header";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";
import tasksData from "../data/tasks";

export default function Home() {
  const [tasks, setTasks] = useState(tasksData);

  const addTask = (title, description) => {
    const newTask = {
      id: Date.now(),
      title,
      description,
      completed: false,
      priority: "Low",
    };

    setTasks([...tasks, newTask]);
  };

  return (
    <main className="max-w-3xl mx-auto p-6">
      <Header />

      <TaskForm onAddTask={addTask} />

      <TaskList tasks={tasks} />
    </main>
  );
}