import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Button from '../Button/Button';
import Styles from './VolunteerGroup.module.scss';

function VolunteerGroup({
  id,
  name,
  description,
  // image,
  link,
}) {
  return (
    <div className={Styles['volunteer-group']}>
      {/* <img src={image} alt={id} /> */}
      <img src="https://via.placeholder.com/200" alt={id} />
      <div className={Styles['group-details']}>
        <h3 className={Styles.name}>{name}</h3>
        <p className={Styles.description}>{description}</p>
      </div>
      <div className={Styles.actions}>
        <Link to={link} target="_blank">
          <Button variant="gray-1" content="Join group" type="button" />
        </Link>
      </div>
    </div>
  );
}

VolunteerGroup.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  // image: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default VolunteerGroup;
