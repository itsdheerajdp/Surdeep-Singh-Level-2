// Form.js
import React, { useState } from 'react';
import useForm from './useForm';

const Form = () => {
  const { formData, errors, handleChange, validateForm } = useForm();
  const [submitted, setSubmitted] = useState(false);  

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validateForm();
    if (isValid) {
      setSubmitted(true);  
     
    }
  };

  const renderSubmittedData = () => {
    return (
      <div>
        <h2>Thank you for your submission!</h2>
        <p><strong>Full Name:</strong> {formData.fullName}</p>
        <p><strong>Email:</strong> {formData.email}</p>
        <p><strong>Phone Number:</strong> {formData.phoneNumber}</p>
        <p><strong>Applying for Position:</strong> {formData.applyingForPosition}</p>
        {formData.applyingForPosition === 'Developer' || formData.applyingForPosition === 'Designer' ? (
          <p><strong>Relevant Experience:</strong> {formData.relevantExperience}</p>
        ) : null}
        {formData.applyingForPosition === 'Designer' ? (
          <p><strong>Portfolio URL:</strong> {formData.portfolioURL}</p>
        ) : null}
        {formData.applyingForPosition === 'Manager' ? (
          <p><strong>Management Experience:</strong> {formData.managementExperience}</p>
        ) : null}
        <p><strong>Additional Skills:</strong> {formData.additionalSkills.join(', ')}</p>
        <p><strong>Preferred Interview Time:</strong> {formData.preferredInterviewTime}</p>
      </div>
    );
  };

  return (
    <div>
      <h1>Job Application Form</h1>
      {!submitted ? (
        <form onSubmit={handleSubmit}>
          <div>
            <label>Full Name:</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
            />
            {errors.fullName && <p className="error">{errors.fullName}</p>}
          </div>

          <div>
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <p className="error">{errors.email}</p>}
          </div>

          <div>
            <label>Phone Number:</label>
            <input
              type="text"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
            />
            {errors.phoneNumber && <p className="error">{errors.phoneNumber}</p>}
          </div>

          <div>
            <label>Applying for Position:</label>
            <select
              name="applyingForPosition"
              value={formData.applyingForPosition}
              onChange={handleChange}
            >
              <option value="">Select...</option>
              <option value="Developer">Developer</option>
              <option value="Designer">Designer</option>
              <option value="Manager">Manager</option>
            </select>
          </div>

          {formData.applyingForPosition === 'Developer' || formData.applyingForPosition === 'Designer' ? (
            <div>
              <label>Relevant Experience (years):</label>
              <input
                type="number"
                name="relevantExperience"
                value={formData.relevantExperience}
                onChange={handleChange}
              />
              {errors.relevantExperience && <p className="error">{errors.relevantExperience}</p>}
            </div>
          ) : null}

          {formData.applyingForPosition === 'Designer' ? (
            <div>
              <label>Portfolio URL:</label>
              <input
                type="text"
                name="portfolioURL"
                value={formData.portfolioURL}
                onChange={handleChange}
              />
              {errors.portfolioURL && <p className="error">{errors.portfolioURL}</p>}
            </div>
          ) : null}

          {formData.applyingForPosition === 'Manager' ? (
            <div>
              <label>Management Experience:</label>
              <input
                type="text"
                name="managementExperience"
                value={formData.managementExperience}
                onChange={handleChange}
              />
              {errors.managementExperience && <p className="error">{errors.managementExperience}</p>}
            </div>
          ) : null}

          <div>
            <label>Additional Skills:</label><br/>
            <input
              type="checkbox"
              name="JavaScript"
              value="JavaScript"
              checked={formData.additionalSkills.includes('JavaScript')}
              onChange={handleChange}
            />
            <label> JavaScript</label><br/>
            <input
              type="checkbox"
              name="CSS"
              value="CSS"
              checked={formData.additionalSkills.includes('CSS')}
              onChange={handleChange}
            />
            <label> CSS</label><br/>
            <input
              type="checkbox"
              name="Python"
              value="Python"
              checked={formData.additionalSkills.includes('Python')}
              onChange={handleChange}
            />
            <label> Python</label><br/>
            {/* Add more skills as needed */}
            {errors.additionalSkills && <p className="error">{errors.additionalSkills}</p>}
          </div>

          <div>
            <label>Preferred Interview Time:</label>
            <input
              type="datetime-local"
              name="preferredInterviewTime"
              value={formData.preferredInterviewTime}
              onChange={handleChange}
            />
            {errors.preferredInterviewTime && <p className="error">{errors.preferredInterviewTime}</p>}
          </div>

          <button type="submit">Submit</button>
        </form>
      ) : (
        renderSubmittedData()
      )}
    </div>
  );
};

export default Form;
