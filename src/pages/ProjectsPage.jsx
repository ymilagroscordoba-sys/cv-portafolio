
import { useState, useEffect } from 'react';
import ProjectCard from '../components/ProjectCard';
import proyectosData from '../data/proyectos.json';

export default function ProjectsPage() {
	const [proyectos, setProyectos] = useState([]);
	const [cargando, setCargando] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const load = async () => {
			try {
				setCargando(true);
				await new Promise((r) => setTimeout(r, 400));
				setProyectos(proyectosData);
			} catch (err) {
				setError(err.message || 'Error cargando proyectos');
			} finally {
				setCargando(false);
			}
		};
		load();
	}, []);

	if (cargando) return <div className="container mt-5">Cargando proyectos...</div>;
	if (error) return <div className="container mt-5 alert alert-danger">{error}</div>;

	return (
		<div className="container mt-5">
			<h2>Proyectos</h2>
			{proyectos.map((p) => (
				<ProjectCard key={p.id} project={p} />
			))}
		</div>
	);
}
