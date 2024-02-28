import { useRef } from 'preact/hooks';

const useLongPress = (duration: number, callback: () => void) => {
  const ref = useRef<number>();

  const onTouchStart = (ev: TouchEvent) => {
    ev.stopPropagation();

    if (ref.current) clearTimeout(ref.current);
    ref.current = setTimeout(() => {
      if ('vibrate' in Navigator) (Navigator.vibrate as any)([150]);
      callback();
    }, duration);
  };

  const onTouchEnd = (ev: TouchEvent) => {
    ev.stopPropagation();
    if (ref.current) clearTimeout(ref.current);
  };

  return { onTouchStart, onTouchDrag: onTouchEnd, onTouchEnd };
};

export default useLongPress;
