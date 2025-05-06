import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ContentManager from './components/ContentManager';
import NotFoundPage from './components/NotFoundPage';
import HomeTemplate from './templates/Home';
import LoginTemplate from './templates/Login';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginTemplate />} />
        <Route path="/home" element={<HomeTemplate />}>
          <Route path="funcionarios" element={<ContentManager route={"employees"} title={"employee"} />} />
          <Route path="usuarios" element={<ContentManager route={"users"} title={"user"} />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;
