import { useState } from "react";
import TaskCard from "../components/TaskCard";
import TaskForm from "../components/TaskForm";

function Tasks({
  tasks,
  addTask,
  deleteTask,
  toggleTask,
  updateTask,
}) {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [editingTask, setEditingTask] = useState(null);

  const filteredTasks = tasks.filter((task) => {
    const matchesSearch =
      task.title.toLowerCase().includes(search.toLowerCase()) ||
      task.description.toLowerCase().includes(search.toLowerCase());

    const matchesFilter =
      filter === "All" || task.status === filter;

    return matchesSearch && matchesFilter;
  });

  return (
    <div>
      <div className="page-header">
        <div>
          <h1>Tasks</h1>
          <p>Create and manage your daily tasks.</p>
        </div>
      </div>

      <div className="task-layout">
        <TaskForm
          addTask={addTask}
          editingTask={editingTask}
          updateTask={updateTask}
          cancelEdit={() => setEditingTask(null)}
        />

        <div className="task-list-section">
          <div className="task-tools">
            <input
              type="text"
              placeholder="🔍 Search tasks..."
              value={search}
              onChange={(event) => setSearch(event.target.value)}
            />

            <select
              value={filter}
              onChange={(event) => setFilter(event.target.value)}
            >
              <option value="All">All</option>
              <option value="Pending">Pending</option>
              <option value="Completed">Completed</option>
            </select>
          </div>

          {filteredTasks.length === 0 ? (
            <div className="empty-state">
              <h3>No tasks found</h3>
              <p>Try adding a new task or changing your search.</p>
            </div>
          ) : (
            filteredTasks.map((task) => (
              <TaskCard
                key={task.id}
                task={task}
                onDelete={deleteTask}
                onToggle={toggleTask}
                onEdit={setEditingTask}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default Tasks;