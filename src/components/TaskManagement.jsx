import React from 'react';
import './Tasks.css'; // Link to the CSS file for styling
import { Link } from 'react-router-dom';

export default function TaskDashboard() {
  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="sidebar-header">
          <h3>Task Management</h3>
        </div>
        <ul className="sidebar-menu">
          <li>Dashboard</li>
          <li>Admins</li>
          <li>Categories</li>
          <li>Team Members</li>
          <li><Link to='\create-project'>Projects</Link></li>
          <li>Tasks</li>
          <li>Productivities</li>
          <li>Reports</li>
          <li>Settings</li>
        </ul>
      </aside>

      {/* Main Dashboard Content */}
      <main className="dashboard-content">
        <header className="dashboard-header">
          <h2>Dashboard</h2>
          <div className="user-info">
            <span>Language</span>
            <span>Super Admin</span>
          </div>
        </header>
        <section className="dashboard-stats">
          <div className="stat-card">
            <h3>0 Admins</h3>
            <button>Show Info</button>
          </div>
          <div className="stat-card">
            <h3>0 Members</h3>
            <button>Show Info</button>
          </div>
          <div className="stat-card">
            <h3>0 Categories</h3>
            <button>Show Info</button>
          </div>
          <div className="stat-card">
            <h3>0 Designations</h3>
            <button>Show Info</button>
          </div>
          <div className="stat-card">
            <h3>0 Projects</h3>
            <button>Show Info</button>
          </div>
          <div className="stat-card">
            <h3>0 Pending Tasks</h3>
            <button>Show Info</button>
          </div>
          <div className="stat-card">
            <h3>0 Completed Tasks</h3>
            <button>Show Info</button>
          </div>
          <div className="stat-card">
            <h3>0 Productivities</h3>
            <button>Show Info</button>
          </div>
        </section>

        {/* Pending Tasks */}
        <section className="pending-tasks">
          <h3>Pending Tasks</h3>
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>Project</th>
                <th>Task</th>
                <th>Duration</th>
                <th>Status</th>
                <th>Date</th>
                <th>Manage</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan="7">No data available in table</td>
              </tr>
            </tbody>
          </table>
          <button className="create-task-btn">+ Create New</button>
        </section>
      </main>
    </div>
  );
}

