import { useRef } from 'preact/hooks';

const useLongPress = (duration: number, callback: () => void) => {
  const ref = useRef<number>();

  const onTouchStart = (ev: TouchEvent) => {
    ev.stopPropagation();

    const finish = () => {
      navigator.vibrate?.(50);
      callback();
    };

    if (duration === 0) {
      finish();
      return;
    }

    if (ref.current) clearTimeout(ref.current);
    ref.current = setTimeout(finish, duration);
  };

  const onTouchEnd = (ev: TouchEvent) => {
    ev.stopPropagation();

    if (ref.current) clearTimeout(ref.current);
  };

  return { onTouchStart, onTouchMove: onTouchEnd, onTouchEnd };
};

export default useLongPress;
