import "./App.scss";
import "./theme/globals.scss";
import "./theme/variables.scss";
import { ThemeProvider } from "./contexts/ThemeContext/ThemeContext";
import Layout from "./components/Layout/Layout";

function App() {
  return (
    <ThemeProvider>
      <Layout />
    </ThemeProvider>
  );
}

export default App;
