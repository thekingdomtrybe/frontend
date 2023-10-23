import React from 'react';
import Styles from './CopyrightText.module.scss';

function CopyrightText() {
  return (
    <p className={Styles.text}>
      &copy;&nbsp;&nbsp;2023 The Kingdom Trybe. All rights reserved.
    </p>
  );
}

export default CopyrightText;
