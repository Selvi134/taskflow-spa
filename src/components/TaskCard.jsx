function TaskCard({ task, onDelete, onToggle, onEdit }) {
  return (
    <div className="task-card">
      <div className="task-content">
        <div className="task-title-row">
          <h3>{task.title}</h3>

          <span
            className={
              task.status === "Completed"
                ? "status completed"
                : "status pending"
            }
          >
            {task.status}
          </span>
        </div>

        <p>{task.description}</p>
      </div>

      <div className="task-actions">
        <button onClick={() => onToggle(task.id)}>
          {task.status === "Completed" ? "↩ Pending" : "✓ Complete"}
        </button>

        <button onClick={() => onEdit(task)}>
          ✏️ Edit
        </button>

        <button
          className="delete-btn"
          onClick={() => onDelete(task.id)}
        >
          🗑 Delete
        </button>
      </div>
    </div>
  );
}

export default TaskCard;