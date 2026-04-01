import React from 'react'
import { useState, useEffect } from 'react';
import './Home.css';
import "./Certifications.css";
// import './Home2.css';
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
import upgrad from "../assets/certificates/Upgrad.jpeg"
import javaCert from "../assets/certificates/Java Certificate.jpg"
import sql from "../assets/certificates/SQLMap_Certificate.jpg"
import leetCode from "../assets/leetcode-removebg.png"
import hackerRank from "../assets/hackerrank.png"
import instagram from "../assets/instagram.png"
import twitter from "../assets/twitter (3).png"
import telegram from "../assets/telegram.png"
import frontendMentor from "../assets/frontend.png";

export function Home() {
    const [dark, setDark] = useState(false);
    const [showAll, setShowAll] = useState(false);
    const [scrolled, setScrolled] = useState(false);


    useEffect(() => {
        document.body.className = dark ? "dark" : "light";
    }, [dark]);

    useEffect(() => {
    const handleScroll = () => {
    if (window.scrollY > 50) {
        setScrolled(true);
    } else {
        setScrolled(false);
    }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
    }, []);


    const toggleTheme = () => {
        setDark(prev => {
            const newTheme = !prev;
            document.body.className = newTheme ? "dark" : "light";
            return newTheme;
        });
    };

    const certificates = [
        {
            image: upgrad,
            title: "Advanced Full Stack Development",
            platform: "UpGrad",
            date: "Apr 2025",
            link: "https://verify.upgrad.com/certificate/123"
        },
        {
            image: javaCert,
            title: "Java Programming for Beginners",
            platform: "Simplilearn",
            date: "Mar 2025",
            
        },
        {
            image: sql,
            title: "SQLMap for Ethical Hackers",
            platform: "Udemy",
            date: "Feb 2025",
        },
        {
            image: upgrad,
            title: "Advanced Full Stack Development",
            platform: "UpGrad",
            date: "Apr 2025",
            link: "https://verify.upgrad.com/certificate/123"
        },
        {
            image: javaCert,
            title: "Java Programming for Beginners",
            platform: "Simplilearn",
            date: "Mar 2025",
        },
        {
            image: sql,
            title: "SQLMap for Ethical Hackers",
            platform: "Udemy",
            date: "Feb 2025",
        },

    ];

    const visibleCertificates = showAll
    ? certificates
    : certificates.slice(0, 3);

    
    return(
        <>
        <main>
            <header className={`header ${scrolled ?     "scrolled" : ""}`}>
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
            </header>
            
        
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
                    <div className="about-intro">
                        <h2 id="about-heading">About Me</h2>
                        <div className="bar"></div>
                    </div>
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
                                <a href="https://www.linkedin.com/in/prachii11/" target="_blank">LinkedIn</a>
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
                <div className="skills-header">
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
                    <p className="text">Powering applications with robust server-side logic</p>
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
                    <p className="text">Core programming languages I work with</p>

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
                    <p className="text">Dev tools and platforms that streamline my workflow</p>

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
                                <button id="github-btn">
                                    <img src={githubWhite} />
                                    <span>Source Code</span>
                                </button>
                                <button id="liveDemo">
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
                                <button id="github-btn">
                                    <img src={githubWhite} />
                                    <span>Source Code</span>
                                </button>
                                <button id="liveDemo">
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
                                <button id="github-btn">
                                    <img src={githubWhite} />
                                    <span>Source Code</span>
                                </button>
                                <button id="liveDemo">
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
                    <div className="bar"></div>
                </div>

                <button className="view-all-btn"
                    onClick={() => setShowAll(prev => !prev)}>
                    {showAll ? "Show Less" : "View All"}
                </button>

                <div className={`certificates-container ${showAll ? "scroll" : ""}`}>
                    {visibleCertificates.map((cert, index) => (
                        
                        <div className="certificate-card" key={index}>

                        <img src={cert.image} alt="certificate" />

                        {/* ✅ ADD THIS WRAPPER */}
                        <div className="overlay">
                            <div className="overlay-content">
                            <h4>{cert.title}</h4>
                            <p>{cert.platform}</p>
                            <span>{cert.date}</span>

                            <button className="verify-btn" onClick={() => window.open(cert.link, "_blank")}>Verify</button>
                        </div>
                        </div>
                    </div>
                    ))}
                </div>

            </section>

            {/* Get in touch */}

            {/* <section className="get-in-touch-section">
                <div className="get-in-touch-heading">
                    <h3>Get In Touch</h3>
                    <p>Got an idea, a question or just want to say hi ? My inbox is always open!</p>
                    <div className="bar"></div>
                </div>

                <div className="social-handles">
                    <div className="handles">
                        <img src={leetCode}/>
                        <p>LeetCode</p>
                    </div>
                    <div className="handles">
                        <img src={hackerRank}/>
                        <p>HackerRank</p>
                    </div>
                    <div className="handles">
                        <img src={frontendMentor}/>
                        <p>FrontendMentor</p>
                    </div>
                </div>
            </section> */}

            {/* Portfolio */}
            <section className="portfolio-section">
                <div className="portfolio-heading">
                    <h3>Portfolio</h3>
                    <p>Explore my work and projects. Ready to collaborate or view details? Choose your preferred way to connect!</p>
                    <div className="bar"></div>
                </div>

                <div className="get-in-touch-handles">
                    
                    <div className="platform">
                        <img src={instagram} alt="Instagram" />
                        <p>Instagram</p>
                    </div>
                    <div className="platform">
                        <img src={twitter} alt="Twitter" />
                        <p>Twitter</p>
                    </div>
                    <div className="platform">
                        <img src={telegram} alt="Telegram" />
                        <p>Telegram</p>
                    </div>
                    <div className="platform">
                        <img src={frontendMentor} alt="frontendMentor" />
                        <p>FrontendMentor</p>
                    </div>
                    <div className="platform">
                        <img src={leetCode} alt="frontendMentor" />
                        <p>LeetCode</p>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="footer">
                <p className="footer-intro">@ 2026 Made with 💜 by Prachi B. All rights reserved.</p>

                <p className="built">
                    Built with <span className="react"><img src={react}/></span>
                    using <span className="vite"><img src={vite}/></span>
                </p>

            </footer>
    </main>

    </>
    )
}

