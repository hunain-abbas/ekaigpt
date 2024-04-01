// components/ContactForm.js
import { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    phone: '',
    designation: '',
    discussion: ''
  });
  const [errors, setErrors] = useState({
    name: false,
    email: false,
    organization: false,
    phone: false,
    designation: false,
    discussion: false
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check for empty fields
    const newErrors = {};
    let hasErrors = false;
    for (const field in formData) {
      if (!formData[field]) {
        newErrors[field] = true;
        hasErrors = true;
      } else {
        newErrors[field] = false;
      }
    }
    setErrors(newErrors);

    if (hasErrors) {
      console.error('Please fill in all fields');
      return;
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        console.log('Email sent successfully');
        // Optionally, reset form state here
      } else {
        console.error('Failed to send email');
      }
    } catch (error) {
      console.error('Error sending email:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-md-6 mb-3">
          <label htmlFor="name" className="form-label">Name*</label>
          <input type="text" placeholder="Full Name" className={`form-control ${errors.name && 'is-invalid'}`} id="name" name="name" value={formData.name} onChange={handleChange} />
          {errors.name && <div className="invalid-feedback">Name is required</div>}
        </div>
        <div className="col-md-6 mb-3">
          <label htmlFor="organization" className="form-label">Company Name*</label>
          <input type="text" placeholder="Where do you work?" className={`form-control ${errors.organization && 'is-invalid'}`} id="organization" name="organization" value={formData.organization} onChange={handleChange} />
          {errors.organization && <div className="invalid-feedback">Organization is required</div>}
        </div>
        <div className="col-md-6 mb-3">
          <label htmlFor="email" className="form-label">Work Emails*</label>
          <input type="email" placeholder="Email Address" className={`form-control ${errors.email && 'is-invalid'}`} id="email" name="email" value={formData.email} onChange={handleChange} />
          {errors.email && <div className="invalid-feedback">Email is required</div>}
        </div>
        <div className="col-md-6 mb-3">
          <label htmlFor="designation" className="form-label">Designation*</label>
          <input type="text" placeholder="Your role" className={`form-control ${errors.designation && 'is-invalid'}`} id="designation" name="designation" value={formData.designation} onChange={handleChange} />
          {errors.designation && <div className="invalid-feedback">Designation is required</div>}
        </div>
        <div className="col-md-6 mb-3">
          <label htmlFor="phone" className="form-label">Phone Number*</label>
          <input type="tel" placeholder="+1 XXX XXXX XXXX" className={`form-control ${errors.phone && 'is-invalid'}`} id="phone" name="phone" value={formData.phone} onChange={handleChange} />
          {errors.phone && <div className="invalid-feedback">Phone Number is required</div>}
        </div>
        <div className="col-md-6 mb-3">
          <label htmlFor="discussion" className="form-label">What would you like to discuss?</label>
          <input type="text" placeholder="" className={`form-control ${errors.discussion && 'is-invalid'}`} id="discussion" name="discussion" rows="3" value={formData.discussion} onChange={handleChange} />
          {errors.discussion && <div className="invalid-feedback">Please provide a topic for discussion</div>}
        </div>
        <button type="submit" className="">Get Started Now</button>
      </div>
    </form>
  );
};

export default ContactForm;