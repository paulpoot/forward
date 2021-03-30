import { useState, useEffect } from 'react';
import { throttle } from '~/lib/utils';

const getDeviceConfig = (query: number): boolean => {
    // em value 48 for mobile and 64 for tablet
    const value = window.innerWidth / parseFloat(getComputedStyle(document.body).fontSize);
    return value < query;
};

const useBreakpoint = (query: number): boolean => {
    const [value, setValue] = useState<boolean>(() => (typeof window !== 'undefined' ? getDeviceConfig(query) : false));

    useEffect(() => {
        let mounted = true;
        const calcInnerWidth = throttle(() => {
            if (mounted) {
                setValue(getDeviceConfig(query));
            }
        }, 200);
        window.addEventListener('resize', calcInnerWidth);
        return (): void => {
            window.removeEventListener('resize', calcInnerWidth);
            mounted = false;
        };
    }, [query]);

    return value;
};
export default useBreakpoint;

export const useIsMobile = (): boolean => useBreakpoint(48);

export const useIsTablet = (): boolean => useBreakpoint(64);
