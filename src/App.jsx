import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import Tasks from "./pages/Tasks";
import About from "./pages/About";

function App() {
  const [activePage, setActivePage] = useState("dashboard");

  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("taskflow-tasks");

    if (savedTasks) {
      return JSON.parse(savedTasks);
    }

    return [
      {
        id: 1,
        title: "Complete portfolio",
        description: "Finish the personal portfolio website",
        status: "Completed",
      },
      {
        id: 2,
        title: "Prepare interview",
        description: "Revise React and JavaScript concepts",
        status: "Pending",
      },
      {
        id: 3,
        title: "Practice coding",
        description: "Practice three programming problems",
        status: "Pending",
      },
    ];
  });

  useEffect(() => {
    localStorage.setItem("taskflow-tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => {
    const newTask = {
      id: Date.now(),
      ...task,
    };

    setTasks((previousTasks) => [...previousTasks, newTask]);
  };

  const deleteTask = (id) => {
    setTasks((previousTasks) =>
      previousTasks.filter((task) => task.id !== id)
    );
  };

  const toggleTask = (id) => {
    setTasks((previousTasks) =>
      previousTasks.map((task) =>
        task.id === id
          ? {
              ...task,
              status:
                task.status === "Completed" ? "Pending" : "Completed",
            }
          : task
      )
    );
  };

  const updateTask = (updatedTask) => {
    setTasks((previousTasks) =>
      previousTasks.map((task) =>
        task.id === updatedTask.id ? updatedTask : task
      )
    );
  };

  return (
    <div className="app">
      <Navbar />

      <div className="main-layout">
        <Sidebar
          activePage={activePage}
          setActivePage={setActivePage}
        />

        <main className="content">
          {activePage === "dashboard" && (
            <Dashboard
              tasks={tasks}
              setActivePage={setActivePage}
            />
          )}

          {activePage === "tasks" && (
            <Tasks
              tasks={tasks}
              addTask={addTask}
              deleteTask={deleteTask}
              toggleTask={toggleTask}
              updateTask={updateTask}
            />
          )}

          {activePage === "about" && <About />}
        </main>
      </div>
    </div>
  );
}

export default App;