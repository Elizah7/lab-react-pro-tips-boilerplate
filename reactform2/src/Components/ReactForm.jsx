import React, { useState } from 'react';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    contacts: '',
  });

  const [formErrors, setFormErrors] = useState({
    firstName: '',
    lastName: '',
    email: '',
    contacts: '',
  });

  const validateForm = (e) => {
    e.preventDefault();
    let valid = true;
    const newErrors = { ...formErrors };

    // Validate first name
    if (formData.firstName.trim() === '') {
      newErrors.firstName = 'Please enter your first name!';
      valid = false;
    } else {
      newErrors.firstName = '';
    }

    // Validate last name
    if (formData.lastName.trim() === '') {
      newErrors.lastName = 'Please enter your last name!';
      valid = false;
    } else {
      newErrors.lastName = '';
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address!';
      valid = false;
    } else {
      newErrors.email = '';
    }

    // Validate contacts (phone number)
    const contactsRegex = /^[0-9]{10}$/;
    if (!contactsRegex.test(formData.contacts)) {
      newErrors.contacts = 'Please enter a valid 10-digit phone number!';
      valid = false;
    } else {
      newErrors.contacts = '';
    }

    setFormErrors(newErrors);

    if (valid) {
      // Perform registration logic here
      alert('Registration successful!');
    }
    setFormData("")
    return valid;
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className='homecontainer'>
        <form onSubmit={validateForm}>
      <label htmlFor="firstName">First Name:</label>
      <input
        type="text"
        id="firstName"
        name="firstName"
        value={formData.firstName}
        onChange={handleInputChange}
      />
      <div className="error">{formErrors.firstName}</div>

      <label htmlFor="lastName">Last Name:</label>
      <input
        type="text"
        id="lastName"
        name="lastName"
        value={formData.lastName}
        onChange={handleInputChange}
      />
      <div className="error">{formErrors.lastName}</div>

      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        name="email"
        value={formData.email}
        onChange={handleInputChange}
      />
      <div className="error">{formErrors.email}</div>

      <label htmlFor="contacts">Contacts:</label>
      <input
        type="tel"
        id="contacts"
        name="contacts"
        pattern="[0-9]{10}"
        value={formData.contacts}
        onChange={handleInputChange}
      />
      <div className="error">{formErrors.contacts}</div>

      <button type="submit" >Register</button>
      </form>
    </div>
  );
};

export default RegistrationForm;
