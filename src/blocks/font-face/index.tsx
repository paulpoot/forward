import React from 'react';

import RobotoRegularFont from '@assets/fonts/Roboto-Regular.woff2';

const FontFace = (): JSX.Element => {
  return (
    <style jsx global>{`
      @font-face {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        src: local('Roboto'), url('${RobotoRegularFont}') format('woff2');
        font-display: swap;
      }

      h1,
      h2,
      h3,
      h4,
      h5,
      h6,
      body {
        font-family: 'Roboto', sans-serif;
      }
    `}</style>
  );
};

export default FontFace;
