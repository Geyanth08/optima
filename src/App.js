import React from 'react';
import './App.css';
import TeamMember from './components/TeamMember';
import Gallery from './components/Gallery';
import Highlights from './components/Highlights';
import NavBar from './components/NavBar';

const App = () => {
  const slideImages = [
    '/Images/highlight1.JPG',
    '/Images/highlight1.JPG',
    '/Images/highlight1.JPG',
  ];

  const teamMembers = [
    { name: 'Prem Sagar', role: 'President', branch: 'M.Tech Data Analytics', imgSrc: '/Images/prem_sagar.png' },
    { name: 'Sharvari', role: 'Vice President', branch: 'M.Sc Computer Science', imgSrc: '/Images/sharvari.png' },
    { name: 'Chirag', role: 'Secretary', branch: 'M.Tech Data Analytics', imgSrc: '/Images/chirag.png' },
    { name: 'Suraj', role: 'Treasurer', branch: 'M.Tech Data Analytics', imgSrc: '/Images/suraj.png' },
    { name: 'Gauri', role: 'Co-ordinator', branch: 'M.Tech Data Analytics', imgSrc: '/Images/gauri.png' },
    { name: 'Anushree', role: 'Technical Head', branch: 'M.Sc Computer Science', imgSrc: '/Images/anushree.png' },
  ];

  const coreMembers = [
    { name: 'Yatharth', branch: 'M.Tech Data Analytics', imgSrc: '/Images/yatharth.jpeg' },
    { name: 'Neha', branch: 'M.Tech Data Analytics', imgSrc: '/Images/neha.jpeg' },
    { name: 'Gupta Juhi', branch: 'M.Sc Computer Science', imgSrc: '/Images/gupta.jpeg' },
    { name: 'Jyotirmayee', branch: 'M.Sc Computer Science', imgSrc: '/Images/jyothi.jpeg' },
  ];

  return (
    <div className="App">
      <header className="header">
        <h1>Department of Computer Applications</h1>
      </header>

      <div className="banner">
        <img src="/Images/nitt.png" alt="NIT Logo" className="nit-logo-large" />
        <img src="/Images/nitt-mob-latest.png" alt="NIT Logo Mobile" className="nit-logo-small" />
        <img src="/Images/club.png" alt="Club Logo" className="club-logo" />
      </div>

      <NavBar />

      <div className="announcement-bar">
        <marquee>Optima Nov' 2024 Coming Soon....</marquee>
      </div>

      <Highlights />

      {/* Main Content */}
      <div>
        {/* About the Department Section */}
        <section id="about" className="about-section">
          <h2>About the Department</h2>
          <p>
            The <strong>Department of Computer Applications</strong> is a leading institution in offering top-tier <strong>Information Technology</strong> courses, including <strong>MCA</strong>, <strong>MSc in Computer Science</strong>, and <strong>M.Tech in Data Analytics</strong>. Ranked among the top five MCA programs in the country, we are committed to providing <strong>quality education</strong> through a blend of rigorous <strong>theoretical knowledge</strong> and <strong>practical training</strong>.
          </p>
          <p>
            Our <strong>faculty</strong>, all with <strong>doctorate degrees</strong>, are dedicated to maintaining high educational standards and engaging in <strong>research</strong> and <strong>projects</strong>. The department emphasizes <strong>holistic student development</strong>, encouraging both <strong>academic excellence</strong> and active participation in <strong>co-curricular</strong> and <strong>extracurricular activities</strong>.
          </p>
          <p>
            We aim to foster <strong>value-based professionalism</strong>, equipping students with the skills and knowledge to excel in the dynamic field of <strong>IT</strong> and contribute positively to <strong>society</strong>.
          </p>
        </section>

        {/* Events Section */}
        <section id="events" className="events-section">
          <h2>Events</h2>
          <div className="events-container">
            <div className="event-card">ML Hackathon</div>
            <div className="event-card">Coding Event</div>
            <div className="event-card">Tech Charades</div>
            <div className="event-card">Treasure Hunt</div>
            <div className="event-card">Gaming Event</div>
            <div className="event-card">Quiz</div>
          </div>
          <p className="more-info"><a href="#gallery">More info on events</a></p>
        </section>

        {/* Sponsors Section */}
        <section id="sponsors" className="sponsors-section">
          <h2>Become a Sponsor</h2>
          <p>
            Interested in sponsoring OPTIMA? <a href="register.html" className="sponsor-link">Click here to register yourself</a> or <a href="contact.html" className="sponsor-link">contact us for more details</a> about sponsorship opportunities.
          </p>
        </section>

        {/* Gallery Section */}
        <section id="gallery" className="gallery-section">
          <h2>Gallery</h2>
          <Gallery images={slideImages} />
        </section>

        {/* Team Section */}
        <section id="team" className="team-section">
          <h2>Optima 2024 Team</h2>
          <div className="team-container">
            <h3>Core Committee Members</h3>
            <div className="team-grid">
              {teamMembers.map((member, index) => (
                <TeamMember key={index} {...member} />
              ))}
            </div>
            <h3>Core Members</h3>
            <div className="core-grid">
              {coreMembers.map((member, index) => (
                <TeamMember key={index} {...member} />
              ))}
            </div>
          </div>
        </section>
      </div>

      <footer>
        <p>&copy; 2024 Department of Computer Applications. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
