import { ThemeContextType, Action } from "./theme.types";
import { TOGGLE_THEME } from "./actionTypes";

const themeReducer = (
  state: ThemeContextType,
  action: Action
): ThemeContextType => {
  switch (action.type) {
    case TOGGLE_THEME: {
      const newTheme = state.theme === "light" ? "dark" : "light";
      return { ...state, theme: newTheme };
    }
    default:
      return state;
  }
};

export default themeReducer;
