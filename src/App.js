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
    'Images/optima-23-1.JPG',
    'Images/optima-23-2.JPG',
    'Images/optima-23-3.JPG',
    'Images/optima-23-4.JPG',
    'Images/optima-23-5.JPG',
    'Images/optima-23-6.JPG',
    'Images/optima-23-7.JPG',
    'Images/optima-23-8.JPG',
    'Images/optima-23-9.JPG',
    'Images/optima-23-10.JPG',
    'Images/optima-23-11.JPG',
    'Images/optima-23-12.JPG',
    'Images/optima-23-13.JPG',
    'Images/optima-23-14.JPG',
    'Images/optima-23-15.JPG',
    'Images/optima-23-16.JPG',
    'Images/optima-23-17.JPG',
    'Images/optima-23-18.JPG',
    'Images/optima-23-19.JPG',
    'Images/optima-23-20.JPG',
    'Images/optima-23-21.JPG',
    'Images/optima-23-22.JPG',
    'Images/optima-23-23.JPG',
    'Images/optima-23-24.JPG',
    'Images/optima-23-25.JPG',
    'Images/optima-23-26.JPG',
    'Images/optima-23-27.JPG',
    'Images/optima-23-28.JPG',
    'Images/optima-23-31.JPG',
    'Images/optima-23-32.JPG',
    'Images/optima-23-33.JPG',
    'Images/optima-23-34.JPG',
    'Images/optima-23-35.JPG',
    'Images/optima-23-36.JPG'
  ]

  const teamMembers = [
    { name: 'Prem Sagar', role: 'President', branch: 'M.Tech Data Analytics', imgSrc: '/Images/prem_sagar.png' },
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
        <img src="/Images/logo.png" alt="Club Logo" className="club-logo" />
      </div>

      <header id="home" className="header">
        <h1>Department of Computer Applications</h1>
        <NavBar setActiveSection={setActiveSection} />
      </header>

      <div className="announcement-bar">
        <div className="announcement">
          <span>Optima 2024: November 9-10!</span>
          <span>For event details, click <a href="https://spangled-freckle-3c4.notion.site/Welcome-to-Optima-2024-10bb3143bf688027a32afba9c503dfde">here</a>.</span>
          <span>Interested in sponsoring? Visit our <a href="#sponsors" onClick={() => setActiveSection('sponsors')}>sponsors section</a>!</span>
        </div>
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
                Comprising over <strong>20 faculty members</strong>, all holding doctorate degrees, the department actively engages in research and project work alongside teaching. Faculty dedication is reflected in successful student placements and the production of Ph.D. graduates. To keep pace with rapidly evolving technology, faculty participate in ongoing professional development through refresher courses and symposia, ensuring they remain at the forefront of the latest advancements in the field.
              </p>
              <p>
                The curriculum is designed to provide a comprehensive understanding of both theoretical concepts and practical applications. Courses cover diverse topics such as <strong>Artificial Intelligence</strong>, <strong>Machine Learning</strong>, <strong>Data Science</strong>, <strong>Web Development</strong>, and <strong>Cybersecurity</strong>. Students have the opportunity to work on industry-relevant projects, enhancing their skills and preparing them for the workforce.
              </p>
              <p>
                Students are encouraged to develop organizational skills and teamwork through seminars and group discussions, alongside maintaining strong academic performance. The department also emphasizes participation in co-curricular and extracurricular activities to foster the holistic development of its students. Regular workshops, hackathons, and coding competitions provide platforms for students to showcase their skills and collaborate on innovative solutions.
              </p>
              <p>
                Moreover, the department has established strong ties with industry partners, facilitating internships and collaborative projects that provide real-world experience. Alumni of the department are well-placed in leading tech companies, and their achievements serve as an inspiration for current students.
              </p>
              <p>
                With a commitment to nurturing future leaders in technology, the Department of Computer Applications continuously strives for excellence in education, research, and community engagement, preparing its students to meet the challenges of a dynamic and ever-evolving field.
              </p>
            </div>
          </section>

        )}

        {(isMobile || activeSection === 'events') && (
          <section id="events" className="events-section">
            <div>
              <h2>Events</h2>
              <div className="events-container">
                <a className="event-card" href='https://spangled-freckle-3c4.notion.site/CodeCraft-10cb3143bf6880ce9eeeecbe1650b0cb'><div >Codecraft</div></a>
                <a className="event-card" href='https://spangled-freckle-3c4.notion.site/Outliers-10cb3143bf6880c9a167ed06379aaa1b'><div >Outliers</div></a>
                <a className="event-card" href='https://spangled-freckle-3c4.notion.site/Clash-of-Thoughts-10cb3143bf68803fb05ac1cff146e91f'><div>Clash of Thoughts</div></a>
                <a className="event-card" href='https://www.notion.so/Matrix-Maze-4f50c4cd7b074087b2a3011d0390c031'><div >Matrix Maze</div></a>
                <a className="event-card" href='https://spangled-freckle-3c4.notion.site/BrainCache-10cb3143bf68806cab01c0e0d29a367e'><div >Brain Cache</div></a>
                <a className="event-card" href='https://spangled-freckle-3c4.notion.site/Pitch-Perfect-10cb3143bf6880f1b9c6f3886d7b6d47'><div >Pitch Perfect</div></a>
                <a className="event-card" href='https://spangled-freckle-3c4.notion.site/Elite-Warfare-10cb3143bf6880ed9d9fceb670170ac2'><div >Elite Warfare</div></a>
                <a className="event-card" href='https://spangled-freckle-3c4.notion.site/Tech-Charades-10cb3143bf688050aaeffdb67c7a3d52'><div >Tech Charades</div></a>
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
                Join us in making OPTIMA 2024 a grand success by becoming a sponsor! We have various sponsorship tiers designed to suit your support level:
              </p>
              <div className="sponsor-content">
                <div className="sponsorship-tiers">
                  <h3>Sponsorship Tiers:</h3>
                  <ul>
                    <li><strong>Gold Sponsorship:</strong> ₹20,000/-</li>
                    <li><strong>Silver Sponsorship:</strong> ₹10,000/-</li>
                    <li><strong>Bronze Sponsorship:</strong> ₹5,000/-</li>
                    <li><strong>Event Sponsorship:</strong> Cover the prize money for an entire event.</li>
                    <li><strong>Batch/Solo Sponsorship:</strong> A collective sponsorship by a batch or individually.</li>
                  </ul>
                </div>
                <div className="payment-qr">
                  <h3>Payment QR Code:</h3>
                  <img src="/Images/qr.jpeg" alt="Payment QR Code" className="qr-code" />
                </div>
              </div>
              <p>
                Your support will greatly enhance the experience for participants and showcase your commitment to fostering talent in the field!
              </p>
              <p>
                For any inquiries, please contact us at: <strong>8639409862</strong> or <strong>8008652561</strong>.
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
