export type Theme = "light" | "dark";

export interface ThemeContextType {
  theme: Theme;
}

export interface Action {
  type: string;
  payload: string;
}
