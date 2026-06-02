
import { Link } from 'react-router-dom';

export default function Navbar() {
	return (
		<nav style={{ backgroundColor: '#800000', padding: '1rem' }}>
			<div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
				<Link to="/" style={{ color: 'white', fontSize: '1.5rem', fontWeight: 'bold', textDecoration: 'none' }}>CV Portfolio</Link>
				<div style={{ display: 'flex', gap: '1.5rem' }}>
					<Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Inicio</Link>
					<Link to="/about" style={{ color: 'white', textDecoration: 'none' }}>Sobre Mi</Link>
					<Link to="/projects" style={{ color: 'white', textDecoration: 'none' }}>Proyectos</Link>
					<Link to="/contact" style={{ color: 'white', textDecoration: 'none' }}>Contacto</Link>
				</div>
			</div>
		</nav>
	);
}

