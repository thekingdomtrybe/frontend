import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@/components/Button/Button';
import Styles from './Controls.module.scss';

function Controls() {
  return (
    <div className={Styles.controls}>
      <Link to="/browse-past-services">
        <Button content="See more" variant="filled" type="button" />
      </Link>
    </div>
  );
}

export default Controls;
