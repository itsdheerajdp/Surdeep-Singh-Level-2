// useForm.js
import { useState } from 'react';

const useForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    applyingForPosition: '',
    relevantExperience: '',
    portfolioURL: '',
    managementExperience: '',
    additionalSkills: [],
    preferredInterviewTime: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      const updatedSkills = checked
        ? [...formData.additionalSkills, value]
        : formData.additionalSkills.filter(skill => skill !== value);
      setFormData({
        ...formData,
        additionalSkills: updatedSkills,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const validateForm = () => {
    let errors = {};

    if (!formData.fullName.trim()) {
      errors.fullName = 'Full Name is required';
    }
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email is invalid';
    }
    if (!formData.phoneNumber.trim() || isNaN(formData.phoneNumber)) {
      errors.phoneNumber = 'Phone Number is required and must be a valid number';
    }
    if (formData.applyingForPosition === 'Developer' || formData.applyingForPosition === 'Designer') {
      if (!formData.relevantExperience.trim() || isNaN(formData.relevantExperience) || parseInt(formData.relevantExperience) <= 0) {
        errors.relevantExperience = 'Relevant Experience is required and must be a number greater than 0';
      }
    }
    if (formData.applyingForPosition === 'Designer') {
      if (!formData.portfolioURL.trim()) {
        errors.portfolioURL = 'Portfolio URL is required';
      } else if (!isValidUrl(formData.portfolioURL)) {
        errors.portfolioURL = 'Portfolio URL is not valid';
      }
    }
    if (formData.applyingForPosition === 'Manager') {
      if (!formData.managementExperience.trim()) {
        errors.managementExperience = 'Management Experience is required';
      }
    }
    if (formData.additionalSkills.length === 0) {
      errors.additionalSkills = 'At least one skill must be selected';
    }
    if (!formData.preferredInterviewTime.trim()) {
      errors.preferredInterviewTime = 'Preferred Interview Time is required';
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const isValidUrl = (url) => {
    try {
      new URL(url);
      return true;
    } catch (_) {
      return false;
    }
  };

  return {
    formData,
    errors,
    handleChange,
    validateForm,
  };
};

export default useForm;
