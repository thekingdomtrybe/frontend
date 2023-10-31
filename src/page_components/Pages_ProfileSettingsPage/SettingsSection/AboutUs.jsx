import React from 'react';
import PropTypes from 'prop-types';
import SVG from '@/components/SVG/SVG';
import Styles from './AboutUs.module.scss';

function AboutUs({
  goBack,
}) {
  return (
    <div className={Styles['about-us']}>
      <div className={Styles['about-us-header']}>
        <button type="button" onClick={goBack}>
          <SVG icon="arrow-left" color="var(--gray)" width={16} />
          Back to settings
        </button>
        <h2>About Us</h2>
      </div>
      <p>
        At The Kingdom Trybe, we are a vibrant and
        close-knit church fellowship dedicated to fostering
        spiritual growth, community, and worship.
        Our mission is to create an inclusive and nurturing
        environment where individuals from all walks of life
        can come together to seek a deeper connection with God.
      </p>
    </div>
  );
}

AboutUs.propTypes = {
  goBack: PropTypes.func.isRequired,
};

export default AboutUs;
