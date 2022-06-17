export const throttle = <T extends []>(
  callback: (..._: T) => void,
  wait: number,
): ((..._: T) => void) => {
  let timeout: NodeJS.Timeout | undefined;
  let lastArgs: T;
  const next = (): void => {
    timeout = timeout && (clearTimeout(timeout) as undefined);
    callback(...lastArgs);
  };

  return (...args: T): void => {
    lastArgs = args;

    if (timeout === void 0) {
      timeout = setTimeout(next, wait);
    }
  };
};
