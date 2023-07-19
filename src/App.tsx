import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useThemeContext } from "./themeContext/ThemeContext";

const App = () => {
  const { theme } = useThemeContext();
  return (
    <div className={` box-border  ${theme ? "dark-theme " : ""}`}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
