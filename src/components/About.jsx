import React from 'react';
import './About.css'; // Link to the CSS file for styling

export default function About() {
  return (
    <div className="about-container">
      <h1>About the Group Project Management System</h1>
      <section>
        <h2>Project Overview</h2>
        <p>
          The Group Project Management System is a web-based platform designed to help students manage group projects efficiently. 
          It enables teams to collaborate, assign tasks, track progress, and meet project milestones, ensuring smooth coordination and successful project completion. 
        </p>
      </section>
      
      <section>
        <h2>Key Features</h2>
        <ul>
          <li><strong>Task Assignment and Management:</strong> Assign tasks to team members, set deadlines, and track the status of each task.</li>
          <li><strong>Progress Tracking:</strong> Monitor project milestones and visualize the team's progress in real time.</li>
          <li><strong>Collaboration Tools:</strong> Integrated chat and file sharing for seamless team communication.</li>
          <li><strong>Document Management:</strong> Organize and store project-related documents and reports in one place.</li>
        </ul>
      </section>
      
      <section>
        <h2>How It Works</h2>
        <p>
          The platform allows teams to create a new project and invite team members. Each project is divided into tasks that can be assigned to individuals.
          Task progress is tracked, and the team can collaborate using integrated tools such as chat and file sharing. The project manager can monitor overall progress
          using visual tools like progress bars and charts.
        </p>
      </section>
      
      <section>
        <h2>Benefits</h2>
        <ul>
          <li><strong>Efficient Collaboration:</strong> Centralized platform for all project activities, making collaboration seamless.</li>
          <li><strong>Improved Productivity:</strong> Task assignment and tracking improve individual accountability and team efficiency.</li>
          <li><strong>Timely Project Delivery:</strong> Progress tracking and milestone management help ensure that projects are completed on time.</li>
        </ul>
      </section>
      

      
    </div>
  );
}
