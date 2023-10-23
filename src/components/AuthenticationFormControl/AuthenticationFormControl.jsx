import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Styles from './AuthenticationFormControl.module.scss';

function AuthenticationFormControl({
  type,
  content,
  variant,
  onClick,
  link,
}) {
  const className = `${Styles['form-control']} ${Styles[variant]}`;

  if (link) {
    return (
      <Link
        to={link}
        className={className}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type === 'submit' ? 'submit' : 'button'}
      className={className}
      onClick={onClick}
    >
      {content}
    </button>
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
