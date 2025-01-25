// frontend/src/Profile.js

import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom'; 

function Profile() {
  const [file, setFile] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    skills: [],
    experience: [],
    education: [],
  });

  const navigate = useHistory(); 

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('resume', file);

    try {
      const response = await axios.post('http://localhost:3005/api/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log(response.data);
      setFormData(response.data);
      navigate('/profile'); // Redirect to the profile page after successful upload
    } catch (error) {
      console.error('Error uploading resume:', error);
    }
  };

  return (
    <div>
      <h1>Resume Uploader</h1>
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={handleFileChange} />
        <button type="submit">Upload</button>
      </form>

      <h2>Extracted Data</h2>
      <div>
        <label>Name:</label>
        <input type="text" value={formData.name} readOnly />
      </div>
      <div>
        <label>Email:</label>
        <input type="text" value={formData.email} readOnly />
      </div>
      <div>
        <label>Phone:</label>
        <input type="text" value={formData.phone} readOnly />
      </div>
      {/* Display extracted skills, experience, and education */}
    </div>
  );
}

export default Profile