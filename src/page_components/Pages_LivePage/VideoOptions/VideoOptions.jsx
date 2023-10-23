import React from 'react';
import PropTypes from 'prop-types';
import Styles from './VideoOptions.module.scss';
import SVG from '@/components/SVG/SVG';

function VideoOptions({
  switchPage,
}) {
  const options = [
    {
      index: 1,
      title: 'Share',
      icon: 'share',
      color: 'dark',
    },
    {
      index: 2,
      title: 'Give',
      icon: 'give',
      color: 'dark',
    },
    {
      title: 'TKT',
      icon: 'favicon',
      color: 'white',
      special: true,
    },
  ];

  const optionComponents = options.map((option) => (
    <button
      onClick={() => option.index && switchPage(option.index)}
      type="button"
      key={option.title}
      className={Styles.option + (option.special ? ` ${Styles.special}` : '')}
    >
      <span>
        {option.title}
      </span>
      <SVG icon={option.icon} color={`var(--${option.color})`} />
    </button>
  ));

  return (
    <div className={Styles.options}>
      {optionComponents}
    </div>
  );
}

VideoOptions.propTypes = {
  switchPage: PropTypes.func.isRequired,
};

export default VideoOptions;
