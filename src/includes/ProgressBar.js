import React from 'react';
import '../css/progressbar.css';

const ProgressBar = ({ fillValue }) => {
  return (
    <div className="progress-bar">
      <div className="progress-fill" style={{ width: `${fillValue}%` }}></div>
    </div>
  );
};

export default ProgressBar;