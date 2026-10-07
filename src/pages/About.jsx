function About() {
  return (
    <div className="about-page">
      <div className="about-card">
        <h1>About TaskFlow</h1>

        <p>
          TaskFlow is a simple Single Page Application designed to
          help users create, organize and track their daily tasks.
        </p>

        <h2>Technologies Used</h2>

        <ul>
          <li>React.js</li>
          <li>JavaScript</li>
          <li>HTML5</li>
          <li>CSS3</li>
          <li>Browser Local Storage</li>
        </ul>

        <h2>Features</h2>

        <ul>
          <li>Create tasks</li>
          <li>Edit tasks</li>
          <li>Delete tasks</li>
          <li>Mark tasks as completed</li>
          <li>Search and filter tasks</li>
          <li>Persistent data using localStorage</li>
          <li>Responsive user interface</li>
        </ul>
      </div>
    </div>
  );
}

export default About;