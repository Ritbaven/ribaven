import './App.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/home';
import { Contact } from './pages/contact';
import { Interests } from './pages/interests';
import { Projects } from './pages/projects';
import { Layout } from './Layout';

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout/>}>
          <Route path="/" element={<Home/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/interests" element={<Interests/>}/>
          <Route path="/projects" element={<Projects/>}/>
        </Route>

      </Routes>
    </Router>
  );
}

export default App;
