import * as React from 'react';

import { throttle } from '@utils/throttle';

export enum BreakpointName {
  Small = 'SMALL',
  Medium = 'MEDIUM',
  Large = 'LARGE',
  XLarge = 'EXTRA-LARGE',
}

// Breakpoint size in pixels
// These are also used in the styles/variables/breakpoints file
export const breakpointSizes = {
  [BreakpointName.Small]: 376,
  [BreakpointName.Medium]: 1024,
  [BreakpointName.Large]: 1440,
  [BreakpointName.XLarge]: 1920,
};

export type MediaQueryContextModel = {
  currentBreakpoint: BreakpointName;
};

const MediaQueryContext = React.createContext<
  MediaQueryContextModel | undefined
>(undefined);
MediaQueryContext.displayName = 'MediaQueryContext';

type Props = {
  initialBreakpoint: BreakpointName | null;
  children: React.ReactNode;
};

export const MediaQueryProvider = ({ initialBreakpoint, children }: Props) => {
  const [currentBreakpoint, setCurrentBreakpoint] = React.useState(
    initialBreakpoint ?? BreakpointName.Small,
  );

  // Set currentBreakpoint based on window size on mount
  React.useEffect(() => {
    setCurrentBreakpoint(getCurrentBreakpoint());
  }, []);

  // Update currentBreakpoint on the resize event
  React.useEffect(() => {
    const handleResize = throttle(
      () => setCurrentBreakpoint(getCurrentBreakpoint()),
      200,
    );
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <MediaQueryContext.Provider value={{ currentBreakpoint }}>
      {children}
    </MediaQueryContext.Provider>
  );
};

function useBreakpoint() {
  const context = React.useContext(MediaQueryContext);
  if (!context) {
    throw new Error(
      `MediaQueryContext missing. Is your component wrapped in the provider?`,
    );
  }
  return context.currentBreakpoint;
}

export function useIsBreakpoint(name: BreakpointName) {
  const currentBreakpoint = useBreakpoint();
  return currentBreakpoint === name;
}

export const useIsSmallScreen = () => useIsBreakpoint(BreakpointName.Small);
export const useIsMediumScreen = () => useIsBreakpoint(BreakpointName.Medium);

const breakpointRange = Object.values(BreakpointName);

// Check if the current breakpoint is above the passed breakpoint
export const useIsAboveBreakpoint = (name: BreakpointName) => {
  const currentBreakpoint = useBreakpoint();
  return (
    breakpointRange.indexOf(currentBreakpoint) > breakpointRange.indexOf(name)
  );
};

// Check if the current breakpoint is below the passed breakpoint
export const useIsBelowBreakpoint = (name: BreakpointName) => {
  const currentBreakpoint = useBreakpoint();
  return (
    breakpointRange.indexOf(currentBreakpoint) < breakpointRange.indexOf(name)
  );
};

const isMinWidth = (width: number) => {
  if (typeof window === 'undefined') return false;
  return window.matchMedia(`(min-width: ${width}px)`).matches;
};

function getCurrentBreakpoint() {
  if (isMinWidth(breakpointSizes[BreakpointName.XLarge])) {
    return BreakpointName.XLarge;
  } else if (isMinWidth(breakpointSizes[BreakpointName.Large])) {
    return BreakpointName.Large;
  } else if (isMinWidth(breakpointSizes[BreakpointName.Medium])) {
    return BreakpointName.Medium;
  } else {
    return BreakpointName.Small;
  }
}
