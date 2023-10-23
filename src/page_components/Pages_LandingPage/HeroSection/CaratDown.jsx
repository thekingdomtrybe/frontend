import React from 'react';
import Styles from './CaratDown.module.scss';

function CaratDown() {
  return (
    <div className={Styles['carat-down']}>
      <svg width="24" height="24" viewBox="0 0 23 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M22.0604 0.933594L13.3671 9.62693C12.3404 10.6536 10.6604 10.6536 9.63376 9.62693L0.94043 0.933594" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}

export default CaratDown;
