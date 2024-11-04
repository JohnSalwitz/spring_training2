import { useRef, useEffect } from 'react';

export default function useHorizontalScroll(): { current: HTMLElement | null } {
    const elRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const el = elRef.current;
        if (el) {
            const onWheel = (e: WheelEvent) => {
                if (e.deltaY === 0) return;
                e.preventDefault();
                el.scrollTo({
                    left: el.scrollLeft + e.deltaY,
                    behavior: 'smooth',
                });
            };

            el.addEventListener('wheel', onWheel);

            return () => {
                el.removeEventListener('wheel', onWheel);
            };
        }
    }, []);

    return elRef;
}