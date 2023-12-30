import React, { useEffect, useRef } from 'react';
import '../css/progressbar.css';

const ProgressBar = ({ fillValue }) => {
  const progressBarRef = useRef(null);

  useEffect(() => {
    if (progressBarRef.current) {
      progressBarRef.current.style.width = `${fillValue}%`;
    }
  }, [fillValue]);

  return (
    <div className="progress-bar">
      <div ref={progressBarRef} className="progress-fill" style={{ width: '0%' }}></div>
    </div>
  );
};

export default ProgressBar;
