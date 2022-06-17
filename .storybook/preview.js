import { RouterContext } from 'next/dist/shared/lib/router-context';

import '@styles/base.scss';

const customViewports = {
  iphonex: {
    name: 'iPhone X (Small)',
    styles: {
      height: '812px',
      width: '375px',
    },
    type: 'mobile',
  },
  ipad: {
    name: 'iPad (Medium)',
    styles: {
      height: '1024px',
      width: '768px',
    },
    type: 'medium',
  },
  laptop: {
    name: 'Basic laptop (Large)',
    styles: {
      height: '768px',
      width: '1366px',
    },
    type: 'desktop',
  },
  desktop: {
    name: 'Basic desktop (Extra large)',
    styles: {
      height: '1080px',
      width: '1920px',
    },
    type: 'desktop',
  },
};

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  nextRouter: {
    Provider: RouterContext.Provider,
  },
  viewport: {
    viewports: customViewports,
  },
};
