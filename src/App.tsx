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
  const token = useSelector((state: RootState) => state.auth.token);  // Aqui o token é diretamente obtido

  useEffect(() => {
    if (token) { // Verificando se o token existe
      navigate("/home");  // Redireciona para a página inicial
    }
  }, [token, navigate]);

  return null;  // Componente não precisa renderizar nada
}

function App() {
  return (
    <Router>
      <RedirectOnToken />  {/* Componente de redirecionamento */}
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
