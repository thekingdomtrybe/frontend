import React from 'react';
import PropTypes from 'prop-types';
import FormGroup from '../FormGroup/FormGroup';
import Styles from './FormAlert.module.scss';

function FormAlert({
  icon,
  message,
  variant,
}) {
  const messageClassName = `${Styles.message} ${Styles[variant]}`;

  return (
    <FormGroup>
      <div className={Styles['form-alert']}>
        <div className={Styles.icon}>
          {icon}
        </div>
        <p className={messageClassName}>
          {message}
        </p>
      </div>
    </FormGroup>
  );
}

FormAlert.propTypes = {
  icon: PropTypes.node.isRequired,
  message: PropTypes.string.isRequired,
  variant: PropTypes.string,
};

FormAlert.defaultProps = {
  variant: 'text',
};

export default FormAlert;
