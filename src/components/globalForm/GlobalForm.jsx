import React, { useState } from 'react';
import FullName from '../fullName';
import Address from '../adress';
import Contact from '../contact';
import { Wrapper, SubmitBtn, Line, Logo } from './style';
import Img from '../../img/logoEDUCBA.jpg';

const GlobalForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    address1: '',
    address2: '',
    city: '',
    state: '',
    postalCode: '',
    phone: '',
    email: '',
  });

  const [formErrors, setFormErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm(formData);
    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      console.log('Form data:', formData);
    } else {
      console.log('Form validation errors:', errors);
    }
  };

  return (
    <Wrapper onSubmit={handleSubmit}>
      <Logo src={Img} />
      <FullName
        firstName={formData.firstName}
        lastName={formData.lastName}
        onChange={handleChange}
        errors={formErrors}
      />
      <Address
        address1={formData.address1}
        address2={formData.address2}
        city={formData.city}
        state={formData.state}
        postalCode={formData.postalCode}
        onChange={handleChange}
        errors={formErrors}
      />
      <Contact
        phone={formData.phone}
        email={formData.email}
        onChange={handleChange}
        errors={formErrors}
      />
      <Line />
      <SubmitBtn type="submit">
        Submit
      </SubmitBtn>
    </Wrapper>
  );
};

const validateForm = (formData) => {

  const errors = {};
  if (!formData.firstName || formData.firstName.length < 2) {
    errors.firstName = 'First name should be at least 2 characters long';
  }
  if (!formData.lastName || formData.lastName.length < 2) {
    errors.lastName = 'Last name should be at least 2 characters long';
  }
  if (!formData.address1) {
    errors.address1 = 'Address is required';
  }
  if (!formData.city) {
    errors.city = 'City is required';
  }
  if (!formData.state) {
    errors.state = 'State / Province is required';
  }
  if (!formData.postalCode) {
    errors.postalCode = 'Postal / Zip Code is required';
  }
  if (!formData.phone) {
    errors.phone = 'Phone Code is required';
  }
  if (!formData.email) {
    errors.email = 'Email Code is required';
  }

  return errors;
};



export default GlobalForm;
