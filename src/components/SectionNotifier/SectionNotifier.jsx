/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
import React, {
  useCallback, useEffect, useRef, useState,
} from 'react';
import PropTypes from 'prop-types';
import Styles from './SectionNotifier.module.scss';

function SectionNotifier({
  show,
  timeout,
  delay,
  color,
  bg,
  message,
  children,
  waitTillLoadComplete,
  speed,
  fixed,
  align,
  customClass,
}) {
  let speedClass = Styles.normal;
  let className = `${Styles.notifier} ${customClass}`;
  let textAlign = align;
  let animationDuration = 2400;

  switch (speed) {
    case 'fast':
      speedClass = Styles.fast;
      animationDuration = 1200;
      break;
    case 'slow':
      speedClass = Styles.slow;
      animationDuration = 4800;
      break;
    default:
      break;
  }

  className += ` ${speedClass}`;

  switch (align) {
    case 'center': {
      textAlign = 'center';
      break;
    }
    case 'right':
      textAlign = 'right';
      break;
    default:
      break;
  }

  const [content, setContent] = useState(null);
  const contentRef = useRef(null);

  const generateContent = useCallback(() => {
    if (children) {
      setContent(
        <div
          ref={contentRef}
          className={className}
          tabIndex={0}
        >
          {children}
        </div>,
      );
    } else {
      setContent(
        <div
          ref={contentRef}
          className={className}
          tabIndex={0}
          style={{
            color,
            backgroundColor: bg,
            textAlign,
          }}
        >
          <div className={Styles.message}>{message}</div>
        </div>,
      );
    }
  }, [children, message, bg, color, textAlign, className]);

  const notify = useCallback(() => {
    if (show) {
      generateContent();
    }
  }, [generateContent, show]);

  useEffect(() => {
    if (waitTillLoadComplete) {
      if (document.readyState !== 'complete') {
        document.onreadystatechange = () => {
          if (document.readyState === 'complete') {
            notify();
          }
        };
        return () => {
          document.onreadystatechange = null;
        };
      }
    }
    notify();
    return () => {};
  }, [show, notify, waitTillLoadComplete]);

  useEffect(() => {
    if (contentRef.current) {
      setTimeout(() => {
        contentRef.current.classList.add(Styles.active);

        // scroll element into view
        const cs = getComputedStyle(document.querySelector(':root'));
        let headerHeight = cs.getPropertyValue('--header-height');
        headerHeight = Number(headerHeight.substring(0, headerHeight.length - 2));
        window.scrollTo(0, contentRef.current.parentNode.offsetTop - headerHeight * 2);

        if (!fixed) {
          setTimeout(() => {
            contentRef.current.classList.remove(Styles.active);

            setTimeout(() => {
              setContent(null);
            }, animationDuration);
          }, timeout + animationDuration);
        }
      }, delay);
    }
  }, [content, show, timeout, animationDuration, delay, fixed]);

  return content;
}

SectionNotifier.propTypes = {
  show: PropTypes.bool,
  timeout: PropTypes.number,
  delay: PropTypes.number,
  color: PropTypes.string,
  bg: PropTypes.string,
  message: PropTypes.string,
  children: PropTypes.node,
  waitTillLoadComplete: PropTypes.bool,
  speed: PropTypes.string,
  fixed: PropTypes.bool,
  align: PropTypes.string,
  customClass: PropTypes.string,
};

SectionNotifier.defaultProps = {
  show: false,
  timeout: 5000,
  delay: 0,
  color: '#fff',
  bg: '#333',
  message: 'This is a message',
  children: null,
  waitTillLoadComplete: false,
  speed: 'normal',
  fixed: false,
  align: 'left',
  customClass: '',
};

export default SectionNotifier;
