import React from 'react';
import Styles from './LiveShare.module.scss';
import SVG from '../SVG/SVG';

function LiveShare() {
  const device = navigator.userAgent;
  const isMobile = device.includes('Android') || device.includes('iPhone');

  // TODO: Update links
  const links = [
    {
      text: 'Whatsapp',
      name: 'whatsapp',
      link: isMobile ? 'whatsapp://send?text=This is WhatsApp sharing example using button'
        : 'https://web.whatsapp.com://send?text=This is whatsapp sharing example using button',
      icon: 'whatsapp',
    },
    {
      text: 'X',
      name: 'x',
      link: 'https://x.com/intent/tweet?text=Hello%20world&hashtags=tkt,thekingdomtrybe,trucalms',
      icon: 'x',
    },
  ];

  const shareComponents = links.map((link) => (
    <a key={link.name} className={`${Styles.link} ${Styles[link.icon]}`} href={link.link} target="_blank" rel="noreferrer">
      <SVG icon={link.icon} />
      {link.text}
    </a>
  ));

  shareComponents.push(
    <button key="copy" className={Styles.link} type="button" onClick={() => { navigator.clipboard.writeText(window.location.href); }}>
      <SVG icon="link" />
      Copy link
    </button>,
  );

  return (
    <div className={Styles['live-share']}>
      {shareComponents}
    </div>
  );
}

export default LiveShare;
