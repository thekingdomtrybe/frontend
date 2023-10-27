import React, { useRef } from 'react';
import PropTypes from 'prop-types';
// import Styles from './FileSelect.module.scss';

function FileSelect({
  children,
  callback,
  name,
  accept,
  multiple,
  className,
}) {
  const fileInputRef = useRef(null);

  const handleFileSelect = () => {
    fileInputRef.current.click();
  };

  const handleFilesChosen = (e) => {
    const selectedFiles = Array.from(e.target.files);
    if (multiple) callback(selectedFiles);
    else callback(selectedFiles[0]);
  };

  return (
    <div className={className}>
      <button type="button" onClick={handleFileSelect}>
        {children}
      </button>
      <input
        type="file"
        accept={accept}
        ref={fileInputRef}
        style={{ display: 'none' }}
        name={name}
        onChange={handleFilesChosen}
        multiple={multiple}
      />
    </div>
  );
}

FileSelect.propTypes = {
  children: PropTypes.node.isRequired,
  callback: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  multiple: PropTypes.bool,
  accept: PropTypes.string,
  className: PropTypes.string,
};

FileSelect.defaultProps = {
  multiple: false,
  accept: '',
  className: '',
};

export default FileSelect;
