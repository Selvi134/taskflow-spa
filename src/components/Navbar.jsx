function Navbar() {
  return (
    <header className="navbar">
      <div className="logo">
        <span className="logo-icon">✓</span>
        TaskFlow
      </div>

      <div className="profile">
        <div className="avatar">U</div>

        <div>
          <strong>User</strong>
          <small>Member</small>
        </div>
      </div>
    </header>
  );
}

export default Navbar;