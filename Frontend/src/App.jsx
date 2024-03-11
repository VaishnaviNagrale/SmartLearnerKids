import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/Pages/HomePage";
import Login from "./components/Pages/LoginPage";
import Register from "./components/Pages/RegisterPage";
import LandingPage from "./components/LandingPage";
import CategoryPage from "./components/Pages/CategoryPage"
import CommingSoon from "./components/widgets/CommingSoon"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/categories" element={<CategoryPage/>} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/videos" element={<CommingSoon />} />
        <Route path="/profile" element={<CommingSoon />} />
        <Route path="/learn/A-Z" element={<CommingSoon />} />
        <Route path="/learn/a-z" element={<CommingSoon />} />
        <Route path="/learn/0-9" element={<CommingSoon />} />
      </Routes>
    </Router>
  );
}

export default App;
