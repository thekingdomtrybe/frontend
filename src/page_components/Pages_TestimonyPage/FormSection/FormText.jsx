import React from 'react';
import Styles from './FormText.module.scss';

function FormText() {
  return (
    <div className={Styles['form-text']}>
      <h2>Testimony Form</h2>
      <p>
        We warmly welcome your testimonies.
        Kindly complete the form below to share your testimonies
        with us. May God bless you abundantly!
      </p>
    </div>
  );
}

export default FormText;
