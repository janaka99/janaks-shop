import { createContext, useState, useContext, PropsWithChildren } from "react";

const ThemeContext = createContext<any>(null);

export const useThemeContext = () => {
  const themeContext = useContext(ThemeContext);

  if (!themeContext) {
    throw new Error("Please provide a theme context");
  }

  return themeContext;
};
export const ThemeProvider = (props: PropsWithChildren) => {
  const [theme, setTheme] = useState(false);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
};
