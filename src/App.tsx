import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import ContentManager from './components/ContentManager';
import NotFoundPage from './components/NotFoundPage';
import HomeTemplate from './templates/Home';
import LoginTemplate from './templates/Login';

function RedirectOnToken() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("tokenBeta");
    if (token != null) {
      navigate("/home");
    }
  }, [navigate]);

  return null;
}

function App() {
  return (
    <Router>
      <RedirectOnToken />
      <Routes>
        <Route path="/" element={<LoginTemplate />} />
        <Route path="/home" element={<HomeTemplate />}>
          <Route path="funcionarios" element={<ContentManager route={"employees"} />} />
          <Route path="usuarios" element={<ContentManager route={"users"} />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;
