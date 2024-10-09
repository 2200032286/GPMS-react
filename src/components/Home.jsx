import React from 'react';
import './Home.css'; // Link to the CSS file for styling

export default function Home() {
  return (
    <div className="home-container">
      <div className="overlay"></div> {/* For darkening the background image */}
      <div className="home-content">
        <h1>Group Project Management System</h1>
        <p>
          This platform is designed to help students manage group projects efficiently. 
          Collaborate on tasks, track progress, and meet project milestones effectively.
        </p>
      </div>
    </div>
  );
}
