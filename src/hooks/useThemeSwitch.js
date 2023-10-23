import { useEffect } from 'react';

const useThemeSwitch = (newTheme) => {
  useEffect(() => {
    const previousTheme = document.querySelector('meta[name="theme-color"]').getAttribute('content');
    document.querySelector('meta[name="theme-color"]').setAttribute('content', newTheme);

    return () => {
      document.querySelector('meta[name="theme-color"]').setAttribute('content', previousTheme);
    };
  }, [newTheme]);
};

export default useThemeSwitch;
