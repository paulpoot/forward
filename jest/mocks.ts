import * as breakpoints from '@contexts/mediaQueryContext';

jest.spyOn(breakpoints, 'useIsSmallScreen').mockImplementation(() => false);
jest.spyOn(breakpoints, 'useIsMediumScreen').mockImplementation(() => false);
jest.spyOn(breakpoints, 'useIsAboveBreakpoint').mockImplementation(() => false);
jest.spyOn(breakpoints, 'useIsBelowBreakpoint').mockImplementation(() => false);

jest.mock('next/dist/client/router', () => require('next-router-mock'));
