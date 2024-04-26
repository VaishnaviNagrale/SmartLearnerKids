import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/Pages/HomePage";
import Login from "./components/Pages/LoginPage";
import Register from "./components/Pages/RegisterPage";
import LandingPage from "./components/LandingPage";
import CategoryPage from "./components/Pages/CategoryPage"
import CommingSoon from "./components/widgets/CommingSoon"
import Capitals from "./components/Pages/display/Capitals";
import Digits from "./components/Pages/display/Digits"
import Smalls from "./components/Pages/display/Smalls";
import Quiz from "./components/Pages/Quiz/Quiz";


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
        <Route path="/learn/capitals" element={<Capitals/>} />
        <Route path="/learn/smalls" element={<Smalls/>} />
        <Route path="/learn/0-9" element={<Digits/>} />
        <Route path="/quiz" element={<Quiz/>} />
      </Routes>
    </Router>
  );
}

export default App;
