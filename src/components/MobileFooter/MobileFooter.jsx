import React from 'react';
import PropTypes from 'prop-types';
import SocialMediaLinks from './SocialMediaLinks';
import SiteLogo from '../SiteLogo/SiteLogo';
import Styles from './MobileFooter.module.scss';

function MobileFooter({
  variant,
}) {
  let className = Styles.footer;
  if (variant === 'dark') className += ` ${Styles.dark}`;
  if (variant === 'blue') className += ` ${Styles.blue}`;

  return (
    <footer className={className}>
      <SiteLogo variant={variant} />
      <div className={Styles['social-links']}>
        <SocialMediaLinks variant={variant} />
      </div>
    </footer>
  );
}

MobileFooter.propTypes = {
  variant: PropTypes.string,
};

MobileFooter.defaultProps = {
  variant: 'light',
};

export default MobileFooter;
