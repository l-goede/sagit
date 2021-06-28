import React from 'react';

function BackButtonIcon(): JSX.Element {
  return (
    <svg width="12.828" height="22.828" viewBox="0 0 12.828 22.828">
      <g transform="translate(-26.086 -70.086)">
        <line
          y1="10"
          x2="10"
          transform="translate(27.5 71.5)"
          fill="none"
          stroke="#866835"
          stroke-linecap="round"
          stroke-width="2"
        />
        <line
          x1="10"
          y1="10"
          transform="translate(27.5 81.5)"
          fill="none"
          stroke="var(--secondary-text-color)"
          stroke-linecap="round"
          stroke-width="2"
        />
      </g>
    </svg>
  );
}
export default BackButtonIcon;
