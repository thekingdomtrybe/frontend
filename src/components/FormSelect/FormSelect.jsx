import React from 'react';
import Select from 'react-select';
import PropTypes from 'prop-types';
import FormGroup from '@/components/FormGroup/FormGroup';

function FormSelect({
  name,
  label,
  options,
  isSearchable,
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
};

FormSelect.defaultProps = {
  isSearchable: false,
};

export default FormSelect;
