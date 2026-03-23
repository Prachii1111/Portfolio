import React from 'react'
import { useState, useEffect } from 'react';
import './Home.css';
import profile from "../assets/Profile.png"; // your image
import sun from "../assets/sun.png";
import moon from "../assets/moon.png";
import mail from "../assets/envelope.png";
import phone from "../assets/phone.png";
import github from "../assets/github2.png";
import linkedin from "../assets/linkedin.png";
import html from "../assets/html-5.png"
import css from "../assets/css-3.png";
import js from "../assets/js.png";
import react from "../assets/react2.png"
import node from "../assets/node-js.png"
import express from "../assets/express.png"
import mongdoDb from "../assets/mongodb.svg"
import MySQL from "../assets/mysql.svg";
import java from "../assets/java.svg"
import vsCode from "../assets/vscode2.png"
import vite from "../assets/vite.png"
import git from "../assets/git.svg"
import gitHub from "../assets/github.svg"
import postman from "../assets/postman.svg"
import vercel from "../assets/vercel.png"
import globe from "../assets/globe.png";
import githubWhite from "../assets/githubWhite2.png"
import frontend from "../assets/frontend_project.png"
import noteApp from "../assets/notes-taking-app.png"

export function Home() {
    const [dark, setDark] = useState(false);

    useEffect(() => {
        document.body.className = dark ? "dark" : "light";
    }, [dark]);

    const toggleTheme = () => {
        setDark(prev => {
            const newTheme = !prev;
            document.body.className = newTheme ? "dark" : "light";
            return newTheme;
        });
    };
    
    return(
        <>
        <main>
            <nav className="navbar">
                <ul className="nav-links">
                    <li>Home</li>
                    <li>About</li>
                    <li>Skills</li>
                    <li>Projects</li>
                    <li>Certifications</li>
                    <li>Contact</li>
                </ul>

                <button className={dark ? "theme-btn-dark" : "theme-btn-light" } onClick={toggleTheme}>
                    <img src={dark ? sun : moon } alt="theme icon" className="theme-icon"
                    />
                </button>
            </nav>
            

            {/* Hero Section  */}
            <section className="hero">

                <div className="hero-left">
                    <h1> Hi, I am <span className="highlight">Prachi</span></h1>

                    <p>
                    A curious developer who loves turning ideas into
                    clean code, smooth UI, and meaningful user experiences. I am a
                    Software Developer passionate about building projects and learning
                    new technologies.
                    </p>

                    <p> This is my place for <span className="tag">thoughts, reflections & everything</span> in between.</p>
                </div>

                <div className="hero-right">
                    <img src={profile} alt="profile" className="profile-pic"/>
                </div>
            </section>

            {/* About Section */}

            {/* About Me */}
            <section id="about-section">
                <div className="about-me">
                    <h2 id="about-heading">About <span>Me</span></h2>
                    <div className="about">
                        <p className="about-desc">I'm a Computer Engineering student passionate about software development and building real-world applications. I enjoy transforming ideas into working products through code and continuous experimentation.</p> 
                        <p className="about-desc">My current focus is on full-stack development, working with technologies like <span>JavaScript</span>, <span>React</span>, <span>Node.js</span>, and databases such as <span>MongoDB</span> and <span>MySQL</span>. I enjoy learning through projects and solving technical challenges along the way.</p>

                        <p className="about-desc">
                            Beyond coding, I relish reading developer blogs and journaling, which helps me reflect, stay motivated, and maintain a clear and focused mindset.
                        </p>
                    </div>
                </div>

                <div className="social-handles">
                    <h3>Contact</h3>

                    <div className="socials">
                        <div className="first">
                            <div className="mail">
                                <img src={mail} alt="Email" />
                                <p>prachu11badekar@gmail.com</p>
                            </div>
                            <div className="phone">
                                <img src={phone} alt="Email" />
                                <p>+91 7284392849</p>
                            </div>
                        </div>
                        <div className="second">
                            <div className="linkedin">
                                <img src={linkedin} alt="Email" />
                                <a href="">LinkedIn</a>
                            </div>
                            <div className="github">
                                <img src={github} alt="Email" />
                                <a href="https://github.com/Prachii1111" target="_blank">Visit Github</a>
                            </div>
                        </div>
                    </div> 
                </div>
            </section>

            {/* Skills */}
            <section className="skills-section">
                <div className="header">
                    <h2>Skills</h2>
                    <p>Technologies I work with</p>
                    <div className="bar"></div>
                </div>

                <div className="frontend">
                    <div className="heading">
                        <h3>Frontend</h3>
                        <hr/>
                    </div>
                    <p className="text">Building beautiful, responsive user interfaces</p>
                    <div className="frontend-stacks">
                        <div className="stack">
                            <img src={html}/>
                            <p>HTML</p>
                        </div>
                        <div className="stack">
                            <img src={css}/>
                            <p>CSS</p>
                        </div>
                        <div className="stack">
                            <img src={js}/>
                            <p>JavaScript</p>
                        </div>
                        <div className="stack">
                            <img src={react}/>
                            <p>React</p>
                        </div>
                        

                    </div>
                </div>

                <div className="backend">
                    <div className="heading">
                        <h3>Backend</h3>
                        <hr/>
                    </div>
                    <p>Powering applications with robust server-side logic</p>
                    <div className="backend-stacks">
                        <div className="stack">
                            <img src={node} />
                            <p>Node.js</p>
                        </div>
                        <div className="stack">
                            <img src={express} />
                            <p>Express.js</p>
                        </div>
                        <div className="stack">
                            <img src={mongdoDb} />
                            <p>MongoDB</p>
                        </div>
                        <div className="stack">
                            <img src={MySQL} />
                            <p>MySQL</p>
                        </div>
                        
                    </div>
                </div>

                <div className = "languages">
                    <div className="heading">
                        <h3>Languages</h3>
                        <hr/>
                    </div>
                    <p>Core programming languages I work with</p>

                    <div className="language-stack">
                        <div className="stack">
                            <img src={java}/>
                            <p>Java</p>
                        </div>
                    </div>
                </div>

                <div className = "toolsPlatform">
                    <div className="heading">
                        <h3>Tools & Platform</h3>
                        <hr/>
                    </div>
                    <p>Dev tools and platforms that streamline my workflow</p>

                    <div className="tools-stack">
                        <div className="stack">
                            <img src={vsCode}/>
                            <p>VS Code</p>
                        </div>
                        <div className="stack">
                            <img src={git}/>
                            <p>Git</p>
                        </div>
                        <div className="stack">
                            <img src={gitHub}/>
                            <p>GitHub</p>
                        </div>
                        <div className="stack">
                            <img src={postman}/>
                            <p>Postman</p>
                        </div>
                        <div className="stack">
                            <img src={vite}/>
                            <p>Vite</p>
                        </div>
                        <div className="stack">
                            <img src={vercel}/>
                            <p>Vercel</p>
                        </div>

                    </div>
                </div> 
            </section>

            {/* Projects */}
            <section className="projects-section">
                <div className="project-heading">
                    <h3>Projects</h3>
                    <p>My Recent Works</p>
                    <div className="bar"></div>
                </div>

                <div className="projects-intro">
                    <div className="project-card">
                        <div className="project-preview">
                            <img src={frontend} />
                        </div>
                        <div className="project-info">
                            {/* <div className="intro"> */}
                                <p className="title">MindMock</p>
                                {/* <div className="socials">
                                    <img src={githubWhite} />
                                    <img src={globe} />
                                </div> */}
                            {/* </div> */}
                            <p className="desc">TheMindMock is an AI-powered career preparation platform that helps job seekers optimize their resumes and simulate realistic.</p>
                            <div className="project-stack">
                                <div className="stack-name">
                                    <img src={react}/>
                                    <span>React</span>
                                </div>
                                <div className="stack-name">
                                    <img src={node}/>
                                    <span>NodeJs</span>
                                </div>
                                <div className="stack-name">
                                    <img src={mongdoDb} />
                                    <span>MongoDB</span>
                                </div>
                            </div>
                            <div className="links">
                                <button>
                                    <img src={githubWhite} />
                                    <span>Source Code</span>
                                </button>
                                <button>
                                    <img src={globe} />
                                    <span>Live Demo</span>
                                </button>
                            </div>
                        </div>

                    </div>

                    <div className="project-card">
                        <div className="project-preview">
                            <img src={noteApp} />
                        </div>
                        <div className="project-info">
                            {/* <div className="intro"> */}
                                <p className="title">MindMock</p>
                                {/* <div className="socials">
                                    <img src={githubWhite} />
                                    <img src={globe} />
                                </div> */}
                            {/* </div> */}
                            <p className="desc">TheMindMock is an AI-powered career preparation platform that helps job seekers optimize their resumes and simulate realistic.</p>
                            <div className="project-stack">
                                <div className="stack-name">
                                    <img src={react}/>
                                    <span>React</span>
                                </div>
                                <div className="stack-name">
                                    <img src={node}/>
                                    <span>NodeJs</span>
                                </div>
                                <div className="stack-name">
                                    <img src={mongdoDb} />
                                    <span>MongoDB</span>
                                </div>
                            </div>
                            <div className="links">
                                <button>
                                    <img src={githubWhite} />
                                    <span>Source Code</span>
                                </button>
                                <button>
                                    <img src={globe} />
                                    <span>Live Demo</span>
                                </button>
                            </div>
                        </div>

                    </div>

                    <div className="project-card">
                        <div className="project-preview">
                            <img src={noteApp} />
                        </div>
                        <div className="project-info">
                            {/* <div className="intro"> */}
                                <p className="title">MindMock</p>
                                {/* <div className="socials">
                                    <img src={githubWhite} />
                                    <img src={globe} />
                                </div> */}
                            {/* </div> */}
                            <p className="desc">TheMindMock is an AI-powered career preparation platform that helps job seekers optimize their resumes and simulate realistic.</p>
                            <div className="project-stack">
                                <div className="stack-name">
                                    <img src={react}/>
                                    <span>React</span>
                                </div>
                                <div className="stack-name">
                                    <img src={node}/>
                                    <span>NodeJs</span>
                                </div>
                                <div className="stack-name">
                                    <img src={mongdoDb} />
                                    <span>MongoDB</span>
                                </div>
                            </div>
                            <div className="links">
                                <button>
                                    <img src={githubWhite} />
                                    <span>Source Code</span>
                                </button>
                                <button>
                                    <img src={globe} />
                                    <span>Live Demo</span>
                                </button>
                            </div>
                        </div>

                    </div>
                </div>

            </section>

            {/* Certifications */}
            <section className="certifications-section">
                <div className="certificate-heading">
                    <h3>Certifications</h3>
                    <p>Theoretical foundations that power my practical solutions</p>
                </div>
            </section>


            
    </main>

    </>
    )
}

