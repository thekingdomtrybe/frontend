import React from 'react';
import PropTypes from 'prop-types';
import PhoneInput from 'react-phone-number-input';
import FormGroup from '@/components/FormGroup/FormGroup';
import 'react-phone-number-input/style.css';

function CustomPhoneInput({
  name,
  label,
  value,
  onChange,
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
        onChange={onChange}
        value={value}
      />
    </FormGroup>
  );
}

CustomPhoneInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

CustomPhoneInput.defaultProps = {
  value: '',
};

export default CustomPhoneInput;
