import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/Button';
import Styles from './FormSubmit.module.scss';

function FormSubmit({
  content,
  variant,
  fullWidth,
  size,
}) {
  let className = fullWidth ? Styles['full-width'] : '';
  className = `${Styles['form-submit']} ${className}`;

  return (
    <div className={className}>
      <Button
        type="submit"
        content={content}
        variant={variant}
        size={size}
      />
    </div>
  );
}

FormSubmit.propTypes = {
  content: PropTypes.string.isRequired,
  variant: PropTypes.string.isRequired,
  size: PropTypes.string,
  fullWidth: PropTypes.bool,
};

FormSubmit.defaultProps = {
  size: 'normal',
  fullWidth: false,
};

export default FormSubmit;
