import React from 'react';
import './Aboutus.css';

function Aboutus() {
  return (
    <div className="aboutus-container">
      <h1 className="aboutus-title">About Me</h1>
      <div className="aboutus-intro">
        <p>Hello! I’m Swapnil Patil, a passionate Computer Science Engineering student with a specialization in Cyber Security. I enjoy creating innovative solutions and working on projects that challenge me and contribute to the tech community. Here’s a bit more about me:</p>
      </div>
      <div className="aboutus-details">
        <h2>Contact Information</h2>
        
        <p><strong>LinkedIn:</strong> <a href="https://linkedin.com/in/swapnil-patil-dev/" target="_blank" rel="noopener noreferrer">linkedin.com/in/swapnil-patil-dev/</a></p>
        <p><strong>Email:</strong> <a href="mailto:ehswapnilpatil@gmail.com">ehswapnilpatil@gmail.com</a></p>
       

       
        <p><strong>Github:</strong> <a href="https://github.com/swapnilpatil-github" target="_blank" rel="noopener noreferrer">github.com/swapnilpatil-github</a></p>
        <h2>Education</h2>
        <p><strong>Institution:</strong> G.H. Raisoni Institute of Engineering and Technology</p>
        <p><strong>Degree:</strong> BTech in Computer Science Engineering (Cyber Security)</p>

        <h2>Skills</h2>
        <p><strong>Front-End:</strong> React, Redux, TailwindCSS, HTML, CSS</p>
        <p><strong>Back-End:</strong> Node, Express, JWT, MongoDB</p>
        <p><strong>Programming Languages:</strong> C++, JavaScript, Python</p>
        <p><strong>Tools:</strong> Postman, Git/GitHub, Linux</p>
      </div>
    </div>
  );
}

export default Aboutus;
