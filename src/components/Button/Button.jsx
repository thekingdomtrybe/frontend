import React from 'react';
import PropTypes from 'prop-types';
import Styles from './Button.module.scss';

function Button({
  type, content, variant, children, size, onClick, disabled, styleClass,
}) {
  let className = `${styleClass} `;

  switch (variant) {
    case 'filled': {
      className += Styles.filled;
      break;
    }
    case 'outlined': {
      className += Styles.outlined;
      break;
    }
    case 'dark': {
      className += Styles.dark;
      break;
    }
    case 'orange-1': {
      className += Styles.orange1;
      break;
    }
    case 'orange-7': {
      className += Styles.orange7;
      break;
    }
    case 'blue': {
      className += Styles.blue;
      break;
    }
    case 'blue-1': {
      className += Styles.blue1;
      break;
    }
    case 'gray-1': {
      className += Styles.gray1;
      break;
    }
    case 'gray-3': {
      className += Styles.gray3;
      break;
    }
    default: {
      className += Styles.filled;
    }
  }

  switch (size) {
    case 'small': {
      className = `${className} ${Styles.small}`;
      break;
    }
    default:
      break;
  }

  className = `${Styles.button} ${className}`;

  if (children) {
    return (
      <button
        className={className}
        type={type === 'submit' ? 'submit' : 'button'}
        onClick={onClick}
        disabled={disabled}
      >
        {children}
      </button>
    );
  }

  return (
    <button
      className={className}
      type={type === 'submit' ? 'submit' : 'button'}
      onClick={onClick}
      disabled={disabled}
    >
      {content}
    </button>
  );
}

Button.propTypes = {
  type: PropTypes.string.isRequired,
  content: PropTypes.string,
  variant: PropTypes.string.isRequired,
  children: PropTypes.node,
  size: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  styleClass: PropTypes.string,
};

Button.defaultProps = {
  children: null,
  content: '',
  size: 'normal',
  onClick: () => {},
  disabled: false,
  styleClass: '',
};

export default Button;
