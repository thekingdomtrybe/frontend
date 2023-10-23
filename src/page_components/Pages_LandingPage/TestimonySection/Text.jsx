import React from 'react';
import Styles from './Text.module.scss';

function Text() {
  return (
    <div className={Styles.text}>
      <h2>Testimonies</h2>
      <p>
        We believe that sharing our testimonies not
        only strengthens our faith but also connects
        us in a profound way. As you read through these
        accounts, may you find comfort, inspiration,
        and a renewed sense of hope. If you have a
        testimony of faith, transformation, or a
        personal encounter with God&apos;s grace, we
        invite you to share it with our community.
      </p>
    </div>
  );
}

export default Text;
