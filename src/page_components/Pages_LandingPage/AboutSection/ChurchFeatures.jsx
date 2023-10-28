import React from 'react';
import Styles from './ChurchFeatures.module.scss';
import images from '@/assets/images';
import ChurchFeature from './ChurchFeature';

function ChurchFeatures() {
  const churchFeatures = [
    {
      name: 'CONGREGAGTION',
      description: '1 hour livestream of weekly Sunday services. Streaming is 9am, 12pm and 3pm WAT.',
      cta: 'Watch Now',
      jpegSrc: images.landingPage.aboutSection.congregationJPG,
      webpSrc: images.landingPage.aboutSection.congregationWEBP,
      route: '/live',
    },
    {
      name: 'COMMUNITY',
      description: 'Join and belong to our ever growing trybe of believers all across the world.',
      cta: 'Join Us',
      jpegSrc: images.landingPage.aboutSection.communityJPG,
      webpSrc: images.landingPage.aboutSection.communityWEBP,
      route: '/join-our-community',
    },
    {
      name: 'COUNSELLING',
      description: 'Our counselling provides faith-based support for emotional and spiritual challenges.',
      cta: 'Talk to a Pastor',
      jpegSrc: images.landingPage.aboutSection.counsellingJPG,
      webpSrc: images.landingPage.aboutSection.counsellingWEBP,
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
      jpegSrc={feature.jpegSrc}
      webpSrc={feature.webpSrc}
    />
  ));

  return (
    <div className={Styles['church-features']}>
      {churchFeaturesComponents}
    </div>
  );
}

export default ChurchFeatures;
