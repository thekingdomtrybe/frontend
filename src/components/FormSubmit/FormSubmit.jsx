import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/Button';
import Styles from './FormSubmit.module.scss';
import NeumorphicLoader from '@/components/NeumorphicLoader/NeumorphicLoader';

function FormSubmit({
  isLoading,
  content,
  variant,
  fullWidth,
  size,
  disabled,
  styleClass,
}) {
  let className = fullWidth ? Styles['full-width'] : '';
  className = `${Styles['form-submit']} ${className}`;

  return (
    <div className={className}>
      <Button
        type="submit"
        variant={variant}
        size={size}
        disabled={disabled || isLoading}
        styleClass={styleClass}
      >
        {isLoading && <NeumorphicLoader size={2} />}
        {content}
      </Button>
    </div>
  );
}

FormSubmit.propTypes = {
  content: PropTypes.string.isRequired,
  variant: PropTypes.string.isRequired,
  size: PropTypes.string,
  fullWidth: PropTypes.bool,
  disabled: PropTypes.bool,
  isLoading: PropTypes.bool,
  styleClass: PropTypes.string,
};

FormSubmit.defaultProps = {
  size: 'normal',
  fullWidth: false,
  disabled: false,
  isLoading: false,
  styleClass: '',
};

export default FormSubmit;
