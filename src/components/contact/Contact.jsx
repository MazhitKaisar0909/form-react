import React, { useState } from 'react';
import { ComponentTitle, ComponentSubtitle, ComponentWrapper, InputWrapper, RedDot, ErrorMessage } from '../globalForm/style';
import { ContactInput } from './style';

const Contact = ({ phone, email, onChange, errors }) => {
  const isValidPhone = (value) => {
    return /^\d{10}$/.test(value);
  };

  const isValidEmail = (value) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  };

  const [formErrors, setFormErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    onChange(e);

    const updatedErrors = { ...formErrors };

    if (name === 'phone' && !isValidPhone(value)) {
      updatedErrors.phone = 'Invalid phone number';
    } else {
      delete updatedErrors.phone;
    }

    if (name === 'email' && !isValidEmail(value)) {
      updatedErrors.email = 'Invalid email address';
    } else {
      delete updatedErrors.email;
    }

    setFormErrors(updatedErrors);
  };

  return (
    <ComponentWrapper>

      <ComponentTitle>
        Phone Number <RedDot>*</RedDot>
      </ComponentTitle>

      <ContactInput
        title='put your phone here' placeholder='(000)-000-000'
        type="text" name="phone" value={phone} onChange={handleInputChange}
      />
      <ComponentSubtitle>
        {formErrors.phone && <ErrorMessage>{formErrors.phone}</ErrorMessage>}
        example: (000)-000-000
      </ComponentSubtitle>

      <ComponentTitle>
        E-mail
      </ComponentTitle>

      <InputWrapper>
        <ContactInput
          title='put your mail here' placeholder='ex: email@yahoo.com'
          type="text" name="email" value={email} onChange={handleInputChange}
        />
        <ComponentSubtitle>
          {formErrors.email && <ErrorMessage>{formErrors.email}</ErrorMessage>}
          example@example.com
        </ComponentSubtitle>
      </InputWrapper>

    </ComponentWrapper>
  );
};

export default Contact;
