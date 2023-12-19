import React, { useState } from 'react';

const AdmissionForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: 0,
    selectedBatch: '',
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic form validation
    if (!formData.name || formData.age < 18 || formData.age > 65 || !formData.selectedBatch) {
      alert('Invalid data. Please fill in all fields correctly.');
      return;
    }

    // Call the backend API to store the data
    const response = await fetch('https://your-backend-api-url/submitForm', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const result = await response.json();
    console.log(result); // Handle the response accordingly
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" onChange={handleInputChange} />
      </label>
      <br />
      <label>
        Age:
        <input type="number" name="age" onChange={handleInputChange} />
      </label>
      <br />
      <label>
        Select Batch:
        <select name="selectedBatch" onChange={handleInputChange}>
          <option value="6-7AM">6-7AM</option>
          <option value="7-8AM">7-8AM</option>
          <option value="8-9AM">8-9AM</option>
          <option value="5-6PM">5-6PM</option>
        </select>
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default AdmissionForm;
