import React from 'react';
import PropTypes from 'prop-types';
import Styles from './AuthenticationForm.module.scss';

function AuthenticationForm({
  children,
}) {
  return (
    <form className={Styles['auth-form']}>
      {children}
    </form>
  );
}

AuthenticationForm.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthenticationForm;
