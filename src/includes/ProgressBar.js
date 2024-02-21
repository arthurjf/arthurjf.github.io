import React, { useEffect, useRef, useState } from 'react';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import '../css/progressbar.css';

const ProgressBar = ({ fillValue }) => {
  const progressBarRef = useRef(null);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    if (progressBarRef.current) {
      progressBarRef.current.style.width = `${fillValue}%`;
    }
  }, [fillValue]);

  const handleMouseEnter = () => {
    setShowTooltip(true);
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);
  };

  return (
    <div className="progress-bar">
      <OverlayTrigger
        placement="bottom"
        overlay={<Tooltip id="tooltip">{`${fillValue}%`}</Tooltip>}
        show={showTooltip}
      >
        <div
          ref={progressBarRef}
          className="progress-fill"
          style={{ width: `${fillValue}%` }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        ></div>
      </OverlayTrigger>
    </div>
  );
};

export default ProgressBar;
