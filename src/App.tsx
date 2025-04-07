import ContentManager from './components/ContentManager';
import NotFoundPage from './components/NotFoundPage';
import HomeTemplate from './templates/Home';
import LoginTemplate from './templates/Login'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {

  // Mock de dados simulando o que viria da API
  // const employeeData = {
  //   title: "Tabela de Funcionários",
  //   table: {
  //     data: [
  //       { column: "id", data: "7896321" },
  //       { column: "name", data: "Luis Felipe" },
  //       { column: "cpf", data: "23634697898" },
  //       { column: "rg", data: "794398234" },
  //       { column: "email", data: "luis@gmail.com" },
  //       { column: "phone", data: "23644697865" },
  //     ],
  //   },
  // };

  return (
    <Router>
      <Routes>
        <Route path="/" element={ <LoginTemplate /> } />
        <Route path="/home" element= { <HomeTemplate/> } >
          <Route path="funcionarios" element= {<ContentManager route={"employees"} />} />  
        </Route>
        
        <Route path="*" element={<NotFoundPage />} />


      </Routes>
    </Router>
  );
};

export default App;
