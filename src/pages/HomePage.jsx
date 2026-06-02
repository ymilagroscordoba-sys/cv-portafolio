import { Link } from 'react-router-dom';
import SkillBadge from '../components/SkillBadge';

export default function HomePage({ tema, toggleTema }) {
  const skills = ['HTML', 'CSS', 'JavaScript', 'React', 'Bootstrap'];

  return (
    <div className="container mt-5 text-center">
      <img
        src={`${import.meta.env.BASE_URL}foto.jpg`}
        alt="Foto de perfil"
        className="rounded-circle img-fluid mb-4"
        style={{ maxWidth: '220px' }}
        onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = 'https://via.placeholder.com/220'; }}
      />
      <h1>Yamila Milagros Cordoba</h1>
      <h3>Estudiante de Analista de Sistemas</h3>
      <p>Institución Cervantes - Actual</p>

      <div className="my-4">
        {skills.map((skill, index) => (
          <SkillBadge key={index} nombre={skill} />
        ))}
      </div>

      <div className="d-flex justify-content-center gap-2 flex-wrap">
        <button className={`btn ${tema === 'dark' ? 'btn-light' : 'btn-dark'}`} onClick={toggleTema}>
          {tema === 'dark' ? 'Modo dia' : 'Modo oscuro'}
        </button>
        <Link to="/contact" className="btn btn-primary">
          Contacto
        </Link>
      </div>
    </div>
  );
}
