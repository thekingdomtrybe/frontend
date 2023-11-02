import React from 'react';
import SVG from '../SVG/SVG';
import Styles from './LiveShare.module.scss';

function LiveShare() {
  const device = navigator.userAgent;
  const isMobile = device.includes('Android') || device.includes('iPhone');

  // TODO: Update links
  const links = [
    {
      text: 'Whatsapp',
      name: 'whatsapp',
      link: isMobile ? 'whatsapp://send?text=Join us live at https://thekingdomtrybe.com/live'
        : 'https://web.whatsapp.com://send?text=Join us live at https://thekingdomtrybe.com/live',
      icon: 'whatsapp',
      title: 'Share via Whatsapp',
    },
    {
      text: 'X',
      name: 'x',
      link: 'https://x.com/intent/tweet?text=Join%20us%20live%20at%20https://thekingdomtrybe.com/live&hashtags=thekingdomtrybe,tkt',
      icon: 'x',
      title: 'Share via X',
    },
  ];

  const shareComponents = links.map((link) => (
    <a
      key={link.name}
      className={`${Styles.link} ${Styles[link.icon]}`}
      href={link.link}
      target="_blank"
      rel="noreferrer"
      title={link.title}
    >
      <SVG icon={link.icon} />
      <span>{link.text}</span>
    </a>
  ));

  shareComponents.push(
    <button
      key="copy"
      className={Styles.link}
      type="button"
      onClick={() => { navigator.clipboard.writeText(window.location.href); }}
      title="Copy link"
    >
      <SVG icon="link" />
      <span>Copy link</span>
    </button>,
  );

  return (
    <div className={Styles['live-share']}>
      {shareComponents}
    </div>
  );
}

export default LiveShare;
