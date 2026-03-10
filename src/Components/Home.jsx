import React from 'react'
import { useState } from 'react';
import './Home.css';
import profile from "../assets/Profile.png"; // your image
import sun from "../assets/sun.png";
import moon from "../assets/moon.png";

export function Home() {
    const [dark, setDark] = useState(true);

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
                    <li>Projects</li>
                    <li>Certifications</li>
                    <li>Contact</li>
                </ul>

                <button className="theme-btn" onClick={toggleTheme}>
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
                    <h2 id="about-heading">About Me</h2>
                    <div className="about">
                        <p className="about-desc">I'm a Computer Engineering student passionate about software development and building real-world applications. I enjoy transforming ideas into working products through code and continuous experimentation.</p> 
                        <p className="about-desc">My current focus is on full-stack development, working with technologies like <span>JavaScript</span>, <span>React</span>, <span>Node.js</span>, and databases such as <span>MongoDB</span> and <span>MySQL</span>. I enjoy learning through projects and solving technical challenges along the way.</p>

                        <p className="about-desc">
                            Beyond coding, I relish reading developer blogs and journaling, which helps me reflect, stay motivated, and maintain a clear and focused mindset.
                        </p>
                    </div>
                </div>
            </section>


            
    </main>

    </>
    )
}

