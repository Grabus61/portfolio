import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProjectDetail from './pages/ProjectDetail';
import Navbar from './components/Navbar';
import Contact from './components/Contact';

function App() {
  return (
    <Router>
      <div className="bg-primary min-h-screen text-white">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Home />
              <Contact />
            </>
          } />
          <Route path="/project/:id" element={<ProjectDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
