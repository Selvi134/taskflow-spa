import { useState } from "react";

function TaskForm({ addTask, editingTask, updateTask, cancelEdit }) {
  const [title, setTitle] = useState(
    editingTask ? editingTask.title : ""
  );

  const [description, setDescription] = useState(
    editingTask ? editingTask.description : ""
  );

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!title.trim()) {
      alert("Please enter a task title");
      return;
    }

    if (editingTask) {
      updateTask({
        ...editingTask,
        title,
        description,
      });

      cancelEdit();
    } else {
      addTask({
        title,
        description,
        status: "Pending",
      });

      setTitle("");
      setDescription("");
    }
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <h2>{editingTask ? "Edit Task" : "Add New Task"}</h2>

      <label>Task Title</label>

      <input
        type="text"
        placeholder="Enter task title"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />

      <label>Description</label>

      <textarea
        placeholder="Enter task description"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />

      <div className="form-buttons">
        <button type="submit" className="primary-btn">
          {editingTask ? "Update Task" : "Add Task"}
        </button>

        {editingTask && (
          <button
            type="button"
            className="secondary-btn"
            onClick={cancelEdit}
          >
            Cancel
          </button>
        )}
      </div>
    </form>
  );
}

export default TaskForm;