import React from 'react';
import PropTypes from 'prop-types';
import Styles from './FormGroup.module.scss';

function FormGroup({
  children, fieldSize, align, type,
}) {
  let className = Styles['form-group'];

  switch (fieldSize) {
    case 'small':
      className += ` ${Styles.small}`;
      break;
    case 'smaller':
      className += ` ${Styles.smaller}`;
      break;
    default:
      break;
  }

  switch (align) {
    case 'center':
      className += ` ${Styles.center}`;
      break;
    case 'right':
      className += ` ${Styles.right}`;
      break;
    default:
      break;
  }

  switch (type) {
    case 'checkbox':
      className += ` ${Styles.checkbox}`;
      break;
    default:
      break;
  }

  return (
    <div className={className}>
      {children}
    </div>
  );
}

FormGroup.propTypes = {
  children: PropTypes.node.isRequired,
  fieldSize: PropTypes.string,
  align: PropTypes.string,
  type: PropTypes.string,
};

FormGroup.defaultProps = {
  fieldSize: 'normal',
  align: 'left',
  type: 'other',
};

export default FormGroup;
