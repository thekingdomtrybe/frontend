import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Styles from './ChurchFeature.module.scss';

function ChurchFeature({
  name,
  description,
  cta,
  webpSrc,
  jpegSrc,
  route,
}) {
  return (
    <Link to={route} className={Styles['church-feature']}>
      <div className={Styles['church-feature-overlay']} />
      <picture className={Styles['hero-image']}>
        <source srcSet={webpSrc} type="image/webp" />
        <img src={jpegSrc} alt="" loading="lazy" />
      </picture>
      <h3>{name}</h3>
      <p>{description}</p>
      <p>{cta}</p>
    </Link>
  );
}

ChurchFeature.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  cta: PropTypes.string.isRequired,
  webpSrc: PropTypes.string.isRequired,
  jpegSrc: PropTypes.string.isRequired,
  route: PropTypes.string.isRequired,
};

export default ChurchFeature;
