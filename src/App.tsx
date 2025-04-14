import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import ContentManager from './components/ContentManager';
import NotFoundPage from './components/NotFoundPage';
import HomeTemplate from './templates/Home';
import LoginTemplate from './templates/Login';
import { useSelector } from 'react-redux';
import { RootState } from './redux/store';

function RedirectOnToken() {
  const navigate = useNavigate();
  const token = useSelector((state: RootState) => state.auth.token);  // Acessa o token do Redux

  useEffect(() => {
    // Verifica se o token existe e se a rota atual não é '/home'
    if (token && window.location.pathname !== "/home") {
      navigate("/home");
    }
  }, [token, navigate]);  // O useEffect só será chamado quando o token mudar

  return null;  // Não precisa renderizar nada
}

function App() {
  return (
    <Router>
      {/* <RedirectOnToken />  Componente de redirecionamento */}
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
