
import proyectos from '../data/proyectos.json';
export default function ProjectsPage(){return <div className='container mt-5'><h2>Proyectos</h2>{proyectos.map(p=><div key={p.id}><h4>{p.nombre}</h4><p>{p.descripcion}</p></div>)}</div>}
