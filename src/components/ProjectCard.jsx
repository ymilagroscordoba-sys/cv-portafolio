import PropTypes from 'prop-types';

export default function ProjectCard({ project }) {
  return (
    <div className="card mb-3">
      <div className="card-body">
        <h5 className="card-title">{project.nombre}</h5>
        <p className="card-text">{project.descripcion}</p>
        {project.tecnologias && project.tecnologias.map((t, i) => (
          <span key={i} className="badge bg-secondary me-1">{t}</span>
        ))}
      </div>
    </div>
  );
}

ProjectCard.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    nombre: PropTypes.string.isRequired,
    descripcion: PropTypes.string,
    tecnologias: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};
