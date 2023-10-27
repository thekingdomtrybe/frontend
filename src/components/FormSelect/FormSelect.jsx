import React from 'react';
import Select from 'react-select';
import PropTypes from 'prop-types';
import FormGroup from '@/components/FormGroup/FormGroup';

function FormSelect({
  name,
  label,
  options,
  isSearchable,
  value,
  onChange,
}) {
  return (
    <FormGroup>
      <label htmlFor={name}>
        {label}
      </label>
      <Select
        isSearchable={isSearchable}
        options={options}
        name={name}
        id={name}
        pageSize={2}
        value={options.find((option) => option.value === value)}
        onChange={(option) => onChange(option.value)}
        required
      />
    </FormGroup>
  );
}

FormSelect.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
  })).isRequired,
  isSearchable: PropTypes.bool,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

FormSelect.defaultProps = {
  isSearchable: false,
  value: '',
};

export default FormSelect;
