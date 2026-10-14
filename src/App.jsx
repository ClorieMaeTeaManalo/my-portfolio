import "./style.css";

function App() {
  return (
    <div>45
      <nav>
        <h2>My Portfolio</h2>
        <div>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section id="home" className="home">
        <h1>Hello, I'm Clorie Mae Tea M. Manalo!</h1>
        <h2>Aspiring Web Developer</h2>
        <p>Welcome to my personal portfolio website.</p>
        <a href="#about" className="btn">Learn More</a>
      </section>

    <section id="about">
        <h2>About Me</h2>

  <p>
    Hi! My name is Clorie Mae Tea M. Manalo. I am a student taking
    Bachelor of Science in Information Technology at
    Batangas State University.
  </p>

<div className="personal-info">
  <div className="info-card">
    <h3>📍 Location</h3>
    <p>Dalig, Balayan, Batangas</p>
  </div>

  <div className="info-card">
    <h3>🎵 Hobbies</h3>
    <p>Reading, Music, Cooking</p>
  </div>

  <div className="info-card">
    <h3>💻 Interests</h3>
    <p>Web Design and Programming</p>
  </div>

  <div className="info-card">
    <h3>🎯 Career Goal</h3>
    <p>Frontend Developer</p>
  </div>
</div>
      </section>

<section id="skills">
  <h2>My Projects</h2>

  <div className="skills">
    <div className="project-card">
      <h3>My Music Playlist</h3>
      <p>
        A music playlist project where users can explore
        and organize their favorite songs.
      </p>
      <span>Music • Web Design</span>
    </div>

    <div className="project-card">
      <h3>MGE Laundry</h3>
      <p>
        A laundry service project designed to present
        laundry services and help customers learn about
        available washing and cleaning options.
      </p>
      <span>Laundry Service • Web Design</span>
    </div>
  </div>
</section>

      <footer>
        <p>© 2026 Clorie Mae Tea M. Manalo | My Portfolio</p>
      </footer>
    </div>
  );
}

export default App;
