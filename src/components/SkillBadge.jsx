import PropTypes from 'prop-types';

export default function SkillBadge({ nombre }) {
  return <span className="badge bg-primary me-2">{nombre}</span>;
}

SkillBadge.propTypes = {
  nombre: PropTypes.string.isRequired,
};
