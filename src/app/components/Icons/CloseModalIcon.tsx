import React from 'react';

function CloseModalIcon(): JSX.Element {
  return (
    <svg width="23.545" height="24.545" viewBox="0 0 23.545 24.545">
      <g transform="translate(-52.228 -68.228)">
        <line
          y1="15"
          x2="15"
          transform="translate(53.5 69.5)"
          fill="none"
          stroke="var(--secondary-text-color)"
          stroke-linecap="round"
          stroke-width="1.8"
        />
        <line
          x2="15"
          y2="15"
          transform="translate(53.5 69.5)"
          fill="none"
          stroke="var(--secondary-text-color)"
          stroke-linecap="round"
          stroke-width="1.8"
        />
      </g>
    </svg>
  );
}

export default CloseModalIcon;
