import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import useOnClickOutside from '@/hooks/useOnClickOutside';
import Styles from './BottomSheet.module.scss';

function BottomSheet({
  children,
  close,
  showHandle,
  dim,
  closeOnClickOutside,
}) {
  const sheet = useRef();
  useOnClickOutside(sheet, () => {
    if (closeOnClickOutside) {
      close();
    }
  });

  let className = Styles['bottom-sheet-container'];
  if (dim) {
    className += ` ${Styles.dim}`;
  }

  return (
    <div className={className}>
      <div ref={sheet} className={Styles['bottom-sheet']}>
        {showHandle && (
          <div className={Styles.handle} />
        )}
        {children}
      </div>
    </div>
  );
}

BottomSheet.propTypes = {
  children: PropTypes.node.isRequired,
  close: PropTypes.func.isRequired,
  showHandle: PropTypes.bool,
  dim: PropTypes.bool.isRequired,
  closeOnClickOutside: PropTypes.bool.isRequired,
};

BottomSheet.defaultProps = {
  showHandle: false,
};

export default BottomSheet;
