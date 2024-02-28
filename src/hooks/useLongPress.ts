import { useRef } from 'preact/hooks';

const useLongPress = (duration: number, callback: () => void) => {
  const ref = useRef<number>();

  const onTouchStart = (ev: TouchEvent) => {
    ev.stopPropagation();
    ev.preventDefault();

    if (ref.current) clearTimeout(ref.current);
    ref.current = setTimeout(() => {
      navigator.vibrate?.(50);
      callback();
    }, duration);
  };

  const onTouchEnd = (ev: TouchEvent) => {
    ev.stopPropagation();
    ev.preventDefault();

    if (ref.current) clearTimeout(ref.current);
  };

  return { onTouchStart, onTouchMove: onTouchEnd, onTouchEnd };
};

export default useLongPress;
