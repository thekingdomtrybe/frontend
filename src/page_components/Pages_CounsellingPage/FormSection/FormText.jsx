import React from 'react';
import Styles from './FormText.module.scss';

function FormText() {
  return (
    <div className={Styles['form-text']}>
      <h2>Counselling Form</h2>
      <p>
        We believe seeking support is a brave and essential step towards
        personal growth and well-being. This form is designed to help us
        understand your needs and preferences better so that we can offer
        you the best possible counselling experience.
        <br />
        <br />
        Please take a few minutes to fill out the form thoughtfully
        and honestly. Your responses will remain confidential and will
        only be used to match you with a counsellor who can best address
        your unique situation.
      </p>
    </div>
  );
}

export default FormText;
