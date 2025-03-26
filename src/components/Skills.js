import React from 'react';
import {
  FaReact,
  FaJava,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaDatabase,
  FaGithub
} from 'react-icons/fa';
import { SiSpringboot, SiMysql } from 'react-icons/si';
import './Skills.css';

const skills = [
  { name: "React", icon: <FaReact /> },
  { name: "Java", icon: <FaJava /> },
  { name: "Spring Boot", icon: <SiSpringboot /> },
  { name: "MySQL", icon: <SiMysql /> },
  { name: "JavaScript", icon: <FaJsSquare /> },
  { name: "HTML5", icon: <FaHtml5 /> },
  { name: "CSS3", icon: <FaCss3Alt /> },
  { name: "GitHub", icon: <FaGithub /> },
  { name: "Databases", icon: <FaDatabase /> }
];

const Skills = () => {
  return (
    <div className="section skills-section">
      <h2>Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            <div className="icon">{skill.icon}</div>
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
