function Dashboard({ tasks, setActivePage }) {
  const totalTasks = tasks.length;

  const completedTasks = tasks.filter(
    (task) => task.status === "Completed"
  ).length;

  const pendingTasks = tasks.filter(
    (task) => task.status === "Pending"
  ).length;

  return (
    <div>
      <div className="page-header">
        <div>
          <h1>Welcome 👋</h1>
          <p>Here's what's happening with your tasks today.</p>
        </div>

        <button
          className="primary-btn"
          onClick={() => setActivePage("tasks")}
        >
          + Manage Tasks
        </button>
      </div>

      <div className="stats-grid">
        <div className="stat-card">
          <span>Total Tasks</span>
          <strong>{totalTasks}</strong>
        </div>

        <div className="stat-card">
          <span>Completed</span>
          <strong>{completedTasks}</strong>
        </div>

        <div className="stat-card">
          <span>Pending</span>
          <strong>{pendingTasks}</strong>
        </div>
      </div>

      <div className="dashboard-section">
        <h2>Recent Tasks</h2>

        {tasks.length === 0 ? (
          <p>No tasks available.</p>
        ) : (
          tasks.slice(-4).reverse().map((task) => (
            <div className="recent-task" key={task.id}>
              <div>
                <strong>{task.title}</strong>
                <p>{task.description}</p>
              </div>

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
          ))
        )}
      </div>
    </div>
  );
}

export default Dashboard;