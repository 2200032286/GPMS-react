import React, { useState } from 'react';
import './AdminForm.css'; // Include this for styling

export default function AdminForm() {
  // State for form inputs
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    address: '',
    group: '',
    image: null,
  });

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle image upload
  const handleImageUpload = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform validation or API call here
    console.log(formData);
  };

  return (
    <div className="admin-form-container">
      <h2>Create Admin</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <label>First Name</label>
          <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required />
        </div>
        <div className="form-row">
          <label>Last Name</label>
          <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required />
        </div>
        <div className="form-row">
          <label>Email Address</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div className="form-row">
          <label>Phone</label>
          <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
        </div>
        <div className="form-row">
          <label>Password</label>
          <input type="password" name="password" value={formData.password} onChange={handleChange} required />
        </div>
        <div className="form-row">
          <label>Confirm Password</label>
          <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} required />
        </div>
        <div className="form-row">
          <label>Address</label>
          <input type="text" name="address" value={formData.address} onChange={handleChange} required />
        </div>
        <div className="form-row">
          <label>Group</label>
          <select name="group" value={formData.group} onChange={handleChange} required>
            <option value="">Select Group</option>
            <option value="Admin">Admin</option>
            <option value="Moderator">Moderator</option>
            <option value="Editor">Editor</option>
          </select>
        </div>
        <div className="form-row">
          <label>Image</label>
          <input type="file" name="image" accept="image/*" onChange={handleImageUpload} required />
        </div>
        <button type="submit" className="save-button">Save</button>
      </form>
    </div>
  );
}
