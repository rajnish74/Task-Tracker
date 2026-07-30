"use client";

import { useEffect, useState } from "react";
import Header from "../components/Header";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";
import TaskStats from "../components/TaskStats";
import TaskFilter from "../components/TaskFilter";
import tasksData from "../data/tasks";

export default function Home() {

  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    const savedTasks = localStorage.getItem("tasks");

    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    } else {
      setTasks(tasksData);
    }
  }, []);

  useEffect(() => {
    if (tasks.length > 0) {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
  }, [tasks]);

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

  const filteredTasks = tasks.filter((task) => {
    if (filter === "completed") return task.completed;
    if (filter === "pending") return !task.completed;
    return true;
  });

  return (
    <main className="max-w-3xl mx-auto p-6">

      <Header />

      <TaskForm onAddTask={addTask} />

      <TaskStats tasks={tasks} />

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