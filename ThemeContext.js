import React, { createContext, useState, useEffect, useContext } from 'react';

const ThemeContext = createContext();

export const themes = {
    light: {
      background: '#ffedd5', // Example light background color
      color: '#1e293b', // Example light text color
      headerBackground: '#ffffff', // Example light header background
    },
    dark: {
      background: '#34373b', // Example dark background color
      color: '#e5e7eb', // Example dark text color
      headerBackground: '#1e1e1e', // Example dark header background
    },
  };
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(themes.light);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e) => {
      setTheme(e.matches ? themes.dark : themes.light);
    };

    if (mediaQuery.matches) {
      setTheme(themes.dark);
    } else {
      setTheme(themes.light);
    }

    mediaQuery.addEventListener('change', handleChange);

    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, []);

  useEffect(() => {
    // Toggle class on body based on theme
    document.body.className = theme === themes.dark ? 'dark' : 'light';

    // Clean up on component unmount
    return () => {
      document.body.className = '';
    };
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
