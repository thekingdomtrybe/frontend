import React from 'react';
import Styles from './ChurchFeatures.module.scss';
import ChurchFeature from './ChurchFeature';

function ChurchFeatures() {
  const churchFeatures = [
    {
      name: 'CONGREGAGTION',
      description: '1 hour livestream of weekly Sunday services. Streaming is 9am, 12pm and 3pm WAT.',
      cta: 'Watch Now',
      img: 'congregation',
      route: '/live',
    },
    {
      name: 'COMMUNITY',
      description: 'Join and belong to our ever growing trybe of believers all across the world.',
      cta: 'Join Us',
      img: 'community',
      route: '/join-our-community',
    },
    {
      name: 'COUNSELLING',
      description: 'Our counselling provides faith-based support for emotional and spiritual challenges.',
      cta: 'Talk to a Pastor',
      img: 'counselling',
      route: '/request-counselling',
    },
  ];

  const churchFeaturesComponents = churchFeatures.map((feature) => (
    <ChurchFeature
      key={feature.name}
      name={feature.name}
      description={feature.description}
      cta={feature.cta}
      route={feature.route}
      image={feature.img}
    />
  ));

  return (
    <div className={Styles['church-features']}>
      {churchFeaturesComponents}
    </div>
  );
}

export default ChurchFeatures;
