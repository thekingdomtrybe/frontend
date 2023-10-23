import React from 'react';
import { Link } from 'react-router-dom';
import Styles from './ButtonControls.module.scss';
import Button from '@/components/Button/Button';

function ButtonControls() {
  return (
    <div className={Styles.controls}>
      <Link to="/live">
        <Button type="button" content="Watch Online" variant="filled" />
      </Link>
      <Link to="/browse-past-sermons">
        <Button type="button" content="View Past Sermons" variant="orange-1" />
      </Link>
    </div>
  );
}

export default ButtonControls;
