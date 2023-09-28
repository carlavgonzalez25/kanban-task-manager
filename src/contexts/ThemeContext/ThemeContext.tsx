import { Dispatch, ReactNode, createContext, useReducer } from "react";
import { ThemeContextType } from "./theme.types";
import themeReducer from "./themeReducer";

const initialState: ThemeContextType = {
  theme: "light",
};

const ThemeContext = createContext<{
  state: ThemeContextType;
  dispatch: Dispatch<any>;
}>({ state: initialState, dispatch: () => null });

const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(themeReducer, initialState);

  return (
    <ThemeContext.Provider value={{ state, dispatch }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };
