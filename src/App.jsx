import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import SubmitPage from "./pages/SubmitPage";
import BrowsePage from "./pages/BrowsePage";
import SupportPage from "./pages/SupportPage";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/submit" element={<SubmitPage />} />
        <Route path="/browse" element={<BrowsePage />} />
        <Route path="/support" element={<SupportPage />} />
      </Routes>
    </Router>
  );
}
