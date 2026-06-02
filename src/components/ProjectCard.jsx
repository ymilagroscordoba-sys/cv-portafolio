import PropTypes from 'prop-types';

export default function ProjectCard({ project }) {
  const imgSrc = project.imagen
    ? (project.imagen.startsWith('http')
      ? project.imagen
      : encodeURI(`${import.meta.env.BASE_URL}${project.imagen}`))
    : null;

  return (
    <div className="card mb-3">
      {imgSrc && <img src={imgSrc} alt={project.nombre} className="card-img-top" style={{ maxHeight: 220, objectFit: 'cover' }} />}
      <div className="card-body">
        <h5 className="card-title">{project.nombre}</h5>
        <p className="card-text">{project.descripcion}</p>
        {project.tecnologias && project.tecnologias.map((t, i) => (
          <span key={i} className="badge bg-secondary me-1">{t}</span>
        ))}

        <div className="mt-3">
          {project.url && (
            <a href={project.url} target="_blank" rel="noreferrer" className="btn btn-sm btn-primary me-2">Ver demo</a>
          )}
          {project.repo && (
            <a href={project.repo} target="_blank" rel="noreferrer" className="btn btn-sm btn-outline-secondary">Código</a>
          )}
        </div>
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
    imagen: PropTypes.string,
    url: PropTypes.string,
    repo: PropTypes.string,
  }).isRequired,
};
