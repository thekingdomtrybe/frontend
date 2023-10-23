import React from 'react';
import Styles from './Text.module.scss';

function PrayerText() {
  return (
    <div className={Styles['prayer-text']}>
      <h2>Let Us Lift You Up In Prayer</h2>
      <p>
        We believe in the incredible power of prayer
        to bring comfort, healing, and guidance during
        life&apos;s challenges. If there&apos;s a specific need,
        concern, or burden on your heart, please allow
        us the privilege of bringing it before God in prayer.
      </p>
    </div>
  );
}

export default PrayerText;
