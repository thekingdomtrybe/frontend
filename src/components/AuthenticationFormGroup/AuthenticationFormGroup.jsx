import React from 'react';
import PropTypes from 'prop-types';
import Styles from './AuthenticationFormGroup.module.scss';

function AuthenticationFormGroup({ children }) {
  return (
    <div className={Styles['form-group']}>
      {children}
    </div>
  );
}

AuthenticationFormGroup.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthenticationFormGroup;
