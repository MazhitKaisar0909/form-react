import React from 'react';
import { NameInput } from './style';
import { ComponentTitle, ComponentSubtitle, ComponentWrapper, InputWrapper, InputContainer, RedDot, ErrorMessage } from '../globalForm/style';

const FullName = ({ firstName, lastName, onChange, errors }) => {

  return (
    <ComponentWrapper>
      <ComponentTitle>
        Full Name <RedDot>*</RedDot>
      </ComponentTitle>

      <InputContainer>
        <InputWrapper>
          <NameInput
            title='put your name here'
            type="text" name="firstName" value={firstName} onChange={onChange}
          />
          <ComponentSubtitle>
            {errors.firstName && <ErrorMessage>{errors.firstName}</ErrorMessage>}
            First Name
          </ComponentSubtitle>
        </InputWrapper>

        <InputWrapper>
          <NameInput
            title='put your last name here'
            type="text" name="lastName" value={lastName} onChange={onChange}
          />
          <ComponentSubtitle>
            {errors.lastName && <ErrorMessage>{errors.lastName}</ErrorMessage>}
            Last Name
          </ComponentSubtitle>
        </InputWrapper>
      </InputContainer>
    </ComponentWrapper>
  );
};



export default FullName