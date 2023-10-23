import React from 'react';
import PropTypes from 'prop-types';
import Styles from './Button.module.scss';

function Button({
  type, content, variant, children, size, onClick,
}) {
  let className;

  switch (variant) {
    case 'filled': {
      className = Styles.filled;
      break;
    }
    case 'outlined': {
      className = Styles.outlined;
      break;
    }
    case 'orange-1': {
      className = Styles.orange1;
      break;
    }
    case 'blue': {
      className = Styles.blue;
      break;
    }
    case 'blue-1': {
      className = Styles.blue1;
      break;
    }
    default: {
      className = Styles.filled;
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
};

Button.defaultProps = {
  children: null,
  content: '',
  size: 'normal',
  onClick: () => {},
};

export default Button;
