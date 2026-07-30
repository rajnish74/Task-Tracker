"use client";

import { useEffect, useState } from "react";
import Header from "../components/Header";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";
import TaskStats from "../components/TaskStats";
import TaskFilter from "../components/TaskFilter";
import TaskSearch from "../components/TaskSearch";
import tasksData from "../data/tasks";

export default function Home() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");

  useEffect(() => {
    const savedTasks = localStorage.getItem("tasks");

    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    } else {
      setTasks(tasksData);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

 const addTask = (title, description, priority) => {
  const newTask = {
    id: Date.now(),
    title,
    description,
    priority,
    completed: false,
  };

  setTasks([...tasks, newTask]);
};

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const filteredTasks = tasks
    .filter((task) => {
      if (filter === "completed") return task.completed;
      if (filter === "pending") return !task.completed;
      return true;
    })
    .filter((task) => {
      const keyword = search.toLowerCase();

      return (
        task.title.toLowerCase().includes(keyword) ||
        task.description.toLowerCase().includes(keyword)
      );
    });

  return (
    <main className="max-w-3xl mx-auto p-6">
      <Header />

      <TaskForm onAddTask={addTask} />

      <TaskStats tasks={tasks} />

      <TaskSearch
        search={search}
        setSearch={setSearch}
      />

      <TaskFilter
        filter={filter}
        setFilter={setFilter}
      />

      <TaskList
        tasks={filteredTasks}
        onToggleTask={toggleTask}
        onDeleteTask={deleteTask}
      />
    </main>
  );
}