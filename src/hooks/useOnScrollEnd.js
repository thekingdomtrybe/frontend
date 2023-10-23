import { useEffect } from 'react';

const useOnScrollEnd = (ref, handler) => {
  useEffect(() => {
    const element = ref.current;
    if (!element) return null;

    const onScroll = () => {
      if (element.scrollTop === 0) {
        handler();
      }
    };

    element.addEventListener('scroll', onScroll);

    return () => element.removeEventListener('scroll', onScroll);
  }, [ref, handler]);
};

export default useOnScrollEnd;
