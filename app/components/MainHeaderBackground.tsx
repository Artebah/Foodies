import React from "react";

const MainHeaderBackground = () => {
  return (
    <div className="header-background font-quicksand">
      <svg width="1440" height="120" viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_1_3)">
          <path
            d="M0 120L48 112.5C96 105 192 90 288 84.9844C384 80.1563 480 84.8437 576 87.5156C672 90 768 90 864 84.9844C960 80.1563 1056 69.8438 1152 62.4844C1248 54.8438 1344 50.1563 1392 47.4844L1440 45V0H1392C1344 0 1248 0 1152 0C1056 0 960 0 864 0C768 0 672 0 576 0C480 0 384 0 288 0C192 0 96 0 48 0H0V120Z"
            fill="url(#paint0_linear_1_3)"
          />
        </g>
        <defs>
          <linearGradient
            id="paint0_linear_1_3"
            x1="0"
            y1="0"
            x2="144000"
            y2="0"
            gradientUnits="userSpaceOnUse">
            <stop stop-color="#59453C" />
            <stop offset="1" stop-color="#8F3A09" />
          </linearGradient>
          <clipPath id="clip0_1_3">
            <rect width="1440" height="120" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
};

export default MainHeaderBackground;
