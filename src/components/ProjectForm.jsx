import React, { useState } from 'react';
import './ProjectForm.css'; // Link to the CSS for styling

export default function ProjectForm() {
  const [formData, setFormData] = useState({
    projectName: '',
    members: [],
    workAllocation: '',
    startDate: '',
    deadline: '',
    newMember: ''
  });

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Add a new member
  const addMember = () => {
    if (formData.newMember.trim() !== '') {
      setFormData({
        ...formData,
        members: [...formData.members, formData.newMember],
        newMember: '' // Clear input field
      });
    }
  };

  // Handle form submission (you can add your API logic here)
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Project Form Data:', formData);
    // Handle form data submission (e.g., sending it to the server)
  };

  return (
    <div className="project-form-container">
      <h2>Create New Project</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Project Name:</label>
          <input
            type="text"
            name="projectName"
            value={formData.projectName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Add Team Member:</label>
          <input
            type="text"
            name="newMember"
            value={formData.newMember}
            onChange={handleChange}
          />
          <button type="button" onClick={addMember}>
            Add Member
          </button>
        </div>

        <div className="form-group">
          <label>Work Allocation:</label>
          <textarea
            name="workAllocation"
            value={formData.workAllocation}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Start Date:</label>
          <input
            type="date"
            name="startDate"
            value={formData.startDate}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Deadline:</label>
          <input
            type="date"
            name="deadline"
            value={formData.deadline}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Assigned Members:</label>
          <ul>
            {formData.members.map((member, index) => (
              <li key={index}>{member}</li>
            ))}
          </ul>
        </div>

        <button type="submit">Create Project</button>
      </form>
    </div>
  );
}
