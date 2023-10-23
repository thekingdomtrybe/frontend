import React from 'react';
import PropTypes from 'prop-types';
import PhoneInput from 'react-phone-number-input';
import FormGroup from '@/components/FormGroup/FormGroup';
import 'react-phone-number-input/style.css';

function CustomPhoneInput({
  name,
  label,
}) {
  return (
    <FormGroup>
      <label htmlFor={name}>
        {label}
      </label>
      <PhoneInput
        name={name}
        id={name}
        defaultCountry="NG"
        required
        onChange={() => {}}
      />
    </FormGroup>
  );
}

CustomPhoneInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default CustomPhoneInput;
