import { useEffect } from 'react';

const useDimSection = (
  sectionRef,
  className,
  threshold = 0.5,
) => {
  useEffect(() => {
    const section = sectionRef?.current;

    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.remove(className);
        } else {
          entry.target.classList.add(className);
        }
      });
    }, {
      threshold,
    });

    if (section) {
      sectionObserver.observe(section);
    }

    return () => {
      if (section) {
        sectionObserver.unobserve(section);
      }
    };
  });
};

export default useDimSection;
