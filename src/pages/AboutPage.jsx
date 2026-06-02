
import SkillBadge from '../components/SkillBadge';

export default function AboutPage() {
	const experiencia = [
		{ puesto: 'Operadora Telefonica', empresa: 'Geex', periodo: '2022 - Actualidad' },
	];

	const educacion = [
		{ titulo: 'Analista de Sistemas', institucion: 'Institución Cervantes', periodo: 'Actual' },
	];

	const habilidades = ['Programación básica', 'Excel', 'Trabajo en equipo', 'Adaptabilidad'];

	return (
		<div className="container mt-5">
			<h2>Sobre Mi</h2>
			<p>Me encuentro en constante aprendizaje, adquiriendo conocimientos en programación y herramientas informáticas. Me considero una persona responsable, comprometida y con facilidad para adaptarme a nuevos desafíos, además de valorar el trabajo en equipo y la mejora continua para crecer profesionalmente.</p>

			<h4 className="mt-4">Experiencia</h4>
			{experiencia.map((e, i) => (
				<div key={i} className="mb-2">
					<strong>{e.puesto}</strong> - {e.empresa} <em>({e.periodo})</em>
				</div>
			))}

			<h4 className="mt-4">Educación</h4>
			{educacion.map((ed, i) => (
				<div key={i} className="mb-2">
					<strong>{ed.titulo}</strong> - {ed.institucion} <em>({ed.periodo})</em>
				</div>
			))}

			<h4 className="mt-4">Habilidades</h4>
			<div>
				{habilidades.map((h, i) => (
					<SkillBadge key={i} nombre={h} />
				))}
			</div>
		</div>
	);
}
