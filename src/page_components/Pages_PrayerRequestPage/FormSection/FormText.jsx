import React from 'react';
import Styles from './FormText.module.scss';

function FormText() {
  return (
    <div className={Styles['form-text']}>
      <h2>Prayer Request Form</h2>
      <p>
        We warmly welcome your thoughts and prayer requests.
        Kindly complete the form below to share your prayer
        request with us. May God bless you abundantly!
      </p>
    </div>
  );
}

export default FormText;
