import React, { useState } from 'react';
import './App.css';
import TeamMember from './components/TeamMember';
import Gallery from './components/Gallery';
import Highlights from './components/Highlights';
import NavBar from './components/NavBar';

const App = () => {
  const [activeSection, setActiveSection] = useState('about');

  const isMobile = window.innerWidth <= 900;

  const slideImages = [
    '/Images/optima-23-1.jpeg',
    '/Images/optima-23-5.jpeg',
    '/Images/optima-23-6.jpeg',
    '/Images/optima-23-7.jpeg',
    '/Images/optima-23-8.jpeg',
    '/Images/optima-23-9.jpeg',
    '/Images/optima-23-10.jpeg',
    '/Images/optima-23-11.jpeg',
    '/Images/optima-23-12.jpeg',
    '/Images/optima-23-13.jpeg'
  ];

  const archiveImages = [
    '/Images/optima-23-2.jpeg',
    '/Images/optima-23-3.jpeg',
    '/Images/optima-23-4.jpeg',
    '/Images/optima-23-1.jpeg',
    '/Images/optima-23-5.jpeg',
    '/Images/optima-23-6.jpeg',
    '/Images/optima-23-7.jpeg',
    '/Images/optima-23-8.jpeg',
    '/Images/optima-23-9.jpeg',
    '/Images/optima-23-10.jpeg',
    '/Images/optima-23-11.jpeg',
    '/Images/optima-23-12.jpeg',
    '/Images/optima-23-13.jpeg',
    '/Images/optima-23-1.jpeg',
    '/Images/optima-23-5.jpeg',
    '/Images/optima-23-6.jpeg',
    '/Images/optima-23-7.jpeg',
    '/Images/optima-23-8.jpeg',
    '/Images/optima-23-9.jpeg',
    '/Images/optima-23-10.jpeg',
    '/Images/optima-23-11.jpeg',
    '/Images/optima-23-12.jpeg',
    '/Images/optima-23-13.jpeg'
  ]

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

  const facultyAdvisor = {
    name: 'Dr. B.Janet',
    branch: 'Department of Computer Applications',
    imgSrc: '/Images/janet.jpeg',
  };

  return (
    <div className="App">
      <div className="banner">
        <img src="/Images/nitt.png" alt="NIT Logo" className="nit-logo-large" />
        <img src="/Images/nitt-mob-latest.png" alt="NIT Logo Mobile" className="nit-logo-small" />
        <img src="/Images/club.png" alt="Club Logo" className="club-logo" />
      </div>

      <header id="home" className="header">
        <h1>Department of Computer Applications</h1>
        <NavBar setActiveSection={setActiveSection} />
      </header>

      <div className="announcement-bar">
        <marquee>Optima Nov' 2024 Coming Soon....</marquee>
      </div>

      <Highlights />

      {/* Main Content */}
      <div>
        {(isMobile || activeSection === 'about') && (
          <section id="about" className="about-section">
            <div>
              <h2>About the Department</h2>
              <p>
                The <strong>Department of Computer Applications</strong> is a pioneering department within the institution, offering premier Information Technology courses, including the <strong>Master of Computer Applications (MCA)</strong>, <strong>Master of Science in Computer Science</strong>, and <strong>M.Tech in Data Analytics</strong>. Recognized among the top five MCA programs in the country, the department is committed to delivering high-quality education that blends robust theoretical foundations with extensive practical training.
              </p>
              <p>
                Comprising over <strong>20 faculty members</strong>, all holding doctorate degrees, the department actively engages in research and project work alongside teaching. Faculty dedication is reflected in successful student placements and the production of Ph.D. graduates. To keep pace with rapidly evolving technology, faculty participate in ongoing professional development through refresher courses and symposia.
              </p>
              <p>
                Students are encouraged to develop organizational skills and teamwork through seminars and group discussions, alongside maintaining strong academic performance. The department also emphasizes participation in co-curricular and extracurricular activities to foster the holistic development of its students.
              </p>
            </div>
          </section>
        )}

        {(isMobile || activeSection === 'events') && (
          <section id="events" className="events-section">
            <div>
              <h2>Events</h2>
              <div className="events-container">
                <div className="event-card">Codecraft</div>
                <div className="event-card">Outliers</div>
                <div className="event-card">Clash of Thoughts</div>
                <div className="event-card">Matrix Maze</div>
                <div className="event-card">Brain Cache</div>
                <div className="event-card">Pitch Perfect</div>
                <div className="event-card">Elite Warfare</div>
                <div className="event-card">Tech Charades</div>
              </div>
              <p className="more-info"><a href="https://spangled-freckle-3c4.notion.site/Welcome-to-Optima-2024-10bb3143bf688027a32afba9c503dfde">More info on events</a></p>
            </div>
          </section>
        )}

        {(isMobile || activeSection === 'sponsors') && (
          <section id="sponsors" className="sponsors-section">
            <div>
              <h2>Become a Sponsor</h2>
              <p>
                Interested in sponsoring OPTIMA? <a href="https://spangled-freckle-3c4.notion.site/Welcome-to-Optima-2024-10bb3143bf688027a32afba9c503dfde" className="sponsor-link">Click here to register yourself</a> or <a href="https://spangled-freckle-3c4.notion.site/Welcome-to-Optima-2024-10bb3143bf688027a32afba9c503dfde" className="sponsor-link">contact us for more details</a> about sponsorship opportunities.
              </p>
            </div>
          </section>
        )}

        {(isMobile || activeSection === 'gallery') && (
          <section id="gallery" className="gallery-section">
            <h2>Gallery '24</h2>
            <Gallery images={slideImages} archive={true} setActiveSection={setActiveSection} />
          </section>
        )}

        {(isMobile || activeSection === 'team') && (
          <section id="team" className="team-section">
            <h2>Optima 2024 Team</h2>
            <h3>Faculty Advisor</h3>
            <div className="faculty-advisor">
              <TeamMember key="faculty-advisor" {...facultyAdvisor} />
            </div>
            <h3>Core Committee </h3>
            <div className="team-grid">
              {teamMembers.map((member, index) => (
                <TeamMember key={index} {...member} />
              ))}
            </div>
            <div className="core-grid">
              {coreMembers.map((member, index) => (
                <TeamMember key={index} {...member} />
              ))}
            </div>
          </section>
        )}

        {(isMobile || activeSection === 'archive') && (
          <section id="archive" className="archive-section">
            <h2>Gallery</h2>
            <Gallery images={archiveImages} archive={false} setActiveSection={setActiveSection} />
          </section>
        )}
      </div>

      <footer>
        <p>&copy; 2024 Department of Computer Applications. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
