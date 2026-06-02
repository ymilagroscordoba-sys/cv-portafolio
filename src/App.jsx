import { Routes, Route } from 'react-router-dom';
import useLocalStorage from './hooks/useLocalStorage';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';

export default function App() {
  const [tema, setTema] = useLocalStorage('tema', 'light');

  const toggleTema = () => {
    setTema((prevTema) => (prevTema === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div className={`min-vh-100 ${tema === 'dark' ? 'bg-dark text-light' : 'bg-light text-dark'}`}>
      <Navbar tema={tema} toggleTema={toggleTema} />
      <Routes>
        <Route path="/" element={<HomePage tema={tema} toggleTema={toggleTema} />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </div>
  );
}
