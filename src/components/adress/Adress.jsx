import React from 'react'
import { ComponentTitle, ComponentSubtitle, ComponentWrapper, InputWrapper, InputContainer, RedDot, ErrorMessage } from '../globalForm/style'
import { AdressInput } from './style'

const Adress = ({ address1, address2, city, state, postalCode, onChange, errors }) => {
  return (
    <ComponentWrapper>

      <ComponentTitle>
        Address <RedDot>*</RedDot>
      </ComponentTitle>

      <InputWrapper>
        <AdressInput
          title='put your street address here'
          type="text" name="address1" value={address1} onChange={onChange}
        />
        <ComponentSubtitle>
          {errors.address1 && <ErrorMessage>{errors.address1}</ErrorMessage>}
          Street Address
        </ComponentSubtitle>
      </InputWrapper>

      <InputWrapper>
        <AdressInput
          title='put your street address line 2 here'
          type="text" name="address2" value={address2} onChange={onChange}
        />
        <ComponentSubtitle>
          Street Address Line 2
        </ComponentSubtitle>
      </InputWrapper>

      <InputContainer>
      
        <InputWrapper>
          <AdressInput 
            title='put your city here' 
            type="text" name="city" value={city} onChange={onChange}
          />
          <ComponentSubtitle>
            {errors.city && <ErrorMessage>{errors.city}</ErrorMessage>}
            City
          </ComponentSubtitle>
        </InputWrapper>

        <InputWrapper>
          <AdressInput 
            title='put your state / province here' 
            type="text" name="state" value={state} onChange={onChange}          
          />
          <ComponentSubtitle>
            {errors.state && <ErrorMessage>{errors.state}</ErrorMessage>}
            State / Province
          </ComponentSubtitle>
        </InputWrapper>
      
      </InputContainer>

      <InputWrapper>
        <AdressInput 
          title='put your postal / zip code here' 
          type="text" name="postalCode" value={postalCode} onChange={onChange}   
        />
        <ComponentSubtitle>
          {errors.postalCode && <ErrorMessage>{errors.postalCode}</ErrorMessage>}
          Postal / Zip Code
        </ComponentSubtitle>
      </InputWrapper>

    </ComponentWrapper>
  )
}

export default Adress