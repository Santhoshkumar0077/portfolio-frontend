import React from 'react';
import msk from "../public/msk.jpg"
import billing from "../public/billing.jpg"
import chat from "../public/chatapp.png"
import eCommerce from "../public/e-commerce.jpg"
import pharma from '../public/pharma.jpg'
import hr from "../public/human resouce.jpg"
import social from "../public/socialmediaapp.jpg"
const App = () => {
    return (
        <div>
            {/* Navigation Bar */}
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Santhosh Portfolio</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <a className="nav-link active" href="#about">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#skills">Skills</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#projects">Projects</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#contact">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <header className="bg-primary text-white text-center py-5 ">
                <h1>Welcome to My Portfolio</h1>
                <p>I'm a Web Developer passionate about creating amazing websites</p>
            </header>

            {/* About Section */}
            <section id="about" className="py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <h2>About Me</h2>
                            <p>
                                I'm a passionate web developer with expertise in front-end technologies such as React, JavaScript, and CSS. I love solving problems and bringing ideas to life through code.
                            </p>
                        </div>
                        <div className="col-md-6">
                            <img src={msk} alt="My Picture" style={{ width: "200px" }} className="img-fluid rounded-circle" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Skills Section */}
            <section id="skills" className="bg-light py-5">
                <div className="container">
                    <h2 className="text-center">Skills</h2>
                    <div className="row">
                        <div className="col-md-4">
                            <h4>Front-End</h4>
                            <ul>
                                <li>React js</li>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>Bootstrap</li>
                            </ul>
                        </div>
                        <div className="col-md-4">
                            <h4>Back-End</h4>
                            <ul>
                                <li>Node.js</li>
                                <li>Express</li>
                                <li>MongoDB</li>
                            </ul>
                        </div>
                        <div className="col-md-4">
                            <h4>Tools & Platforms</h4>
                            <ul>
                                <li>Git & github</li>
                                <li>Vercel</li>
                                <li>VS Code</li>
                                <li>Render</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Projects Section */}
            <div id="projects" className="p-5 ">
                <div className="container">
                    <h2 className="text-center">Projects</h2>
                    <div className="row">
                        {/* Project 1 - Real-Time Chat App */}
                        <div className="col-md-4">
                            <div className="card">
                                <img src={chat} className="card-img-top" alt="Real-Time Chat App" />
                                <div className="card-body">
                                    <h5 className="card-title">Real-Time Chat Application</h5>
                                    <p className="card-text">A dynamic chat application supporting real-time messaging with user authentication.</p>
                                    <a href="https://real-time-message-app-kbej.onrender.com/" target='_blank' className="btn btn-primary">View Project</a>
                                </div>
                            </div>
                        </div>

                        {/* Project 2 - E-Commerce Website */}
                        <div className="col-md-4">
                            <div className="card">
                                <img src={eCommerce} className="card-img-top" alt="E-Commerce Website" />
                                <div className="card-body">
                                    <h5 className="card-title">E-Commerce Website</h5>
                                    <p className="card-text">E-commerce platform with an intuitive UI and seamless online shopping.</p>
                                    <a href="https://e-commerce-eight-omega-98.vercel.app/" target="_blank" className="btn btn-primary">View Project</a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* Contact Section */}
            <section id="contact" className="bg-dark text-white py-5">
                <div className="container">
                    <h2 className="text-center">Contact</h2>
                    <form >
                        <div className="mb-3">
                            <label for="name" className="form-label">Name</label>
                            <input type="text" className="form-control" id="name" placeholder="Your Name" required />
                        </div>
                        <div className="mb-3">
                            <label for="email" className="form-label">Email</label>
                            <input type="email" className="form-control" id="email" placeholder="Your Email" required />
                        </div>
                        <div className="mb-3">
                            <label for="message" className="form-label">Message</label>
                            <textarea className="form-control" id="message" rows="3" placeholder="Your Message" required></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary">Send Message</button>
                    </form>
                </div>
            </section>
            <div className='bg-dark d-flex justify-content-center'>
                <a href="https://github.com/santhoshkumar0077" target="_blank" className="btn btn-secondary">
                    <i className="bi bi-github"></i> GitHub
                </a>
            </div>
            {/* Footer */}
            <footer className="bg-dark text-white text-center py-3">
                <p>&copy; 2025 My Portfolio. All Rights Reserved.</p>
            </footer>
        </div>
    );
};

export default App;
