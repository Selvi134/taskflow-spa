function Sidebar({ activePage, setActivePage }) {
  return (
    <aside className="sidebar">
      <button
        className={activePage === "dashboard" ? "nav-item active" : "nav-item"}
        onClick={() => setActivePage("dashboard")}
      >
        🏠 Dashboard
      </button>

      <button
        className={activePage === "tasks" ? "nav-item active" : "nav-item"}
        onClick={() => setActivePage("tasks")}
      >
        📋 Tasks
      </button>

      <button
        className={activePage === "about" ? "nav-item active" : "nav-item"}
        onClick={() => setActivePage("about")}
      >
        ℹ️ About
      </button>
    </aside>
  );
}

export default Sidebar;