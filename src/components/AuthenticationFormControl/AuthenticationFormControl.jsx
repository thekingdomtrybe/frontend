import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Styles from './AuthenticationFormControl.module.scss';
import Button from '../Button/Button';

function AuthenticationFormControl({
  type,
  content,
  variant,
  onClick,
  link,
}) {
  const className = Styles['form-control'];

  if (link) {
    return (
      <Link
        to={link}
        className={Styles['form-control-link']}
      >
        <Button
          type={type === 'submit' ? 'submit' : 'button'}
          className={className}
          onClick={onClick}
          variant={variant}
        >
          {content}
        </Button>
      </Link>
    );
  }

  return (
    <Button
      type={type === 'submit' ? 'submit' : 'button'}
      className={className}
      onClick={onClick}
      variant={variant}
    >
      {content}
    </Button>
  );
}

AuthenticationFormControl.propTypes = {
  type: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  variant: PropTypes.string.isRequired,
  link: PropTypes.string,
};

AuthenticationFormControl.defaultProps = {
  link: '',
};

export default AuthenticationFormControl;
