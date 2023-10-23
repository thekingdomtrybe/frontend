import React from 'react';
import Testimony from './Testimony';
import Styles from './Testimonies.module.scss';

function Testimonies() {
  const testimonies = [
    {
      content: 'After facing eviction and severe harassment from my landlord, I prayed for God\'s guidance in finding a new home for my family. He not only led us to the perfect house but also blessed us with a baby.',
      author: 'Mr and Mrs Agbons',
      key: 'testimony1',
    },
    {
      content: 'After facing eviction and severe harassment from my landlord, I prayed for God\'s guidance in finding a new home for my family. He not only led us to the perfect house but also blessed us with a baby.',
      author: 'Mr and Mrs Agbons',
      key: 'testimony2',
    },
    {
      content: 'After facing eviction and severe harassment from my landlord, I prayed for God\'s guidance in finding a new home for my family. He not only led us to the perfect house but also blessed us with a baby.',
      author: 'Mr and Mrs Agbons',
      key: 'testimony3',
    },
    {
      content: 'After facing eviction and severe harassment from my landlord, I prayed for God\'s guidance in finding a new home for my family. He not only led us to the perfect house but also blessed us with a baby.',
      author: 'Mr and Mrs Agbons',
      key: 'testimony3',
    },
  ];

  const testimonyComponents = testimonies.map((testimony) => (
    <Testimony
      key={testimony.key}
      content={testimony.content}
      author={testimony.author}
    />
  ));

  return (
    <div className={Styles.testimonies}>
      {testimonyComponents}
    </div>
  );
}

export default Testimonies;
