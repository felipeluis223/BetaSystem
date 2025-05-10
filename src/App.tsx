import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ContentManager from './components/ContentManager';
import NotFoundPage from './components/NotFoundPage';
import HomeTemplate from './templates/Home';
import LoginTemplate from './templates/Login';

function App() {
  // Dados de configuração das rotas:
  const routeData = {
    employee: {
      route: "employees",
      title: "Funcionários",
      describle: "Registros de funcionário cadastrados na base de dados."
    },
    user: {
      route: "users",
      title: "Usuários",
      describle: "Registros de usuários cadastrados na base de dados."
    }
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginTemplate />} />
        
        <Route path="/home" element={<HomeTemplate />}>
          <Route path="funcionarios" element={<ContentManager {...routeData.employee} />} />
          <Route path="usuarios" element={<ContentManager {...routeData.user} />} />
        </Route>
        
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;
