import ContentManager from './components/ContentManager';
import NotFoundPage from './components/NotFoundPage';
import HomeTemplate from './templates/Home';
import LoginTemplate from './templates/Login'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  
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
