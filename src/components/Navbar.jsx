import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function Navbar({ tema, toggleTema }) {
  return (
    <nav className={`py-3 ${tema === 'dark' ? 'bg-dark text-light' : 'bg-light text-dark'}`}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Link to="/" className={tema === 'dark' ? 'text-light' : 'text-dark'} style={{ fontSize: '1.5rem', fontWeight: 'bold', textDecoration: 'none' }}>
          CV Portfolio
        </Link>

        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <Link to="/" className={tema === 'dark' ? 'text-light' : 'text-dark'} style={{ textDecoration: 'none' }}>Inicio</Link>
          <Link to="/about" className={tema === 'dark' ? 'text-light' : 'text-dark'} style={{ textDecoration: 'none' }}>Sobre Mi</Link>
          <Link to="/projects" className={tema === 'dark' ? 'text-light' : 'text-dark'} style={{ textDecoration: 'none' }}>Proyectos</Link>
          <Link to="/contact" className={tema === 'dark' ? 'text-light' : 'text-dark'} style={{ textDecoration: 'none' }}>Contacto</Link>
          <button
            type="button"
            className={`btn btn-sm ${tema === 'dark' ? 'btn-light' : 'btn-dark'}`}
            onClick={toggleTema}
          >
            {tema === 'dark' ? 'Modo dia' : 'Modo oscuro'}
          </button>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  tema: PropTypes.string.isRequired,
  toggleTema: PropTypes.func.isRequired,
};

