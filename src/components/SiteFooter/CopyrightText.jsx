import React from 'react';
import Styles from './CopyrightText.module.scss';

function CopyrightText() {
  return (
    <p className={Styles.text}>
      &copy; 2023 The Kingdom Trybe. All Rights Reserved.
    </p>
  );
}

export default CopyrightText;
