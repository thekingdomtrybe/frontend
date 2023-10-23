import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import Styles from './FileSelect.module.scss';
import SVG from '../SVG/SVG';

function FileSelect({
  callback,
  label,
  name,
  multiple,
}) {
  const fileInputRef = useRef(null);
  const [text, setText] = useState(label);

  const handleFileSelect = () => {
    fileInputRef.current.click();
  };

  const handleFilesChosen = (e) => {
    const selectedFiles = Array.from(e.target.files);
    callback(selectedFiles);
    setText(`${selectedFiles.length} file(s) selected`);
  };

  return (
    <div className={Styles['file-select']}>
      <button type="button" onClick={handleFileSelect}>
        <SVG icon="upload" color="var(--blue)" />
        {text}
      </button>
      <input
        type="file"
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
  callback: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  multiple: PropTypes.bool,
};

FileSelect.defaultProps = {
  multiple: false,
};

export default FileSelect;
