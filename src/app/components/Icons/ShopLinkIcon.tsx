import React from 'react';

function ShopLinkIcon(): JSX.Element {
  return (
    <svg width="80" height="44" viewBox="0 0 80 44">
      <defs>
        <filter
          id="Rechteck_92"
          x="0"
          y="0"
          width="80"
          height="44"
          filterUnits="userSpaceOnUse"
        >
          <feOffset dy="3" />
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feFlood flood-opacity="0.161" />
          <feComposite operator="in" in2="blur" />
          <feComposite in="SourceGraphic" />
        </filter>
      </defs>
      <g transform="translate(-323 -189)">
        <g transform="matrix(1, 0, 0, 1, 323, 189)" filter="url(#Rechteck_92)">
          <g
            id="Rechteck_92-2"
            data-name="Rechteck 92"
            transform="translate(9 6)"
            fill="#fff"
            stroke="rgba(134,104,53,0.5)"
            stroke-width="1"
          >
            <path
              d="M4,0H58a4,4,0,0,1,4,4V26a0,0,0,0,1,0,0H6a6,6,0,0,1-6-6V4A4,4,0,0,1,4,0Z"
              stroke="none"
            />
            <path
              d="M4,.5H58A3.5,3.5,0,0,1,61.5,4V25a.5.5,0,0,1-.5.5H6A5.5,5.5,0,0,1,.5,20V4A3.5,3.5,0,0,1,4,.5Z"
              fill="none"
            />
          </g>
        </g>
        <text
          id="Zum_Shop"
          data-name="Zum Shop"
          transform="translate(336 201)"
          fill="#726e6e"
          font-size="10"
          font-family="WorkSans-Regular, Work Sans"
          letter-spacing="0.04em"
        >
          <tspan x="0" y="9">
            Zum Shop
          </tspan>
        </text>
      </g>
    </svg>
  );
}
export default ShopLinkIcon;
