import React from 'react';
import PropTypes from 'prop-types';
import CharacterCount from '@/components/CharacterCount/CharacterCount';
import FormGroup from '@/components/FormGroup/FormGroup';

function TextArea({
  name,
  label,
  maxChars,
  numRows,
  fieldSize,
  value,
  onChange,
}) {
  return (
    <FormGroup fieldSize={fieldSize}>
      <label htmlFor={name}>
        {label}
      </label>
      <textarea
        name={name}
        id={name}
        rows={numRows}
        maxLength={maxChars}
        value={value}
        onChange={onChange}
        required
      />
      { maxChars && (
        <CharacterCount charsLeft={0} maxChars={maxChars} />
      )}
    </FormGroup>
  );
}

TextArea.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  maxChars: PropTypes.number,
  numRows: PropTypes.number,
  fieldSize: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

TextArea.defaultProps = {
  maxChars: null,
  numRows: 10,
  fieldSize: 'normal',
  value: '',
};

export default TextArea;
