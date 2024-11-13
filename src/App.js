import './App.css';
import Skills from './pages/Skills';
import Header from './components/Header/Header';
import Education from './pages/Education';
import Project from './pages/Projects';
import Work from './pages/Work';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container } from 'react-bootstrap';
import React, { useRef, useState } from 'react';

function App() {
  const homeRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const experienceRef = useRef(null);
  const educationRef = useRef(null);

  const scrollToSection = (ref) => {
    window.scrollTo({
      top: ref.current.offsetTop,
      behavior: 'smooth',
    });
  };

  const [showNav, setShowNav] = useState(false);

  const handleToggle = () => {
    setShowNav(!showNav);
  };

  return (
    <div className="App">
      <Navbar className='navbar' variant="dark" expand="lg" fixed="top">
        <Container>
          <Navbar.Brand href="/">
          <img src="/assets/image.png" alt="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-nav" onClick={handleToggle} />
          <Navbar.Collapse id="navbar-nav"  show={showNav}>

            <Nav className="ms-auto">
              <Nav.Link onClick={() => scrollToSection(homeRef)} >Home</Nav.Link>
              <Nav.Link onClick={() => scrollToSection(skillsRef)} >Skills</Nav.Link>
              <Nav.Link onClick={() => scrollToSection(projectsRef)} >Projects</Nav.Link>
              <Nav.Link onClick={() => scrollToSection(experienceRef)} >Work Experience</Nav.Link>
              <Nav.Link onClick={() => scrollToSection(educationRef)} >Education</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div ref={homeRef} id="home" style={{ height: '80vh', paddingTop: '80px' }}>
        <Header />
      </div>
      <div ref={skillsRef} id="skills">
        {/* style={{ height: '100vh', paddingTop: '40px', paddingBottom: '40px', backgroundColor: "grey" }} */}
        <Skills />
      </div>
      <div ref={projectsRef} id="projects">
        {/* style={{ height: '100vh', paddingTop: '60px' }} */}
        <Project />
      </div>
      <div ref={experienceRef} id="experience">
        <Work />
      </div>
      <div ref={educationRef} id="education">
        <Education />
      </div>
    </div>
  );
}

export default App;
