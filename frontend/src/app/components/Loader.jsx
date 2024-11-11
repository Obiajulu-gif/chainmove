// components/Loader.js
import React from 'react';

const Loader = () => {
  return (
    <div className="loader-wrapper">
      <div className="loader"></div>
      <style jsx>{`
        .loader {
          width: 70px;
          aspect-ratio: 1;
          background:
            radial-gradient(farthest-side, #ffa516 90%, #0000) center/16px 16px,
            radial-gradient(farthest-side, green 90%, #0000) bottom/12px 12px;
          background-repeat: no-repeat;
          animation: l17 1s infinite linear;
          position: relative;
        }

        .loader::before {
          content: "";
          position: absolute;
          width: 8px;
          aspect-ratio: 1;
          inset: auto 0 16px;
          margin: auto;
          background: #ccc;
          border-radius: 50%;
          transform-origin: 50% calc(100% + 10px);
          animation: inherit;
          animation-duration: 0.5s;
        }

        @keyframes l17 {
          100% {
            transform: rotate(1turn);
          }
        }

        .loader-wrapper {
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 100vh; /* Ensures it covers the entire viewport */
        }
      `}</style>
    </div>
  );
};

export default Loader;