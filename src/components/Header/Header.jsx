import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { Row, Col, Container } from 'react-bootstrap';

export default function Header() {

    return (
        <div>
            <Container className="mt-5 d-flex align-items-center">
                <Row>
                    <Col md={6} className='hero-section'>
                        <h1 className='my-5'>👋 Hi, I'm Subha,</h1>
                        <p className='fs-5'>A passionate full-stack developer with 5+ years of experience in crafting engaging web applications.</p>
                        <p className='fs-5'>I specialize in front-end development using HTML, CSS, and JavaScript, as well as back-end development with Node.js and Express.js. I'm dedicated to creating high-quality, efficient, and scalable solutions.</p>
                        {/* <h1>I'm Subha,</h1> */}
                        {/* <h3>Full Stack Developer</h3> */}
                        <div className="social-icons my-4">
                            <a
                                href="https://github.com/subhaps"
                                target="_blank"
                                rel="noopener noreferrer"
                                className='me-3'
                            >
                                <FontAwesomeIcon className="icon" icon={faGithub} size="lg" />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/subhaps/"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ textDecoration: 'none', color: 'black' }}
                                className='me-3'
                            >
                                <FontAwesomeIcon className="icon" icon={faLinkedin} size="lg" />
                            </a>
                        </div>
                    </Col>
                    <Col md={6} className='d-none d-md-block text-center mt-5 '>
                        <img src="/assets/profile-pic.png" className="profile-pic mx-auto d-block" alt="logo" />
                    </Col>
                </Row>
            </Container>

            {/* <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Hi, I'm Subha,
                </p>
                <p>Full Stack Developer
                </p>
                <div className=''>
                    <a
                        href="https://github.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ textDecoration: 'none', color: 'black' }}
                        className='me-3'
                    >
                        <FontAwesomeIcon className="icon" icon={faGithub} size="md" />
                    </a>
                    <a
                        href="https://github.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ textDecoration: 'none', color: 'black' }}
                        className='me-3'
                    >
                        <FontAwesomeIcon className="icon" icon={faLinkedin} size="md" />
                    </a>
                </div>
            </header> */}
        </div>
    );
}